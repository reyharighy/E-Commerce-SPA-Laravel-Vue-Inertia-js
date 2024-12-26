<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'order_id' => $this->order_id,
            'name' => $this->product->name,
            'category' => $this->product->category->name,
            'size' => $this->size,
            'quantity' => $this->quantity,
            'price' => $this->price,
            'imageurl' => $this->product->imageurl
        ];
    }
}
