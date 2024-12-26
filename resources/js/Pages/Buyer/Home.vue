<script setup>
import { Link } from '@inertiajs/vue3'
import UserAuthenticatedLayout from '@/Layouts/UserAuthenticatedLayout.vue'

defineProps({
    discountedProducts: {
        type: Array,
        required: true
    }
})

const topCategories = [
    {name: 'Jeans', id: 8, image: 'jeans'},
    {name: 'Casual Shirts', id: 4, image: 'casual-shirts'},
    {name: 'Loungewear', id: 9, image: 'loungewear'}
]
</script>

<script>
export default {
    methods: {
        asset(path) {
            return `/${path}`
        }
    }
}
</script>

<template>
    <UserAuthenticatedLayout title="Home">
        
        <!--Hero Sections-->
        <div class="relative overflow-hidden bg-[#73c1b4] min-h-dvh">
            <div class="pt-20 pb-40">
                <div class="static max-w-7xl px-10">
                    <!--Hero Text-->
                    <div class="max-w-lg">
                        <h1 class="text-6xl font-bold tracking-tight text-gray-900">
                            Search and Find Your Favorites
                        </h1>
                        <p class="mt-4 text-xl text-gray-500">
                            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                        </p>
                    </div>
                    
                    <!-- Decorative Image Grid -->
                    <div>
                        <div class="mt-10">
                            <div class="pointer-events-none">
                                <div class="absolute transform translate-x-8 left-1/2 top-1/2 -translate-y-1/2">
                                    <div class="flex items-center space-x-8">
                                        <!--First Column Images-->
                                        <div class="grid shrink-0 grid-cols-1 gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg opacity-100">
                                                <img 
                                                    class="size-full object-cover"
                                                    :src="asset('images/hoodies-sweatshirts.jpg')"
                                                    alt=""
                                                >
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img 
                                                    class="size-full object-cover"
                                                    :src="asset('images/chinos.jpg')"
                                                    alt=""
                                                >
                                            </div>
                                        </div>

                                        <!--Second Column Images-->
                                        <div class="grid shrink-0 grid-cols-1 gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img 
                                                    class="size-full object-cover"
                                                    :src="asset('images/jackets.jpg')"
                                                    alt=""
                                                >
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img 
                                                    class="size-full object-cover"
                                                    :src="asset('images/cardigans-pullovers.jpg')"
                                                    alt=""
                                                >
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img 
                                                    class="size-full object-cover"
                                                    :src="asset('images/tshirts.jpg')"
                                                    alt=""
                                                >
                                            </div>
                                        </div>

                                        <!--Third Column Images-->
                                        <div class="grid shrink-0 grid-cols-1 gap-y-8">
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img 
                                                    class="size-full object-cover"
                                                    :src="asset('images/shorts.jpg')"
                                                    alt=""
                                                >
                                            </div>
                                            <div class="h-64 w-44 overflow-hidden rounded-lg">
                                                <img 
                                                    class="size-full object-cover"
                                                    :src="asset('images/casual-dresses.jpg')"
                                                    alt=""
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--Promo Sections-->
        <div id="offers" class="relative z-10 flex flex-col items-center justify-center h-fit text-center text-white px-10 pb-5 w-full">
            <div class="flex flex-col gap-2 w-full mt-20 mb-5">
                <h1 class="text-6xl font-bold text-gray-900">
                    Year-End Clearance
                </h1>
                <p class="mt-4 text-xl text-gray-500">
                    Discover exclusive deals and elevate your style with our limited-time offers.
                </p>
            </div>

            <div class="flex bg-[#73c1b4] w-full py-5 rounded-xl">
                <div class="flex flex-col items-start justify-center w-1/2 flex-shrink-0 pl-10 pt-24">
                    <h1 class="text-5xl text-left font-bold tracking-tight text-gray-900 w-full">
                        Last Chance.
                    </h1>
                    <h1 class="text-5xl text-left font-bold tracking-tight text-gray-900 w-full">
                        Save up to 70% off.
                    </h1>
                    <Link
                        class="w-fit inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 mt-10 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out bg-[#4a8f84] text-white hover:bg-[#008a8e] hover:text-[#ffffff]"
                        :href="route('offers', 1)"
                    >
                        offers
                    </Link>
                </div>
                
                <div class="flex items-center gap-5 text-gray-700 overflow-x-scroll scrollbar-hide pr-5">
                    <Link 
                        class="flex flex-col gap-3 min-w-fit"
                        v-for="product in discountedProducts"
                        :key="product.id"
                        :href="route('details', product.id)"
                    >
                        <div class="relative flex">
                            <img :src="asset(product['imageurl'].slice(36))" alt="" class="rounded-xl h-80 w-60 object-cover">
                            
                            <div class="absolute bottom-0 right-0 p-5 text-xl font-semibold w-full leading-none">
                                <div class="flex text-sm line-through text-gray-400 px-2 text-end w-full justify-end">
                                    $ {{ product['price'] }}
                                </div>
                                <div class="flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white">
                                    <p class="text-sm px-2 py-1 text-red-400">
                                        {{ product['discount'] }}% Off
                                    </p>
                                    <p class="font-normal px-2 py-1">
                                        $ {{ product['discounted_price'] }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-start gap-1">
                            <p class="font-semibold">
                                {{ product['name'] }}
                            </p>
                            <p class="text-gray-500">
                                {{ product['category']['name'] }}
                            </p>
                        </div>
                    </Link>
                </div>
            </div>

            <div class="flex flex-col gap-2 w-full pt-20 mb-5">
                <h1 class="text-6xl font-bold text-gray-900">
                    Explore Our Collection
                </h1>
                <p class="mt-4 text-xl text-gray-500">
                    Find Your Perfect Style Today!
                </p>
            </div>

            <div class="relative h-1/2 w-full">
                <div class="absolute inset-0 bg-black bg-opacity-70 rounded-xl"></div>

                <img 
                    class="rounded-xl"
                    :src="asset('images/category-bg-1.jpg')"
                    alt=""
                >

                <div class="absolute flex flex-col items-center justify-center w-full top-1/4 gap-5 py-10">
                    <Link
                        class="w-fit inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out bg-[#4a8f84] text-white hover:bg-[#008a8e] hover:text-[#ffffff]"
                        :href="route('collection', 1)"
                    >
                        collection
                    </Link>
                    <p class="text-5xl font-bold text-gray-300">
                        Our Top Collection
                    </p>
                </div>

                <div class="absolute flex mx-auto w-full h-1/2 justify-evenly top-1/2 gap-10 px-10 pb-10">
                    <Link
                        class="w-1/3 hover:cursor-pointer"
                        v-for="category in topCategories"
                        :href="route('collection', category.id)"
                    >
                        <img 
                            class="size-full object-cover rounded-xl"
                            :src="asset('images/' + category.image + '.jpg')"
                            :alt="category.image"
                        >
                        <p class="relative -top-12 w-fit ml-3 px-2 py-1 opacity-50 font-semibold text-xl bg-gray-700 rounded-lg">
                            {{ category.name }}
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    </UserAuthenticatedLayout>
</template>