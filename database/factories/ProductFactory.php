<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $sizeList = ['XS', 'S', 'M', 'L', 'XL'];
        
        $randomSizes = fake()
            ->randomElements($sizeList, fake()->numberBetween(1,count($sizeList)));

        usort($randomSizes, function($a, $b) use ($sizeList) {
            return array_search($a, $sizeList) - array_search($b, $sizeList);
        });

        $sizesObject = collect();
        
        foreach ($randomSizes as $size) {
            $sizesObject[$size] = fake()->numberBetween(0, 50);
        }

        $hasStock = $sizesObject->values()->some(fn ($quantity) => $quantity > 0);
        
        return [
            'name' => ucfirst(fake()->word()),
            'ratings' => fake()->numberBetween(30,50) / 10,
            'reviews' => fake()->numberBetween(10,500),
            'sizes' => json_encode($sizesObject),
            'has_stock' => $hasStock,
            'description' => fake()->paragraph(5)
        ];
    }
}
