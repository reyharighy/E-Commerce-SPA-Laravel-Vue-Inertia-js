<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostalResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'postal_id' => $this->id,
            'postal_code' => $this->postal_code,
            'city' => $this->city,
            'province' => $this->province
        ];
    }
}
