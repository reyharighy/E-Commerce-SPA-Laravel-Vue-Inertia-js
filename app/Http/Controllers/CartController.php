<?php

namespace App\Http\Controllers;

use App\Http\Resources\CartResource;
use App\Models\Cart;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Buyer/Cart', [
            'data' => CartResource::collection(auth()->user()->cart()->get())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Has been handled in Details.vue with modal
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        $existingCart = Cart::where('user_id', auth()->user()->id)
            ->where('product_id', $request->productID)
            ->where('size',$request->size)
            ->first();
        
        if ($existingCart) {
            return back()->with('warning', 'The product has already existed in your cart.');
        }

        Cart::create([
            'user_id' => auth()->user()->id,
            'product_id' => $request->productID,
            'size' => $request->size,
            'quantity' => 1
        ]);

        return back()->with('message', 'The product has been added to your cart.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        // Cart populates all product in Cart.vue
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        // no need to edit nor update the quantity in the database
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        // no need to edit nor update the quantity in the database
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart)
    {
        $cart->delete();

        return back()->with('message', 'The product has been removed from your cart.');
    }
}
