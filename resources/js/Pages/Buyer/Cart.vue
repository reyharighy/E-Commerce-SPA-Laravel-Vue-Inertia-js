<script setup>
import UserAuthenticatedLayout from '@/Layouts/UserAuthenticatedLayout.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import { useForm } from '@inertiajs/vue3'
import { ref, computed, nextTick } from 'vue'

import {
    XMarkIcon
} from '@heroicons/vue/24/outline'

import Modal from '@/Components/Modal.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'
import DangerButton from '@/Components/DangerButton.vue'

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
})

const form = useForm({
    cart: props.data.map((product) => ({
        id: product.id,
        product: product.product,
        size: product.size,
        quantity: product.quantity
    }))
})

const subTotal = computed(() => {
    return form.cart.reduce((sum, item) => {
        return sum + item['product']['discounted_price'] * item['quantity']
    }, 0)
})

const shippingEstimate = ref(5)

const taxEstimate = computed(() => {
    return subTotal.value * 0.12
})

const orderSummary = computed(() => {
    return subTotal.value + shippingEstimate.value + taxEstimate.value
})

const updateQuantity = (index, newQuantity) => {
    form.cart[index].quantity = newQuantity
    form.cart = [...form.cart]
};

const productRemoval = ref(false)
const confirmRemoval = ref(null)

const deleteForm = useForm({
    productID: null
})

const confirmProductRemoval = (product) => {
    productRemoval.value = true
    deleteForm.productID = product

    nextTick(() => confirmRemoval.value)
}

const closeModal = () => {
    productRemoval.value = false

    deleteForm.clearErrors()
    deleteForm.reset()
}

const removeProduct = () => {
    deleteForm.delete(route('cart.destroy', deleteForm.productID), {
        preserveScroll: true,
        onSuccess: () => {
            form.cart = form.cart.filter(
                (item) => item.id !== deleteForm.productID.id
            )
            closeModal()
        },
        onError: () => confirmRemoval.value,
        onFinish: () => deleteForm.reset()
    })
}

const productCheckout = ref(false)
const confirmCheckout = ref(null)

const orderForm = useForm({
    details: computed(() => form.cart),
    total_amount: computed(() => orderSummary.value.toFixed(2))
})

const confirmProductCheckout = () => {
    productCheckout.value = true

    nextTick(() => confirmCheckout.value)
}

const closeModalCheckout = () => {
    productCheckout.value = false

    orderForm.clearErrors()
    orderForm.reset()
}

const checkoutProduct = () => {
    orderForm.post(route('order.store'), {
        preserveScroll: true,
        onSuccess: () => closeModalCheckout(),
        onError: () => confirmCheckout.value,
        onFinish: () => deleteForm.reset()
    })
}

const invalidStock = () => {
    for (let i = 0; i < form.cart.length; i++) {
        const quantity = form.cart[i]['quantity']
        const stock = form.cart[i]['product']['sizes'][form.cart[i]['size']]
        
        if (quantity > stock) {
            return true
        }
    }

    return false
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

<style scoped>
.cart-page {
    height: 100%;
}

.cart-list {
    height: 100%;
}
</style>

<template>
    <UserAuthenticatedLayout title="Cart">
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
                            Shopping Cart
                        </p>
                        
                        <p class="text-center text-xl h-full font-normal my-10">
                            Your cart is empty
                        </p>

                    </div>
                </div>
                <div 
                    class="w-full flex"
                    v-else
                >
                    <div 
                        class="flex flex-col w-2/3 justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide cart-list"
                    >
                        <div class="sticky top-0 flex flex-col bg-white">
                            <p class="text-5xl font-semibold py-10">
                                Shopping Cart
                            </p>
                            <hr> 
                        </div>
                        <div 
                            class="w-full"
                            v-for="(product, index) in form.cart"
                            :key="product.id"
                        >
                            <div :class="[
                                'flex gap-5',
                                product != form.cart[0] ? 'mb-5' : '',
                                form.cart.length === 1 ? 'mb-5' : ''
                            ]"
                            >
                                <img 
                                    class="w-1/3 rounded-xl"
                                    :src="asset(product['product']['imageurl'].slice(36))" 
                                    alt=""
                                >
                                <div class="w-full flex flex-col gap-2 text-lg justify-between">
                                    <div class="flex flex-col gap-3">
                                        <div class="flex justify-between">
                                            <p class="font-semibold mt-1">
                                                {{ product['product']['name'] }}
                                            </p>
                                            <div class="w-1/2 h-fit flex items-center justify-between">
                                                <p class="leading-none">
                                                    Quantity:
                                                </p>
                                                <input 
                                                    class="w-1/3 rounded-md h-7" 
                                                    step="1"
                                                    min="0"
                                                    type="number" 
                                                    :name="product['id']" 
                                                    :id="product['id']"
                                                    v-model="product['quantity']"
                                                    @input="updateQuantity(index, product['quantity'])"
                                                >
                                                <button 
                                                    class="p-2"
                                                    @click.prevent="confirmProductRemoval(product)"
                                                >
                                                    <XMarkIcon class="size-5"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="text-gray-500 flex gap-2 items-center leading-none">
                                            <p class="flex-shrink-0">
                                                {{ product['product']['category']['name'] }}
                                            </p>
                                            <p>|</p>
                                            <p>
                                                {{ product['size'] }}
                                            </p>
                                        </div>
                                        <div class="flex gap-2">
                                            <p class="font-bold">
                                                $ {{ product['product']['discounted_price'] }}
                                            </p>
                                            <div 
                                                class="flex gap-2"
                                                v-if="product['product']['discount'] != 0"
                                            >
                                                <p class="line-through text-gray-400 h-full">
                                                    $ {{ product['product']['price'] }}
                                                </p>
                                                <p class="text-red-500 font-bold">
                                                    {{ product['product']['discount'] }} % off
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex w-full font-semibold gap-2">
                                        <p 
                                            v-if="
                                                product['product']['sizes'].hasOwnProperty(product['size']) &&
                                                product['product']['sizes'][product['size']] >= product['quantity']
                                            "
                                            class="text-green-400"
                                        >
                                            In Stock
                                        </p>
                                        <p 
                                            v-else
                                            class="text-red-400"
                                        >
                                            Out of Stock
                                        </p>
                                        <p>|</p>
                                        <p>
                                            {{ product['product']['sizes'][product['size']] }} items left!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-5">
                        </div>
                    </div>
                    <div class="border-l border-gray-300 ml-5"></div>
                    <div class="relative w-1/3 flex-col m-auto flex flec-col gap-5 ml-5">
                        <p class="text-xl font-semibold">
                            Order Summary
                        </p>
                        <div class="flex w-full justify-between">
                            <p>
                                Subtotal
                            </p>
                            <p>
                                $ {{ subTotal.toFixed(2) }}
                            </p>
                        </div>
                        <hr>
                        <div class="flex w-full justify-between">
                            <p>
                                Shipping Estimate
                            </p>
                            <p>
                                $ {{ shippingEstimate.toFixed(2) }}
                            </p>
                        </div>
                        <hr>
                        <div class="flex w-full justify-between">
                            <p>
                                Tax Estimate
                            </p>
                            <p>
                                $ {{ taxEstimate.toFixed(2) }}
                            </p>
                        </div>
                        <hr>
                        <div class="flex w-full justify-between">
                            <p class="text-xl font-semibold">
                                Order Summary
                            </p>
                            <p>
                                $ {{ orderSummary.toFixed(2) }}
                            </p>
                        </div>

                        <!--I want to disable this button here based on the result of invalidStock-->
                        <PrimaryButton 
                            class="w-full justify-center"
                            @click.prevent="confirmProductCheckout"
                            :class="{ 'opacity-50 cursor-not-allowed': invalidStock() }"
                            :disabled="invalidStock()"
                        >
                            <p class="py-1 px-2">
                                Checkout
                            </p>
                        </PrimaryButton>
                        <p v-if="invalidStock()" class="text-red-500 text-sm mt-2">
                            One or more items exceed available stock. Please adjust your cart.
                        </p>
                    </div>
                </div>
            </div>
            <Modal 
                max-width="sm"
                :show="productRemoval" 
                @close="closeModal"
            >
                <div class="p-5 text-gray-900">
                    <h2 class="text-lg font-medium text-gray-900">
                        Are you sure want to remove the product from your cart?
                    </h2>

                    <div class="mt-6 flex justify-end">
                        <SecondaryButton @click="closeModal">
                            Cancel
                        </SecondaryButton>
                        
                        <DangerButton
                            class="ms-3"
                            :class="{ 'opacity-25': form.processing }"
                            :disabled="form.processing"
                            @click="removeProduct"
                        >
                            remove
                        </DangerButton>
                    </div>
                </div>
            </Modal>
            <Modal 
                max-width="sm"
                :show="productCheckout" 
                @close="closeModalCheckout"
            >
                <div class="p-5 text-gray-900">
                    <h2 class="text-lg font-medium text-gray-900">
                        Imagine this is the payment process.
                    </h2>

                    <p>
                        This can be payment option.
                    </p>

                    <p>
                        The adress of the customer where the product will be delivered.
                    </p>

                    <p>
                        When proceeding, the payment is regarded as successfull. Thus, it'll skip the pending status.
                    </p>

                    <div class="mt-6 flex justify-end">
                        <SecondaryButton @click="closeModalCheckout">
                            Cancel
                        </SecondaryButton>
                        
                        <PrimaryButton
                            class="ms-3"
                            :class="{ 'opacity-25': orderForm.processing }"
                            :disabled="orderForm.processing"
                            @click="checkoutProduct"
                        >
                            proceed
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </div>
    </UserAuthenticatedLayout>
</template>