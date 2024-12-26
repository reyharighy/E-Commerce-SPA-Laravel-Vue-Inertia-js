<script setup>
import UserAuthenticatedLayout from '@/Layouts/UserAuthenticatedLayout.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import { useForm } from '@inertiajs/vue3'
import { ref, nextTick } from 'vue'

import {
    XMarkIcon,
    StarIcon
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

const form = ref(
    useForm({
        wishlist: props.data.map((product) => ({
            id: product['id'],
            product: product['product'],
            sizes: product['size'],
            imageurl: product['imageurl']
        }))
    })
)

// Deletion from here
const productRemoval = ref(false)
const confirmRemoval = ref(null)

const deleteForm = useForm({
    productID: ''
})

const confirmProductRemoval = (product) => {
    productRemoval.value = true
    deleteForm.productID = product

    nextTick(() => confirmRemoval.value)
}

const closeModalDeletion = () => {
    productRemoval.value = false

    deleteForm.clearErrors()
    deleteForm.reset()
}

const removeProduct = () => {
    deleteForm.delete(route('wishlist.destroy', deleteForm.productID), {
        preserveScroll: true,
        onSuccess: () => {
            form.value.wishlist = form.value.wishlist.filter(
                (item) => item.id !== deleteForm.productID.id
            )
            closeModalDeletion()
        },
        onError: () => confirmRemoval.value,
        onFinish: () => deleteForm.reset()
    })
}

// Addition from here
const productAddition = ref(false)
const confirmAddition = ref(false)

const addForm = useForm({
    size: '',
    productID: props.data['id']
})

const confirmProductAddition = (product) => {
    productAddition.value = true;
    addForm.size = product['sizes']
    addForm.productID = product['product']['id']

    nextTick(() => confirmAddition.value)
}

const closeModalAddition = () => {
    productAddition.value = false

    addForm.clearErrors()
    addForm.reset()
}

const addProduct = () => {
    addForm.post(route('cart.store'), {
        preserveScroll: true,
        onSuccess: () => closeModalAddition(),
        onError: () => confirmAddition.value,
        onFinish: () => addForm.reset()
    })
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
.wishlist-page {
    height: 100%;
}

.wishlist-list {
    height: 100%;
}
</style>

<template>
    <UserAuthenticatedLayout title="Wishlist">
        <div class="flex flex-col w-full items-start text-gray-700 px-10 box-border wishlist-page">
            <div class="relative flex gap-5 h-full w-full">
                <div
                    class="flex flex-col w-full justify-between gap-5"
                    v-if="props.data.length == 0"
                >
                    <div 
                        class="flex flex-col justify-between gap-5 mx-10"
                    >
                        <p class="text-5xl font-semibold my-10">
                            My Wishlist
                        </p>
                        
                        <p class="text-center text-xl h-full font-normal my-10">
                            Your wishlist is empty
                        </p>
                    </div>
                </div>
                <div 
                    class="w-full flex"
                    v-else
                >
                    <div 
                        class="flex flex-col w-full justify-start m-auto gap-5 overflow-y-scroll scrollbar-hide wishlist-list"
                    >
                        <div class="sticky top-0 flex flex-col bg-white">
                            <p class="text-5xl font-semibold py-10 mx-10">
                                My Wishlist
                            </p>
                            <hr>
                        </div>
                        <div 
                            class="max-w-5xl flex justify-center ml-20 mr-10"
                            v-for="(product, _) in form.wishlist"
                            :key="product.id"
                        >
                            <div :class="[
                                'w-full flex gap-5',
                                product != form.wishlist[0] ? 'mb-5' : '',
                                form.wishlist.length === 1 ? 'mb-5' : ''
                            ]"
                            >
                                <img 
                                    class="w-1/6 rounded-xl"
                                    :src="asset(product['product']['imageurl'].slice(36))" 
                                    alt=""
                                >
                                <div class="w-full flex flex-col gap-2 text-lg justify-between">
                                    <div class="flex flex-col gap-3 max-w-3xl">
                                        <div class="flex justify-between items-center h-fit">
                                            <p class="font-semibold text-xl">
                                                {{ product['product']['name'] }}
                                            </p>
                                            <div class="w-1/2 h-fit flex items-center justify-end">
                                                <div
                                                    class="w-1/2 text-end"
                                                    @click.prevent="confirmProductAddition(product)"
                                                >
                                                    <PrimaryButton class="text-nowrap justify-center">
                                                        add to cart
                                                    </PrimaryButton>
                                                </div>
                                                <button 
                                                    class="p-2"
                                                    @click.prevent="confirmProductRemoval(product)"
                                                >
                                                    <XMarkIcon class="size-5"/>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="text-gray-500 flex gap-2 items-center leading-none">
                                            <p class="flex-shrink-0 text-xl">
                                                {{ product['product']['category']['name'] }}
                                            </p>
                                            <p>|</p>
                                            <p>
                                                {{ product['sizes'] }}
                                            </p>
                                        </div>
                                        <div class="flex gap-2 text-xl">
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
                                        <div class="flex items-center">
                                            <p class="mr-2">{{ product['product']['ratings'] }}</p>
                                            <div class="flex mr-5">
                                                <StarIcon 
                                                    class="size-6 fill-yellow-500 text-transparent"
                                                    v-for="n in parseInt(product['product']['ratings'])"
                                                ></StarIcon>
                                                <StarIcon 
                                                    class="size-6 fill-gray-300 text-transparent"
                                                    v-for="n in 5 - parseInt(product['product']['ratings'])"
                                                ></StarIcon>
                                            </div>
                                        </div>
                                        <div>
                                            {{ product['product']['reviews'] }} reviews
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-5">
                        </div>
                    </div>
                </div>
            </div>
            <Modal 
                max-width="sm"
                :show="productRemoval" 
                @close="closeModalDeletion"
            >
                <div class="p-5 text-gray-900">
                    <h2 class="text-lg font-medium text-gray-900">
                        Are you sure want to remove the product from your wishlist?
                    </h2>

                    <div class="mt-6 flex justify-end">
                        <SecondaryButton @click="closeModalDeletion">
                            Cancel
                        </SecondaryButton>
                        
                        <DangerButton
                            class="ms-3"
                            :class="{ 'opacity-25': deleteForm.processing }"
                            :disabled="deleteForm.processing"
                            @click="removeProduct"
                        >
                            remove
                        </DangerButton>
                    </div>
                </div>
            </Modal>
            <Modal 
                max-width="sm"
                :show="productAddition" 
                @close="closeModalAddition"
            >
                <div class="p-5 text-gray-900">
                    <h2 class="text-lg font-medium text-gray-900">
                        Are you sure want to store the product to your cart?
                    </h2>

                    <div class="mt-6 flex justify-end">
                        <SecondaryButton @click="closeModalAddition">
                            Cancel
                        </SecondaryButton>
                        
                        <!--Add product to cart-->
                        <PrimaryButton
                            class="ms-3"
                            :class="{ 'opacity-25': addForm.processing }"
                            :disabled="addForm.processing"
                            @click="addProduct"
                        >
                            add to cart
                        </PrimaryButton>
                    </div>
                </div>
            </Modal>
        </div>
    </UserAuthenticatedLayout>
</template>