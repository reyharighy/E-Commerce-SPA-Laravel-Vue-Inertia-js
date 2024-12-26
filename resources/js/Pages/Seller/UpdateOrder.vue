<script setup>
import SellerAuthenticatedLayout from '@/Layouts/SellerAuthenticatedLayout.vue'
import { useForm } from '@inertiajs/vue3'
import { ref, computed, nextTick } from 'vue'

import Modal from '@/Components/Modal.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import DangerButton from '@/Components/DangerButton.vue'

import { 
    ChevronDoubleRightIcon
 } from '@heroicons/vue/24/outline'

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    order: {
        type: Object,
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

const updateOrderStatusModal = ref(false)
const selectedStatus = ref(null)
const statusList = [
    'accepted',
    'confirmed',
    'shipped'
]

const updateStatusForm = useForm({
    order: props.order,
    status: props.order.status
})

const confirmUpdateOrderStatus = () => {
    updateOrderStatusModal.value = true

    nextTick(() => selectedStatus.value)
}

const updateOrderStatus = () => {
    updateStatusForm.patch(route('update-order', updateStatusForm.order), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => selectedStatus.value,
        onFinish: () => updateStatusForm.reset(),
        data: {
            status: updateStatusForm.status
        }
    })
}

const closeModal = () => {
    updateOrderStatusModal.value = false

    updateStatusForm.clearErrors()
    updateStatusForm.reset({
        status: null
    })
}

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
    <SellerAuthenticatedLayout :title="props.pageTitle">
        <div class="relative flex flex-col my-5 max-h-screen overflow-scroll scrollbar-hide">
            <div class="sticky top-0 flex  flex-col items-center justify-between px-8 bg-white shadow-sm">
                <div class="flex w-full">
                    <div v-if="pageTitle == props.rootPath[0]">
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
                                    v-if="page != props.pageTitle" 
                                >
                                    {{ page }}
                                </h1>
                                <ChevronDoubleRightIcon 
                                    class="mr-2 size-7 text-gray-400" 
                                    v-if="page != props.pageTitle">
                                </ChevronDoubleRightIcon>
                            </div>
                        </div>
                        <div class="font-semibold text-2xl text-[#008a8e] leading-tight">
                            {{ props.pageTitle }}
                        </div>
                    </div>
                </div>
            
                <div class="flex justify-end items-center w-full px-10 mt-5">
                    <div class="w-1/2">
                        <p class="leading-none text-xl font-semibold">
                            Order Status: {{ capitalize(updateStatusForm.status) }}
                        </p>
                    </div>
                    <PrimaryButton 
                        class="p-2"
                        @click.prevent="confirmUpdateOrderStatus"
                    >
                        Update
                    </PrimaryButton>
                </div>
            </div>
            <div 
                class="max-w-5xl flex justify-center ml-20 mr-10 my-5"
                v-for="(product, _) in props.data"
                :key="product.id"
            >
                <div class="w-full flex gap-5">
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
            </div>
        </div>
        <Modal 
            max-width="sm"
            :show="updateOrderStatusModal" 
            @close="closeModal"
        >
            <div class="p-5 text-gray-900">
                <h2 class="text-lg font-medium text-gray-900 mb-5">
                    Please specify the status
                </h2>
                
                <select 
                    :class="[
                        'rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full',
                        'focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer'
                    ]"
                    v-model="updateStatusForm.status"
                >
                    <option
                        v-for="status in statusList"
                        :value="status"
                        :key="status"
                    >
                        {{ capitalize(status) }}
                    </option>
                </select>

                <div class="mt-6 flex justify-end">
                    <SecondaryButton @click="closeModal">
                        Cancel
                    </SecondaryButton>
                    
                    <!--Add product to cart-->
                    <PrimaryButton
                        class="ms-3"
                        :class="{ 'opacity-25': updateStatusForm.processing }"
                        :disabled="updateStatusForm.processing"
                        @click="updateOrderStatus"
                    >
                        update
                    </PrimaryButton>
                </div>
            </div>
        </Modal>
    </SellerAuthenticatedLayout>
</template>
