<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'name' => $this->name,
            'category' => CategoryResource::make($this->category),
            'price' => $this->price,
            'discount' => $this->discount,
            'discounted_price' => $this->discounted_price,
            'ratings' => $this->ratings,
            'reviews' => $this->reviews,
            'sizes' => json_decode($this->sizes),
            'hasStock' => $this->has_stock,
            'description' => $this->description,
            'imageurl' => $this->imageurl
        ];
    }
}
