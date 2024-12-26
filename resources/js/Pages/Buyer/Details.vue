<script setup>
import UserAuthenticatedLayout from '@/Layouts/UserAuthenticatedLayout.vue'
import { Link, useForm, usePage, router } from '@inertiajs/vue3'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { computed, ref, nextTick } from 'vue'

import { 
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon,
    StarIcon,
    ChevronDownIcon
} from '@heroicons/vue/24/outline'

import Modal from '@/Components/Modal.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

const user = usePage().props.auth.user

const [emblaRef, emblaApi] = emblaCarouselVue({ loop: true })

const currentIndex = ref(0)

const setIndex = computed({
    set: (newIndex) => currentIndex.value = newIndex
})

const increaseIndex = computed({
    set: (val) => {
        if ((currentIndex.value + val) > 2) {
            currentIndex.value = 0
        } else {
            currentIndex.value++
        }
    }
})

const decreaseIndex = computed({
    set: (val) => {
        if ((currentIndex.value - val) < 0) {
            currentIndex.value = 2
        } else {
            currentIndex.value--
        }
    }
})

const scrollTo = (index) => {
    if (emblaApi.value) {
        emblaApi.value.scrollTo(index)
        setIndex.value = index
    }
}

const scrollPrev = () => {
    if (emblaApi.value) {
        emblaApi.value.scrollPrev()
        decreaseIndex.value = 1
    }
}

const scrollNext = () => {
    if (emblaApi.value) {
        emblaApi.value.scrollNext()
        increaseIndex.value = 1
    }
}

const discounted = (val) => val > 0

// Add product to wishlist
const productAdditionToWishlist = ref(false)
const selectedSizeToWishlist = ref(null)

const wishlistForm = useForm({
    size: '',
    productID: props.data['id']
})

const confirmProductAdditionToWishlist = () => {
    user
        ? productAdditionToWishlist.value = true
        : router.get(route('login'))

    nextTick(() => selectedSizeToWishlist.value)
}

const addProductToWishlist = () => {
    wishlistForm.post(route('wishlist.store'), {
        preserveScroll: true,
        onSuccess: () => closeModalToWishlist(),
        onError: () => selectedSizeToWishlist.value,
        onFinish: () => wishlistForm.reset()
    })
}

const closeModalToWishlist = () => {
    productAdditionToWishlist.value = false

    wishlistForm.clearErrors()
    wishlistForm.reset()
}

// Add product to cart
const productAdditionToCart = ref(false)
const selectedSizeToCart = ref(null)

const cartForm = useForm({
    size: '',
    productID: props.data['id']
})

const confirmProductAdditionToCart = () => {
    user
        ? productAdditionToCart.value = true
        : router.get(route('login'))

    nextTick(() => selectedSizeToCart.value)
}

const addProductToCart = () => {
    cartForm.post(route('cart.store'), {
        preserveScroll: true,
        onSuccess: () => closeModalToCart(),
        onError: () => selectedSizeToCart.value,
        onFinish: () => cartForm.reset()
    })
}

const closeModalToCart = () => {
    productAdditionToCart.value = false

    cartForm.clearErrors()
    cartForm.reset()
}

const availableSizes = Object.fromEntries(
    Object.entries(props.data.sizes).filter(([_, value]) => value > 0)
)
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
.embla {
    overflow: hidden;
}

.embla__container {
    display: flex;
}

.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
}

.thumbnail {
    cursor: pointer;
    border: 2px solid white;
}

.thumbnail.selected {
    border: 2px solid #008a8e;
}
</style>

<template>
    <UserAuthenticatedLayout title="Details">
        <div class="flex flex-col gap-10 mt-5">
            <div class="flex justify-around w-full h-fit px-8 gap-5">
                <div class="w-1/3 flex flex-col justify-start items-center gap-5 py-5 flex-shrink-0">
                    <div class="flex justify-evenly items-center gap-3">
                        <div 
                            class="rounded-lg hover:cursor-pointer hover:bg-gray-100" 
                            @click="scrollPrev"
                        >
                            <ChevronDoubleLeftIcon class="size-8 text-[#008a8e]"></ChevronDoubleLeftIcon>
                        </div>
                        <div class="embla w-4/5 max-h-svh rounded-lg " ref="emblaRef">
                            <div class="embla__container">
                                <div 
                                    class="embla__slide"
                                    v-for="index in 3"
                                    :key="index"
                                >
                                    <img 
                                        class="w-full h-96 object-center object-cover"
                                        :src="asset(data['imageurl'].slice(36))"
                                    >
                                </div>
                            </div>
                        </div>
                        <div 
                            class="rounded-lg hover:cursor-pointer hover:bg-gray-100"
                            @click="scrollNext"
                        >
                            <ChevronDoubleRightIcon class="size-8 text-[#008a8e]"></ChevronDoubleRightIcon>
                        </div>
                    </div>
                    <div class="flex justify-center gap-2 mt-4">
                        <div
                            v-for="index in 3"
                            :key="index"
                            class="thumbnail max-h-20 rounded-lg hover:bg-gray-100"
                            :class="{selected: currentIndex.valueOf() === index - 1}"
                            @click="scrollTo(index - 1)"
                        >
                            <img 
                                class="w-full h-full object-center object-cover rounded-lg"
                                :key="index"
                                :src="asset(data['imageurl'].slice(36))"
                            />
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col justify-start items-center p-5 gap-5">
                    <div class="flex w-full justify-between font-bold text-gray-900 text-2xl">
                        <p>{{ props.data.name }}</p>
                        <div 
                            v-if="discounted(data.discount)"
                            class="flex gap-2"
                        >
                            <p 
                                class="line-through"
                            >
                                ${{ props.data.price }}
                            </p>
                            <p class="text-red-500">
                                ${{ (props.data.price * (100 - props.data.discount) / 100).toFixed(2)}}
                            </p>
                        </div>
                        <p v-else>${{ props.data.price }}</p>
                    </div>
                    <div class="flex w-full justify-between text-gray-900 text-sm font-semibold">
                        <div class="flex">
                            <p class="mr-2">{{ props.data.ratings }}</p>
                            <div class="flex mr-5">
                                <StarIcon 
                                    class="size-5 fill-yellow-500 text-transparent"
                                    v-for="n in parseInt(props.data.ratings)"
                                ></StarIcon>
                                <StarIcon 
                                    class="size-5 fill-gray-300 text-transparent"
                                    v-for="n in 5 - parseInt(props.data.ratings)"
                                ></StarIcon>
                            </div>
                            <!--Undefined Link-->
                            <Link 
                                class="text-[#008a8e]"
                                href="#"
                            >
                                <p>See all {{ props.data.reviews }} reviews</p>
                            </Link>
                        </div>
                        <div
                            class="text-red-500"
                            v-if="props.data.discount > 0"
                        >
                            {{ props.data.discount }} % discount
                        </div>
                    </div>
                    <div class="flex flex-col text-gray-900 font-semibold gap-2 w-full">
                        <p>Sizes/Stocks</p>
                        <div class="flex flex-row gap-2">
                            <div
                                class="flex flex-col gap-1 items-center"
                                v-for="(stock, size) in props.data.sizes"
                            >
                                <div class="flex min-w-14 justify-center items-center rounded-lg bg-[#00adb5] text-white font-normal text-sm">
                                    <p class="px-5 py-2">{{ size }}</p>
                                </div>
                                <div class="h-1/2 w-1/2">
                                    <ChevronDownIcon></ChevronDownIcon>
                                </div>
                                <div :class="[
                                    'flex min-w-14 justify-center items-center rounded-lg text-white font-normal text-sm',
                                    stock > 10 ? 'bg-[#00adb5]' : 'bg-red-500'
                                ]">
                                    <p class="px-5 py-2">{{ stock }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full gap-2 justify-between">
                        <p class="text-gray-900 font-semibold">Description</p>
                        <p class="text-gray-500 font-normal text-sm leading-6">{{ props.data.description }}</p>
                    </div>
                    <div class="flex gap-5 mt-5 w-1/3">
                        <Link
                            class="mt-5 w-full"
                            href="#"
                        >
                            <PrimaryButton 
                                class="hover:bg-blue-500 w-full justify-center" bg-color="bg-blue-400"
                                @click.prevent="confirmProductAdditionToWishlist"
                            >
                                wishlist
                            </PrimaryButton>
                        </Link>
                        <div
                            class="mt-5 w-1/2"
                            @click.prevent="confirmProductAdditionToCart"
                        >
                            <PrimaryButton class="text-nowrap justify-center">
                                add to cart
                            </PrimaryButton>
                        </div>

                        <Modal 
                            max-width="sm"
                            :show="productAdditionToWishlist" 
                            @close="closeModalToWishlist"
                        >
                            <div class="p-5 text-gray-900">
                                <h2 class="text-lg font-medium text-gray-900">
                                    Please specify the size
                                </h2>

                                <p class="mt-1 text-sm text-gray-600 mb-5">
                                    You can only select the product size in stock.
                                </p>
                                
                                <select 
                                    :class="[
                                        'rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full',
                                        'focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer'
                                    ]"
                                    v-model="wishlistForm.size"
                                >
                                    <option 
                                        v-for="(_, size) in availableSizes"
                                        :value="size"
                                        :key="size"
                                    >
                                        {{ size }}
                                    </option>
                                </select>

                                <div class="mt-6 flex justify-end">
                                    <SecondaryButton @click="closeModalToWishlist">
                                        Cancel
                                    </SecondaryButton>
                                    
                                    <!--Add product to cart-->
                                    <PrimaryButton
                                        class="ms-3 hover:bg-blue-500 justify-center" bg-color="bg-blue-400"
                                        :class="{ 'opacity-25': wishlistForm.processing }"
                                        :disabled="wishlistForm.processing"
                                        @click="addProductToWishlist"
                                    >
                                        add to wishlist
                                    </PrimaryButton>
                                </div>
                            </div>
                        </Modal>

                        <Modal 
                            max-width="sm"
                            :show="productAdditionToCart" 
                            @close="closeModalToCart"
                        >
                            <div class="p-5 text-gray-900">
                                <h2 class="text-lg font-medium text-gray-900">
                                    Please specify the size
                                </h2>

                                <p class="mt-1 text-sm text-gray-600 mb-5">
                                    You can only select the product size in stock. For selected size added to your cart, the quantity will be automatically set to 1 item. You can furtherly edit it in your cart.
                                </p>
                                
                                <select 
                                    :class="[
                                        'rounded-md border-gray-300 shadow-sm text-gray-900 mb-5 w-full',
                                        'focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer'
                                    ]"
                                    v-model="cartForm.size"
                                >
                                    <option 
                                        v-for="(_, size) in availableSizes"
                                        :value="size"
                                        :key="size"
                                    >
                                        {{ size }}
                                    </option>
                                </select>

                                <div class="mt-6 flex justify-end">
                                    <SecondaryButton @click="closeModalToCart">
                                        Cancel
                                    </SecondaryButton>
                                    
                                    <!--Add product to cart-->
                                    <PrimaryButton
                                        class="ms-3"
                                        :class="{ 'opacity-25': cartForm.processing }"
                                        :disabled="cartForm.processing"
                                        @click="addProductToCart"
                                    >
                                        add to cart
                                    </PrimaryButton>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </UserAuthenticatedLayout>
</template>
