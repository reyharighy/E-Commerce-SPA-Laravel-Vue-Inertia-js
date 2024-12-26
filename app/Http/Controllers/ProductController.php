<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {   
        $page_title = 'List';
        
        return Inertia::render('Seller/ProductList', [
            'data' => ProductResource::collection(auth()->user()->product()->latest()->get()),
            'pageTitle' => $page_title,
            'rootPath' => ['Inventory', $page_title],
            'actionName' => 'Register',
            'actionPage' => route('product.create')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $page_title = 'Register';

        return Inertia::render('Seller/ProductRegister', [
            'categoryList' => CategoryResource::collection(Category::orderBy('name')->get()),
            'pageTitle' => $page_title,
            'rootPath' => ['Inventory', $page_title],
            'actionName' => 'List',
            'actionPage' => route('product.index')
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
        $validated = $request->validated();
        $sizes = collect($validated['sizes']);
        $validated['hasStock'] = $sizes->some(fn($stock) => $stock > 0);
        $validated['sizes'] = json_encode($validated['sizes']);

        $request->user()->product()->create($validated);

        return redirect()
            ->route('product.index')
            ->with('message', 'New Product has been registered successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $page_title = 'Details';
        
        return Inertia::render('Seller/ProductShow',[
            'data' => ProductResource::make($product),
            'pageTitle' => $page_title,
            'rootPath' => ['Inventory', 'List', $page_title],
            'actionName' => 'List',
            'actionPage' => route('product.index')
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        $page_title = 'Edit';
        
        return Inertia::render('Seller/ProductEdit',[
            'categoryList' => CategoryResource::collection(Category::orderBy('name')->get()),
            'data' => ProductResource::make($product),
            'pageTitle' => $page_title,
            'rootPath' => ['Inventory', 'List', 'Details', $page_title],
            'actionName' => 'List',
            'actionPage' => route('product.index')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(StoreProductRequest $request, Product $product)
    {
        $validated = $request->validated();

        $sizes = collect($validated['sizes']);
        $validated['has_stock'] = $sizes->some(fn($stock) => $stock > 0);
        $validated['sizes'] = json_encode($validated['sizes']);

        $product->update($validated);

        return redirect()
            ->route('product.show', $product)
            ->with('message', 'Product has been updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, Product $product)
    {
        $request->validate([
            'confirmation' => ['required', 'in:delete']
        ]);

        $product->delete();

        return redirect()
            ->route('product.index')
            ->with('message', 'Product has been deleted successfully.');
    }
}
