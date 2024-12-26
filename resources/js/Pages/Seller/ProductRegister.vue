<script setup>
import SellerAuthenticatedLayout from '@/Layouts/SellerAuthenticatedLayout.vue'
import { Link, useForm } from '@inertiajs/vue3'
import InputLabel from '@/Components/InputLabel.vue'
import InputError from '@/Components/InputError.vue'
import TextInput from '@/Components/TextInput.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import { ChevronDoubleRightIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import Checkbox from '@/Components/Checkbox.vue'

import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel
} from '@headlessui/vue'

import { ref, computed, watch } from 'vue'

const props = defineProps({
    categoryList: {
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

const input_list = [
    { label: "Name", name:'name', type: 'text', span: 'col-span-8'},
    { label: "Category", name:'category_id', span: 'col-span-4'},
    { label: "Price ($)", name:'price', type: 'number', span: 'col-span-4'},
    { label: "Discount (%)", name:'discount', type: 'number', span: 'col-span-4'},
    { label: "Discounted Price ($)", name:'discounted_price', type: 'number', span: 'col-span-4'},
    { label: "Sizes: Qty", name:'sizes', span: 'col-span-8'},
    { label: "Description", name:'description', type: 'text', span: 'col-span-8'}
]

const sizeList = ['XS', 'S', 'M', 'L', 'XL']

const currentPrice = ref(0)
const currentDiscount = ref(0)

const form = useForm({
    user_id: 1,
    name: '',
    category_id: null,
    price: currentPrice.value,
    discount: currentDiscount.value,
    discounted_price: 0,
    ratings: 0,
    reviews: 0,
    sizes: {},
    description: ''
})

watch([() => form.price, () => form.discount], () => {
    form.discounted_price = (form.price * (100 - form.discount) / 100).toFixed(2)
})

const displaySizes = computed(() => {
    const sortedEntries = Object.entries(form.sizes).sort((a, b) => {
        const indexA = sizeList.indexOf(a[0])
        const indexB = sizeList.indexOf(b[0])

        return indexA - indexB
    })

    return sortedEntries.length
        ? sortedEntries
            .map(([size, qty]) => `${size}: ${qty}`)
            .join(', ')
        : 'None'
})

const toggleSelection = (sizeObj, value, initialList) => {
    if (sizeObj.hasOwnProperty(value)) {
        delete sizeObj[value];
    } else {
        if (initialList.includes(value)) {
            sizeObj[value] = 0;
        }
    }
}

const submit = () => {
    form.post(route('product.store'), {
        onSuccess: () => form.reset()
    })
}
</script>

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

            <form 
                class="w-full max-w-xl m-auto px-6 py-6 mb-6 bg-white rounded-lg border border-t-gray-200"
                @submit.prevent="submit"
            >
                <div 
                    class="grid grid-cols-8 gap-6"
                >
                    <div 
                        :class="input.span"
                        v-for="input in input_list"
                    >
                        <InputLabel
                            class="mb-2"
                            :for="input.name"
                            :value="input.label"
                        />

                        <select 
                            class="w-full rounded-md border-gray-300 shadow-sm text-gray-900 focus:border-[#00adb5] focus:ring-[#00adb5] hover:cursor-pointer"
                            v-if="input.name == 'category_id'"
                            :name="input.name"
                            :id="input.name"
                            v-model="form[input.name]"
                            required
                        >
                            <option 
                                v-for="category in categoryList" 
                                :key="category.id" 
                                :value="category.id"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                        <input
                            class="w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5]"
                            v-else-if="input.name == 'price' || input.name == 'discount'"
                            :id="input.name"
                            :type="input.type"
                            step="0.01"
                            v-model="form[input.name]"
                            required
                        />
                        <input
                            class="w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5] bg-gray-200"
                            v-else-if="input.name == 'discounted_price'"
                            :id="input.name"
                            :type="input.type"
                            step="0.01"
                            v-model="form[input.name]"
                            disabled
                        />
                        <textarea
                            class="w-full rounded-md border-gray-300 text-gray-900 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5] scrollbar-hide"
                            rows="3"
                            v-else-if="input.name == 'description'"
                            :id="input.name"
                            :type="input.type"
                            v-model="form[input.name]"
                            required
                        ></textarea>
                        <div
                            class="sticky flex flex-col"
                            v-else-if="input.name == 'sizes'"
                        >
                            <PopoverGroup>
                                <Popover>
                                    <PopoverButton
                                        tabindex="1" 
                                        class="h-10 pl-2 flex justify-between items-center w-full rounded-md border text-gray-900 border-gray-300 shadow-sm box-border overflow-hidden text-ellipsis whitespace-nowrap focus:border-2 focus:border-[#00adb5]"
                                        :id="input.name"
                                    >
                                        {{ displaySizes }}
                                        <ChevronDownIcon class="size-7/12 w-7 mr-1 text-gray-500"></ChevronDownIcon>
                                    </PopoverButton>
                                    <transition 
                                        enter-active-class="transition ease-out duration-200" 
                                        enter-from-class="opacity-0 translate-y-1" 
                                        enter-to-class="opacity-100 translate-y-0" 
                                        leave-active-class="transition ease-in duration-150" 
                                        leave-from-class="opacity-100 translate-y-0" 
                                        leave-to-class="opacity-0 translate-y-1"
                                    >
                                        <PopoverPanel class="absolute z-50 overflow-hidden rounded-lg bg-white shadow-lg h-fit w-full flex flex-col px-5 py-2 border border-gray-300">
                                            <div
                                                class="flex items-center h-10"
                                                v-for="option in sizeList"
                                                :key="option"
                                                :id="option"
                                            >
                                                <div class="flex items-center w-1/12 flex-shrink-0 mr-2">
                                                    <Checkbox 
                                                        :value="option"
                                                        :id="option"
                                                        :checked="form[input.name][option] !== undefined"
                                                        @change="toggleSelection(form[input.name], option, sizeList)"
                                                    />
                                                    <span class="ms-2 text-sm text-gray-900 leading-none">
                                                        {{ option }}
                                                    </span>
                                                </div>
                                                <div 
                                                    v-if="form[input.name][option] !== undefined"
                                                >
                                                    : 
                                                    <input 
                                                        class="text-xs p-1 leading-none rounded-sm"
                                                        type="number"
                                                        min="0"
                                                        v-model.number="form[input.name][option]"
                                                    >
                                                </div>
                                            </div>
                                        </PopoverPanel>
                                    </transition>
                                </Popover>
                            </PopoverGroup>
                        </div>
                        <TextInput
                            class="w-full text-gray-900"
                            v-else
                            :id="input.name"
                            :type="input.type"
                            v-model="form[input.name]"
                            required
                        />

                        <InputError 
                            class="mt-2"
                            :message="form.errors[input.name]"
                        />
                    </div>
                </div>
                <div class="flex flex-row gap-5 mt-5">
                    <PrimaryButton class="w-24 justify-center" type="submit" as="button">
                        save
                    </PrimaryButton>
                    <Link
                        class="w-24"
                        :href="route('product.index')"
                        as="a"
                    >
                        <PrimaryButton class="w-full justify-center bg-red-600 text-white hover:bg-red-700">
                            cancel
                        </PrimaryButton>
                    </Link>
                </div>
            </form>
        </div>
    </SellerAuthenticatedLayout>
</template>
