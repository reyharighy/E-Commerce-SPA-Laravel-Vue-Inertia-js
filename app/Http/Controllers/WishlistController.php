<?php

namespace App\Http\Controllers;

use App\Http\Resources\WishlistResource;
use App\Models\Cart;
use App\Models\Wishlist;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WishlistController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Buyer/Wishlist', [
            'data' => WishlistResource::collection(auth()->user()->wishlist()->get())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $existingWishlist = Wishlist::where('user_id', auth()->user()->id)
            ->where('product_id', $request->productID)
            ->where('size',$request->size)
            ->first();
        
        if ($existingWishlist) {
            return back()->with('warning', 'The product has already existed in your wishlist.');
        }

        Wishlist::create([
            'user_id' => auth()->user()->id,
            'product_id' => $request->productID,
            'size' => $request->size
        ]);

        return back()->with('message', 'The product has been added to your wishlist.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Wishlist $wishlist)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Wishlist $wishlist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Wishlist $wishlist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Wishlist $wishlist)
    {
        $wishlist->delete();

        return back()->with('message', 'The product has been removed from your wishlist.');
    }
}
