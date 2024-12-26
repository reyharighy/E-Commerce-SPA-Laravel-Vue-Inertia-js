<script setup>
import SellerAuthenticatedLayout from '@/Layouts/SellerAuthenticatedLayout.vue'
import { Link } from '@inertiajs/vue3'

import { 
    ChevronDoubleRightIcon
 } from '@heroicons/vue/24/outline'

const props = defineProps({
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
    }
})

const table_head_list = [
    'No',
    'Name',
    'Total Amount',
    'Created At',
    'Status',
    'Updated At',
    'Action'
]
</script>

<template>
    <SellerAuthenticatedLayout :title="props.pageTitle">
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
                        v-for="page in props.rootPath"
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
            </div>
            <div class="mx-auto w-full px-8 pt-5">
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
                            v-for="(order, index) in props.data" 
                            :key="order.id"
                        >
                            <td class="px-6 py-4">
                                {{ index + 1 }}
                            </td>
                            <td class="px-6 py-4 font-semibold">
                                {{ order['user_name'] }}
                            </td>
                            <td class="px-6 py-4">
                                {{ order['total_amount'] }}
                            </td>
                            <td class="px-6 py-4 flex gap-2 items-center flex-shrink-0">
                                <p class="font-semibold">
                                    {{ order['created_at'].slice(2, 10) }}
                                </p>
                                <p>|</p>
                                <p>
                                    {{ order['created_at'].slice(11, 16) }}
                                </p>
                            </td>
                            <td class="px-6 py-4 font-bold text-gray-700">
                                {{ order['status'].toUpperCase() }}
                            </td>
                            <td class="px-6 py-4 flex gap-2 items-center flex-shrink-0">
                                <p class="font-semibold">
                                    {{ order['updated_at'].slice(2, 10) }}
                                </p>
                                <p>|</p>
                                <p>
                                    {{ order['updated_at'].slice(11, 16) }}
                                </p>
                            </td>
                            <td class="px-6 py-4 space-x-2">
                                <Link
                                    class="font-medium hover:underline text-[#00adb5]"
                                    :href="route('order-details', order)"
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
