<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'user_name' => $this->user->name,
            'user_id' => $this->user_id,
            'total_amount' => $this->total_amount,
            'created_at' => $this->created_at,
            'status' => $this->status,
            'updated_at' => $this->updated_at
        ];
    }
}
