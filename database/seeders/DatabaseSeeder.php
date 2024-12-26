<?php

namespace Database\Seeders;

use App\Models\Cart;
use App\Models\Category;
use App\Models\Postal;
use App\Models\Product;
use App\Models\User;
use App\Models\Wishlist;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Http;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {   
        $response = Http::withHeaders([
            'key' => env('RAJAONGKIR_API_KEY')
        ])->get('https://api.rajaongkir.com/starter/city');

        if ($response->ok() && isset($response['rajaongkir']['results'])) {
            $cities = collect($response['rajaongkir']['results']);
        } else {
            throw new \Exception('Failed to fetch city data from RajaOngkir API.');
        }

        $uniquePostalCodes = $cities->pluck('postal_code')->unique()->toArray();
        $postalCodes = collect();

        foreach ($uniquePostalCodes as $uniquePostalCode) {
            $postalCode = $cities->firstWhere('postal_code', $uniquePostalCode);
            
            $postalCodes->push(
                Postal::create([
                    'postal_code' => $postalCode['postal_code'],
                    'city' => $postalCode['city_name'],
                    'province' => $postalCode['province']
                ])
            );
        }

        $seller = User::factory()->create(
            [
                'name' => 'Admin',
                'seller' => true,
                'email' => 'admin@gmail.com',
                'postal_id' => $postalCodes->random()->id
            ]
        );

        $users = User::factory(1)
            ->state(function () use ($postalCodes) {
                return [
                    'postal_id' => $postalCodes->random()->id
                ];
        })->create();

        $categoryList = [
            'All Category',
            'Cardigans & Pullovers',
            'Casual Dresses',
            'Casual Shirts',
            'Chinos',
            'Hoodies & Sweatshirts',
            'Jackets',
            'Jeans',
            'Loungewear',
            'Shorts',
            'T-Shirts'
        ];

        $categories = collect();

        foreach ($categoryList as $category) {
            $categories->push(
                Category::create([
                    'name' => $category
                ])
            );
        }

        $totalProducts = 100;
        
        $products = Product::factory($totalProducts)
            ->state(function () use ($categories) {
                $price = fake()->numberBetween(20, 100) + fake()->numberBetween(1,100) / 100;
                $discounted = fake()->boolean(30);

                if ($discounted) {
                    $discountedPercentage = fake()->randomElement(range(5, 70, 5));
                    $discountedPrice = number_format(($price * (100 - $discountedPercentage) / 100), 2, '.', '');
                } else {
                    $discountedPercentage = 0;
                    $discountedPrice = $price;
                }

                $category = $categories->slice(1)->random();
                $categoryFolder = public_path('images/products/' . $category->name);
                $files = array_diff(scandir($categoryFolder), array('..', '.'));
                $randomImage = $files[array_rand($files)];
                
                return [
                    'category_id' => $category->id,
                    'price' => $price,
                    'discount' => $discountedPercentage,
                    'discounted_price' => $discountedPrice,
                    'imageurl' => $categoryFolder . '/' . $randomImage
                ];
            })
            ->create([
                'user_id' => $seller->id
            ]
        );

        // Random Wishlist and Cart list for seeder
        // $users->each(function (User $user) use ($products, $totalProducts) {
        //     $sizeList = ['XS', 'S', 'M', 'L', 'XL'];
            
        //     if (fake()->boolean(50)) {
        //         $randomTotalProductToCart = fake()->numberBetween(1,5);
        //         $productIDList = fake()
        //             ->randomElements(range(0, $totalProducts - 1), $randomTotalProductToCart);
    
        //         foreach($productIDList as $productID) {
        //             $randomProduct = $products[$productID];
        //             $randomSize = fake()->randomElement($sizeList);
                    
        //             Cart::create([
        //                 'user_id' => $user->id,
        //                 'product_id' => $randomProduct->id,
        //                 'size' => $randomSize,
        //                 'quantity' => 1
        //             ]);
        //         }
        //     }

        //     if (fake()->boolean(30)) {
        //         $randomTotalProductToWishlist = fake()->numberBetween(1,10);
        //         $productIDList = fake()
        //             ->randomElements(range(0, $totalProducts - 1), $randomTotalProductToWishlist);
                
        //         foreach($productIDList as $productID) {
        //             $randomProduct = $products[$productID];
        //             $randomSize = fake()->randomElement($sizeList);

        //             Wishlist::create([
        //                 'user_id' => $user->id,
        //                 'product_id' => $randomProduct->id,
        //                 'size' => $randomSize
        //             ]);
        //         }
        //     }
        // });
    }
}
