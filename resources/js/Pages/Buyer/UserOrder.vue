<script setup>
import UserAuthenticatedLayout from '@/Layouts/UserAuthenticatedLayout.vue'
import { Link } from '@inertiajs/vue3'

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
})

const table_head_list = [
    'No',
    'Total Amount',
    'Created At',
    'Status',
    'Updated At',
    'Action'
]
</script>

<template>
    <UserAuthenticatedLayout title="Order">
        <div class="flex flex-col w-full items-start text-gray-700 px-10 box-border cart-page">
            <div class="relative flex gap-5 h-full w-full">
                <div
                    class="flex flex-col w-full justify-between gap-5"
                    v-if="props.data.length == 0"
                >
                    <div 
                        class="flex flex-col justify-between gap-5 mx-10"
                    >
                        <p class="text-5xl font-semibold my-10">
                            Order History
                        </p>
                        <p class="text-center text-xl h-full font-normal my-10">
                            You haven't made any orders yet.
                        </p>
                    </div>
                </div>
                <div 
                    class="w-full flex mx-10"
                    v-else
                >
                    <div 
                        class="flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list"
                    >
                        <div class="sticky top-0 flex flex-col bg-white">
                            <p class="text-5xl font-semibold py-10">
                                Order History
                            </p>
                            <hr> 
                        </div>
                        <div class="mx-auto w-full pt-5">
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
                                        v-for="(order, index) in data" 
                                        :key="order.id"
                                    >
                                        <td class="px-6 py-4">
                                            {{ index + 1 }}
                                        </td>
                                        <td class="px-6 py-4 font-semibold">
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
                                        <td 
                                            :class="[
                                                'px-6 py-4 font-bold',
                                                order['status'] === 'accepted'
                                                    ? 'text-green-500'
                                                    : ''
                                            ]"
                                        >
                                            {{ order['status'].toUpperCase() }}
                                        </td>
                                        <td class="px-6 py-4 flex gap-2 items-center">
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
                                                :href="route('order.show', order)"
                                            >
                                                See Details
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UserAuthenticatedLayout>
</template>