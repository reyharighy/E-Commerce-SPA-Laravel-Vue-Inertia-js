<?php

namespace App\Http\Controllers;

use App\Http\Resources\OrderItemsResource;
use App\Http\Resources\OrderResource;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItems;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Buyer/UserOrder', [
            'data' => OrderResource::collection(auth()->user()->order()->get())
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
        $order = Order::create([
            'user_id' => auth()->user()->id,
            'total_amount' => $request->total_amount,
            'status' => 'pending'
        ]);

        foreach($request->details as $detail) {
            OrderItems::create([
                'order_id' => $order->id,
                'product_id' => $detail['product']['id'],
                'size' => $detail['size'],
                'quantity' => $detail['quantity'],
                'price' => $detail['product']['discounted_price']
            ]);
        }

        Cart::where('user_id', auth()->user()->id)->delete();

        return redirect()->route('order.index')->with('message', 'Your order has been created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Order $order)
    {
        return Inertia::render('Buyer/OrderDetails', [
            'data' => OrderItemsResource::collection($order->order_item()->get()),
            'order' => OrderResource::make($order)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        //
    }
}
