<script setup>
import UserAuthenticatedLayout from '@/Layouts/UserAuthenticatedLayout.vue'
import { Link } from '@inertiajs/vue3';
import PrimaryButton from '@/Components/PrimaryButton.vue';

import { 
    ChevronDoubleRightIcon,
    ShieldCheckIcon
} from '@heroicons/vue/24/outline';

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    order: {
        type: Object,
        required: true
    }
})

const statusList = {
    'pending': 1,
    'accepted': 2,
    'confirmed': 3,
    'shipped': 4,
    'delivered': 5
}

const currentStatus = statusList[props.order['status']]

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
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
    <UserAuthenticatedLayout title="Order Details">
        <div class="flex flex-col w-full items-start text-gray-700 px-10 box-border cart-page">
            <div class="relative flex gap-5 h-full w-full">
                <div class="relative w-full flex mx-10">
                    <div class="relative flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list max-h-screen">
                        <div class="sticky top-0 flex flex-col bg-white gap-5 pb-5 shadow-sm">
                            <div class="flex w-full items-center justify-between mt-10">
                                <p class="text-5xl font-semibold">
                                    Order Details
                                </p>
                                <Link :href="route('order.index')">
                                    <PrimaryButton class="ms-4">
                                        back
                                    </PrimaryButton>
                                </Link>
                            </div>
                            <hr> 
                            <p class="text-3xl font-semibold text-gray-700">
                                Status Timeline
                            </p>
                            <div class="flex mx-14">
                                <div 
                                    v-for="(step, status) in statusList"
                                    class="flex w-full justify-evenly items-center border border-gray-500 px-5 py-2 rounded-lg"
                                >
                                    <div class="flex w-full items-center gap-2 ml-5">
                                        <p 
                                            v-if="currentStatus >= step"
                                            class="text-xl font-semibold"
                                        >
                                            {{ capitalize(status) }}
                                        </p>
                                        <p 
                                            v-else-if="currentStatus + 1 === step"
                                            class="text-xl font-bold"
                                        >
                                            {{ capitalize(status.slice(0, -2)) }}ing
                                        </p>
                                        <p 
                                            v-else
                                            class="text-xl font-semibold text-gray-500"
                                        >
                                            {{ capitalize(status) }}
                                        </p>
                                        <ShieldCheckIcon 
                                            v-if="currentStatus >= step"
                                            class="size-7 text-green-500"
                                        ></ShieldCheckIcon>
                                    </div>
                                    <ChevronDoubleRightIcon 
                                        v-if="status != Object.keys(statusList).slice(-1)" 
                                        class="size-7 text-gray-400"
                                    ></ChevronDoubleRightIcon>
                                </div>
                            </div>
                        </div>
                        
                        <div 
                            class="max-w-5xl flex justify-center ml-20 mr-10"
                            v-for="(product, _) in props.data"
                            :key="product.id"
                        >
                            <div :class="[
                                'w-full flex gap-5',
                                product != props.data[0] ? 'mb-5' : '',
                                props.data.length === 1 ? 'mb-5' : ''
                            ]"
                            >
                                <img 
                                    class="w-1/6 rounded-xl"
                                    :src="asset(product['imageurl'].slice(36))" 
                                    alt=""
                                >
                                <div class="w-full flex flex-col gap-2 text-lg justify-between">
                                    <div class="flex flex-col gap-3 max-w-3xl">
                                        <div class="flex justify-between items-center h-fit">
                                            <p class="font-semibold text-xl">
                                                {{ product['name'] }}
                                            </p>
                                        </div>
                                        <div class="text-gray-500 flex gap-2 items-center leading-none">
                                            <p class="flex-shrink-0 text-xl">
                                                {{ product['category'] }}
                                            </p>
                                            <p>|</p>
                                            <p>
                                                {{ product['size'] }}
                                            </p>
                                        </div>
                                        <div class="text-xl">
                                            <p class="font-bold">
                                                $ {{ product['price'] }}
                                            </p>
                                        </div>
                                        <div>
                                            <p class="text-xl">
                                                {{ product['quantity'] }}
                                                <span v-if="product['quantity'] > 1">
                                                    items
                                                </span>
                                                <span v-else>
                                                    item
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-5">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UserAuthenticatedLayout>
</template>