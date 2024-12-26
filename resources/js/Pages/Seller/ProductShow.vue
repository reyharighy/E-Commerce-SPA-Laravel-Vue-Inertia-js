<script setup>
import SellerAuthenticatedLayout from '@/Layouts/SellerAuthenticatedLayout.vue'
import { Link, useForm } from '@inertiajs/vue3'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { computed, ref, nextTick } from 'vue'
import DangerButton from '@/Components/DangerButton.vue'
import Modal from '@/Components/Modal.vue'
import InputLabel from '@/Components/InputLabel.vue'
import TextInput from '@/Components/TextInput.vue'
import InputError from '@/Components/InputError.vue'
import SecondaryButton from '@/Components/SecondaryButton.vue'

import { 
    ChevronDoubleRightIcon,
    ChevronDoubleLeftIcon,
    StarIcon,
    ChevronDownIcon
} from '@heroicons/vue/24/outline';

defineProps({
    data: {
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

const confirmingProductDeletion = ref(false)
const confirmationInput = ref(null)

const form = useForm({
    confirmation: '',
})

const confirmProductDeletion = () => {
    confirmingProductDeletion.value = true;

    nextTick(() => confirmationInput.value)
}

const deleteProduct = (productID) => {
    form.delete(route('product.destroy', productID), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => confirmationInput.value,
        onFinish: () => form.reset()
    })
}

const closeModal = () => {
    confirmingProductDeletion.value = false

    form.clearErrors()
    form.reset()
}
</script>

<script>
export default {
    methods: {
        asset(path) {
            return `/${path}`;
        }
    }
};
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
    <SellerAuthenticatedLayout :title="pageTitle">
        <div class="flex flex-col gap-10 mt-5">
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
                <Link
                    class="w-24"
                    :href="actionPage"
                >
                    <PrimaryButton class="w-full justify-center">
                        {{ actionName }}
                    </PrimaryButton>
                </Link>
            </div>
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
                        <p>{{ data.name }}</p>
                        <div 
                            v-if="discounted(data.discount)"
                            class="flex gap-2"
                        >
                            <p 
                                class="line-through"
                            >
                                ${{ data.price }}
                            </p>
                            <p class="text-red-500">
                                ${{ (data.price * (100 - data.discount) / 100).toFixed(2)}}
                            </p>
                        </div>
                        <p v-else>${{ data.price }}</p>
                    </div>
                    <div class="flex w-full justify-between text-gray-900 text-sm font-semibold">
                        <div class="flex">
                            <p class="mr-2">{{ data.ratings }}</p>
                            <div class="flex mr-5">
                                <StarIcon 
                                    class="size-5 fill-yellow-500 text-transparent"
                                    v-for="n in parseInt(data.ratings)"
                                ></StarIcon>
                                <StarIcon 
                                    class="size-5 fill-gray-300 text-transparent"
                                    v-for="n in 5 - parseInt(data.ratings)"
                                ></StarIcon>
                            </div>
                            <!--Undefined Link-->
                            <Link 
                                class="text-[#008a8e]"
                                href="#"
                            >
                                <p>See all {{ data.reviews }} reviews</p>
                            </Link>
                        </div>
                        <div
                            class="text-red-500"
                            v-if="data.discount > 0"
                        >
                            {{ data.discount }} % discount
                        </div>
                    </div>
                    <div class="flex flex-col text-gray-900 font-semibold gap-2 w-full">
                        <p>Sizes/Stocks</p>
                        <div class="flex flex-row gap-2">
                            <div
                                class="flex flex-col gap-1 items-center"
                                v-for="(stock, size) in data.sizes"
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
                        <p class="text-gray-500 font-normal text-sm leading-6">{{ data.description }}</p>
                    </div>
                    <div class="flex gap-5">
                        <Link
                            class="flex flex-row gap-5 mt-5"
                            :href="route('product.edit', data.id)"
                        >
                            <PrimaryButton class="w-24 justify-center">
                                edit
                            </PrimaryButton>
                        </Link>
                        
                        <div
                            class="flex flex-row gap-5 mt-5"
                            @click.prevent="confirmProductDeletion"
                        >
                            <PrimaryButton class="w-24 justify-center bg-red-600 text-white hover:bg-red-700">
                                delete
                            </PrimaryButton>
                        </div>

                        <Modal :show="confirmingProductDeletion" @close="closeModal">
                            <div class="p-6">
                                <h2
                                    class="text-lg font-medium text-gray-900"
                                >
                                    Are you sure you want to delete the product?
                                </h2>

                                <p class="mt-1 text-sm text-gray-600">
                                    Once the product is deleted, all of its resources and data
                                    will be permanently deleted. Please enter your confirmation to
                                    permanently delete the product.
                                </p>

                                <div class="mt-6">
                                    <InputLabel
                                        for="confirmation"
                                        value="text"
                                    />

                                    <TextInput
                                        id="confirmation"
                                        ref="confirmationInput"
                                        v-model="form.confirmation"
                                        type="text"
                                        class="mt-1 block w-3/4 text-gray-700"
                                        placeholder="Type 'delete'"
                                        @keyup.enter="deleteProduct(data['id'])"
                                    />

                                    <InputError :message="form.errors.confirmation" class="mt-2" />
                                </div>

                                <div class="mt-6 flex justify-end">
                                    <SecondaryButton @click="closeModal">
                                        Cancel
                                    </SecondaryButton>

                                    <DangerButton
                                        class="ms-3"
                                        :class="{ 'opacity-25': form.processing }"
                                        :disabled="form.processing"
                                        @click="deleteProduct(data['id'])"
                                    >
                                        Delete Product
                                    </DangerButton>
                                </div>
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    </SellerAuthenticatedLayout>
</template>
