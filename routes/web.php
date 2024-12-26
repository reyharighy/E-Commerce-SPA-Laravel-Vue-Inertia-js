<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WishlistController;
use App\Http\Middleware\AuthenticatedSeller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\OrderItemsResource;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

$discountedProduct = Product::where('has_stock', 1)
    ->where('discount', '>', 0)
    ->orderBy('id');

// Without Authentication
Route::get('/', function () use($discountedProduct)  {
    return Inertia::render('Buyer/Home', [
        'discountedProducts' => ProductResource::collection($discountedProduct->get())
    ]);
})->name('home');

Route::get('/offers/{category}', function (Category $category) use ($discountedProduct) {
    return Inertia::render('Buyer/Offers', [
        'allCategories' => CategoryResource::collection(Category::orderBy('name')->get()),
        'discountedProducts' => ProductResource::collection($discountedProduct->get()),
        'defaultCategoryID' => CategoryResource::make($category)
    ]);
})->name('offers');

Route::get('/collection/{category}', function (Category $category) {
    return Inertia::render('Buyer/Collection', [
        'allCategories' => CategoryResource::collection(Category::orderBy('name')->get()),
        'allProducts' => ProductResource::collection(Product::where('has_stock', 1)->orderBy('id')->get()),
        'defaultCategoryID' => CategoryResource::make($category)
    ]);
})->name('collection');

Route::get('/product-details/{product}', function (Product $product) {
    return Inertia::render('Buyer/Details', [
        'data' => ProductResource::make($product)
    ]);
})->name('details');

// With Authentication
Route::middleware('auth')->group(function ()  {
    // Routes for buyers
    Route::resource('cart', CartController::class);
    Route::resource('wishlist', WishlistController::class);
    Route::resource('order', OrderController::class);

    // Routes for seller
    Route::middleware(AuthenticatedSeller::class)->group(function () {
        Route::resource('product', ProductController::class);

        Route::get('manage-orders', function () {
            $page_title = 'List';

            return Inertia::render('Seller/Order',[
                'data' => OrderResource::collection(Order::all()),
                'pageTitle' => $page_title,
                'rootPath' => ['Order', $page_title]
            ]);
        })->name('manage-orders');

        Route::get('order-details/{order}', function (Order $order) {
            $page_title = 'Details';

            return Inertia::render('Seller/UpdateOrder',[
                'data' => OrderItemsResource::collection($order->order_item),
                'order' => Order::where('id', $order->id)->first(),
                'pageTitle' => $page_title,
                'rootPath' => ['Order', 'List', $page_title]
            ]);
        })->name('order-details');

        Route::patch('update-order/{order}', function (Order $order) {
            $validated = request()->validate([
                'status' => ['required', 'string', 'in:accepted,confirmed,shipped'],
            ]);
        
            Log::info('Validated Data:', $validated);
        
            $order->update([
                'status' => $validated['status'],
            ]);

            $order->update([
                'status' => $validated['status']
            ]);
            
            return redirect()
                ->back()
                ->with('message', 'Order status has been updated successfully.');
        })->name('update-order');
    });
    
    // Routes for profile edit
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
