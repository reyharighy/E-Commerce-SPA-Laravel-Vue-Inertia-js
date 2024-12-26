<script setup>
import SellerAuthenticatedLayout from '@/Layouts/SellerAuthenticatedLayout.vue'
import { Link } from '@inertiajs/vue3'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import { 
    ChevronDoubleRightIcon
 } from '@heroicons/vue/24/outline'

defineProps({
    data: {
        type: Array,
        required: true
    },
    pageTitle: {
        type: String,
        required: true
    },
    rootPath: {
        type: Array,
        required: true
    },
    actionName: {
        type: String,
        required: true
    },
    actionPage: {
        type: String,
        required: true
    }
})

const table_head_list = [
    'No',
    'Name',
    'Category',
    'Price',
    'SKU',
    'Action'
]

const discounted = (val) => val > 0
</script>

<template>
    <SellerAuthenticatedLayout :title="pageTitle">
        <div class="flex flex-col my-5">
            <div class="flex items-center justify-between px-8">
                <div v-if="pageTitle == rootPath[0]">
                    <h2 class="font-semibold text-xl text-[#008a8e] leading-tight">
                        {{ pageTitle }}
                    </h2>
                </div>
                <div
                    class="flex"
                    v-else
                >
                    <div 
                        class="font-semibold text-xl text-gray-900 leading-tight" 
                        v-for="page in rootPath"
                    >
                        <div class="flex flex-row items-end">
                            <h1 
                                class="mr-2 text-2xl leading-tight"
                                v-if="page != pageTitle" 
                            >
                                {{ page }}
                            </h1>
                            <ChevronDoubleRightIcon 
                                class="mr-2 size-7 text-gray-400" 
                                v-if="page != pageTitle">
                            </ChevronDoubleRightIcon>
                        </div>
                    </div>
                    <div class="font-semibold text-2xl text-[#008a8e] leading-tight">
                        {{ pageTitle }}
                    </div>
                </div>
                <Link :href="actionPage">
                    <PrimaryButton class="ms-4">
                        {{ actionName }}
                    </PrimaryButton>
                </Link>
            </div>
            
            <div class="mx-auto w-full px-8 pt-5">
                <p class="mb-2 text-red-400">
                    * means discounted price
                </p>
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 rounded-xl overflow-hidden">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-100 border-b">
                        <tr>
                            <th
                                class="px-6 py-3"
                                scope="col"
                                v-for="head in table_head_list"
                            >
                                {{ head }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="bg-white border-b hover:bg-gray-50" 
                            v-for="(product, index) in data" 
                            :key="product.id"
                        >
                            <td class="px-6 py-4">
                                {{ index + 1 }}
                            </td>
                            <td class="px-6 py-4 font-semibold">
                                {{ product.name }}
                            </td>
                            <td class="px-6 py-4">
                                {{ product.category.name }}
                            </td>
                            <td class="px-6 py-4">
                                ${{ (product.discounted_price).toFixed(2)}}
                                <span class="text-red-400 font-extrabold">{{ discounted(product.discount) ? '*' : '' }}</span>
                            </td>
                            <td>
                                <div v-for="(stock, size) in product.sizes"
                                    class="flex flex-col my-1 w-fit"
                                >
                                    <div 
                                        class="flex gap-1"
                                        v-if="stock < 10 && stock > 0"
                                    >
                                        <p class="text-red-400 font-semibold h-full">
                                            Size {{ size }} is {{ stock }} items left!
                                        </p>
                                    </div>
                                    <div 
                                        class="flex gap-1"
                                        v-else-if="stock == 0"
                                    >
                                        <p class="text-red-400 font-semibold h-full">
                                            Size {{ size }} is out of stock!
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <Link
                                    class="font-medium hover:underline text-[#00adb5]"
                                    :href="route('product.show', product.id)"
                                >
                                    See Details
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </SellerAuthenticatedLayout>
</template>
