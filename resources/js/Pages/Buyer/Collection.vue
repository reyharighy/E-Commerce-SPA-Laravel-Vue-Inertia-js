<script setup>
import UserAuthenticatedLayout from '@/Layouts/UserAuthenticatedLayout.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import Checkbox from '@/Components/Checkbox.vue'
import { Link } from '@inertiajs/vue3'
import { ref, computed, watch } from 'vue'

import { 
    TabGroup, 
    TabList, 
    Tab,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel
} from '@headlessui/vue'

import { 
    CheckIcon, 
    ChevronUpDownIcon, 
    StarIcon,
    ChevronUpIcon,
    ChevronDownIcon
} from '@heroicons/vue/20/solid'

const props = defineProps({
    allCategories: {
        type: Array,
        required: true
    },
    allProducts: {
        type: Array,
        required: true
    },
    defaultCategoryID: {
        type: Object,
        required: true
    }
})

const allCategories = props.allCategories.map(
    (category) => ({
        id: category['id'],
        name: category['name']
    })
)

const selectedCategory = ref(props.defaultCategoryID['id'])

const filteredProducts = computed(() => {
    if (selectedCategory.value > 1) {
        return props.allProducts.filter(
            product => product['category']['id'] === selectedCategory.value
        )
    } else {
        return props.allProducts
    }
})

const selectCategory = (id) => {
    selectedCategory.value = id
}

const selectAllCategories = () => {
    selectedCategory.value = 1
}

const parameters = [
    { name: 'Price' },
    { name: 'Ratings' },
    { name: 'Reviews' }
]

const selectedParameter = ref(parameters[0])

const isDescending = ref(false)

const toggle = () => {
    isDescending.value = !isDescending.value
}

const minPrice = ref(0)
const maxPrice = ref(0.01)
const onRange = ref(false)
const isSearchDisabled = ref(false)
const query = ref('')

const toggleOnRange = () => {
    onRange.value = !onRange.value
    isSearchDisabled.value = !isSearchDisabled.value

    if (onRange.value) {
        query.value = ''
    }
}

watch(minPrice, (newMinPrice) => {
    if (maxPrice.value < newMinPrice) {
        maxPrice.value = newMinPrice
    }
})

const productsInRange = computed(() => {
    if (onRange.value) {
        return filteredProducts.value.filter(
            product => product['discounted_price'] >= minPrice.value && product['discounted_price'] <= maxPrice.value
        )
    }

    return filteredProducts.value.filter(
        product => product['name'].toLowerCase().includes(query.value.toLowerCase())
    )
})

const sortProducts = computed(() => {
    const products = [...productsInRange.value];

    if (selectedParameter.value.name === 'Price') {
        return products.sort((a, b) =>
            isDescending.value
                ? b.discounted_price - a.discounted_price
                : a.discounted_price - b.discounted_price
        )
    } else if (selectedParameter.value.name === 'Ratings') {
        return products.sort((a, b) => 
            isDescending.value
                ? b.ratings - a.ratings
                : a.ratings - b.ratings
        )
    } else {
        return products.sort((a, b) => 
            isDescending.value
                ? b.reviews - a.reviews
                : a.reviews - b.reviews
        )
    }
})
</script>

<script>
export default {
    methods: {
        asset(path) {
            return `/${path}`
        }
    }
};
</script>

<template>
    <UserAuthenticatedLayout title="Collection">
        <div class="flex flex-col items-center w-full min-h-dvh">
            <div class="relative max-h-svh overflow-y-hidden">
                <div class="absolute max-w-lg min-h-svh pt-20 ml-10">
                    <h1 class="text-6xl font-bold tracking-tight text-gray-900">
                        Explore Our Casual Collection
                    </h1>
                    <p class="mt-4 text-xl text-gray-700">
                        Uncover a curated selection of stylish and comfortable casual wear, designed to fit your everyday vibe and express your unique style effortlessly.
                    </p>
                </div>
                <img
                    :src="asset('images/collection-banner.jpg')" 
                    alt=""
                >
            </div>

            <div class="sticky top-0 flex justify-between w-full px-10 py-5 shadow-md items-center bg-white overflow-y-visible z-20">
                <div class="w-full flex justify-start">
                    <input
                        v-if="isSearchDisabled"
                        v-model="query"
                        type="text"
                        :class="[
                            'w-2/3 border rounded-lg h-fit text-sm leading-none focus:border shadow-sm focus:border-[#008a8e] box-border ml-5 border-gray-300',
                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm',
                            'bg-gray-300'
                        ]"
                        placeholder="Search is disabled"
                        disabled
                    />
                    <input
                        v-else
                        v-model="query"
                        type="text"
                        :class="[
                            'w-2/3 border rounded-lg h-fit text-sm leading-none focus:border shadow-sm focus:border-[#008a8e] box-border ml-5 border-gray-300',
                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm'
                        ]"
                        placeholder="Search by name"
                    />
                </div>

                <Checkbox 
                    class="h-5 w-5 mr-2 border border-gray-500"
                    :checked="onRange"
                    @change="toggleOnRange"
                />

                <div class="relative w-full justify-start flex-grow box-border">
                    <PopoverGroup class="relative h-full w-full shadow-sm">
                        <Popover class="relative h-full w-full">
                            <div class="flex items-center">
                                <PopoverButton
                                    :class="[
                                        'relative flex items-center justify-between w-full gap-2 cursor-default rounded-lg py-2 px-2 text-right shadow-sm border border-gray-300',
                                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm',
                                        onRange === false
                                            ? 'bg-gray-200'
                                            : 'bg-white'
                                    ]"
                                    id="price_range"
                                    :aria-disabled="onRange === false"
                                >
                                    <p 
                                        class="flex justify-between w-full text-gray-700"
                                        v-if="onRange"
                                    >
                                        Price Range : ${{ minPrice }} - ${{ maxPrice }}
                                        <span 
                                            class="text-red-400"
                                            v-if="maxPrice <= minPrice"
                                        >
                                            Invalid
                                        </span>
                                    </p>
                                    <p v-else class="text-gray-700">
                                        Check the box on the left to set price range
                                    </p>
                                </PopoverButton>
                            </div>

                            <transition 
                                enter-active-class="transition ease-out duration-200" 
                                enter-from-class="opacity-0 translate-y-1" 
                                enter-to-class="opacity-100 translate-y-0" 
                                leave-active-class="transition ease-in duration-150" 
                                leave-from-class="opacity-100 translate-y-0" 
                                leave-to-class="opacity-0 translate-y-1"
                            >
                                <PopoverPanel class="absolute z-50 w-full overflow-hidden rounded-lg bg-white shadow-lg h-fit flex flex-col py-2 px-2 border border-gray-300">
                                    <div class="flex flex-col gap-2 items-center h-fit w-full justify-start">
                                        <div class="flex items-center justify-start w-full">
                                            <label class="flex items-center justify-between flex-shrink-0 w-1/3">
                                                <span class="w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0">
                                                    Minimum Price
                                                </span>
                                                <p class="pr-1">:</p>
                                            </label>
                                            <input 
                                                class="text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]"
                                                id="min_price"
                                                type="number"
                                                step="0.01"
                                                min="0"
                                                v-model="minPrice"
                                            >
                                        </div> 
                                        <div class="flex items-center justify-start w-full">
                                            <label class="flex items-center justify-between flex-shrink-0 w-1/3">
                                                <span class="w-fit mr-1 text-sm text-gray-700 leading-none flex-shrink-0">
                                                    Maximum Price
                                                </span>
                                                <p class="pr-1">:</p>
                                            </label>
                                            <input 
                                                class="text-xs p-1 leading-none rounded-md ml-2 focus:ring-1 focus:ring-[#008a8e] focus:border focus:border-[#008a8e]"
                                                id="max_price"
                                                type="number"
                                                step="0.01"
                                                v-model="maxPrice"
                                            >
                                        </div> 
                                    </div>
                                </PopoverPanel>
                            </transition>
                        </Popover>
                    </PopoverGroup>
                </div>

                <div class="w-full flex justify-end box-border">
                    <button 
                        @click="toggle" 
                        class="flex items-center p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#008a8e] mr-2"
                    >
                        <span>
                            <component 
                                :is="isDescending === false ? ChevronUpIcon : ChevronDownIcon" 
                                class="h-5 w-5 text-gray-700"
                            />
                        </span>
                    </button>
                    <Listbox v-model="selectedParameter">
                        <div class="relative w-1/2 h-full">
                            <ListboxButton
                                :class="[
                                    'relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:ring-2',
                                    'focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-[#008a8e] text-sm border border-gray-300'
                                ]"
                            >
                                <span class="block truncate text-left text-gray-700">
                                    Sort By: {{ selectedParameter.name }}
                                </span>
                                <span
                                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
                                >
                                    <ChevronUpDownIcon
                                        class="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </ListboxButton>

                            <transition
                                leave-active-class="transition duration-100 ease-in"
                                leave-from-class="opacity-100"
                                leave-to-class="opacity-0"
                            >
                                <ListboxOptions
                                    :class="[
                                        'absolute max-h-60 w-full rounded-md bg-white text-gray-700',
                                        'shadow-lg ring-1 ring-black/5 focus:outline-none text-sm'
                                    ]"
                                >
                                    <ListboxOption
                                        v-slot="{ active, selected }"
                                        v-for="parameter in parameters"
                                        :key="parameter.name"
                                        :value="parameter"
                                        as="template"
                                        @change="sortProducts"
                                    >
                                        <li
                                            :class="[
                                                active ? ' text-[#008a8e]' : 'text-gray-700',
                                                'relative cursor-default select-none py-2 pl-10 pr-4 hover:text-gray-700',
                                            ]"
                                        >
                                            <span
                                                :class="[
                                                    selected ? 'font-medium text-[#008a8e]' : 'font-normal',
                                                    'block truncate',
                                                ]"
                                            >
                                                {{ parameter.name }}
                                            </span>
                                            <span
                                                v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-[#008a8e]"
                                            >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                                            </span>
                                        </li>
                                    </ListboxOption>
                                </ListboxOptions>
                            </transition>
                        </div>
                    </Listbox>
                </div>
            </div>

            <div id="explore" class="flex flex-col items-center gap-5 w-full mx-10">
                <div class="relative flex flex-col w-full">
                    <div class="w-full flex justify-center items-start px-10 gap-5">
                        <TabGroup :default-index="selectedCategory - 1">
                            <div class="w-1/5 flex-shrink-0 h-screen">
                                <TabList class="w-full flex flex-col h-full px-5 justify-evenly items-center border-r border-l border-gray-100">
                                    <Tab 
                                        class="relative w-full"
                                        as="button"
                                        :key=1
                                    >
                                        <PrimaryButton 
                                            class="w-full justify-center h-full"
                                            py="py-3"
                                            @click="selectAllCategories"
                                            as="button"
                                        >
                                            all categories
                                        </PrimaryButton>
                                    </Tab>
                                    <Tab
                                        class="relative w-full"
                                        v-for="category in allCategories.slice(1, -1)"
                                        as="button"
                                        :key="category['id']"
                                        v-slot="{ selected }"
                                    >
                                        <button
                                            v-if="category['id'] > 1"
                                            :class="[
                                                'w-full rounded-lg text-sm font-semibold transition-all duration-200',
                                                'focus:border focus:border-[#008a8e] py-2',
                                                selected
                                                    ? 'bg-gray-100 text-[#008a8e] shadow-md focus:ring-2 focus:ring-[#008a8e] focus:outline-none'
                                                    : 'text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none',
                                                selectedCategory === 1
                                                    ? 'text-gray-500 hover:text-[#008a8e]/70 focus:ring-2 focus:ring-[#008a8e]/50 focus:outline-none bg-white shadow-none'
                                                    : ''
                                            ]"
                                            @click="selectCategory(category['id'])"
                                        >
                                            {{ category['name'] }}
                                        </button>
                                    </Tab>
                                </TabList>
                            </div>
                        </TabGroup>
                        
                        <div 
                            v-if="sortProducts.length === 0"
                            class="relative flex justify-center items-center h-screen w-full"
                        >
                            <p class="font-semibold w-full text-center">
                                No items exists in the range specified
                            </p>
                        </div>
                        <div
                            v-else 
                            class="grid grid-cols-4 max-h-screen w-full overflow-y-scroll scrollbar-hide"
                        >
                            <Link
                                class="col-span-1 p-5 border border-gray-100"
                                v-for="product in sortProducts"
                                :href="route('details', product['id'])"
                            >
                                <div class="flex flex-col gap-3">
                                    <div class="relative flex rounded-lg h-1/2">
                                        <img :src="asset(product['imageurl'].slice(36))" alt="" class="rounded-xl">
                                        
                                        <div 
                                            class="absolute bottom-0 right-0 text-xl p-2 font-semibold w-full leading-none"
                                            v-if="product['discount'] != 0"
                                        >
                                            <div 
                                                class="flex text-xs line-through text-gray-400 px-2 text-end w-full justify-end"
                                                v-if="product['discount'] != 0"
                                            >
                                                $ {{ product['price'] }}
                                            </div>
                                            <div 
                                                class="flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"
                                                v-if="product['discount'] != 0"
                                            >
                                                <p 
                                                    class="text-xs px-2 py-1 text-red-400"
                                                >
                                                    {{ product['discount'] }} % Off
                                                </p>
                                                <p class="text-xs font-normal px-2 py-1">
                                                    $ {{ product['discounted_price'] }}
                                                </p>
                                            </div>
                                            <div 
                                                class="flex items-end justify-end leading-none rounded-lg bg-[#4a8f84] text-white"
                                                v-else
                                            >
                                                <p class="text-xs font-normal px-2 py-1">
                                                    $ {{ product['discounted_price'] }}
                                                </p>
                                            </div>
                                        </div>
                                        <div 
                                            class="absolute bottom-0 right-0 text-xl p-2 font-semibold w-fit leading-none"
                                            v-else
                                        >
                                            <div 
                                                class="flex text-xs line-through text-gray-400 px-2 text-end w-full justify-end"
                                                v-if="product['discount'] != 0"
                                            >
                                                $ {{ product['price'] }}
                                            </div>
                                            <div 
                                                class="flex items-end justify-between leading-none rounded-lg bg-[#4a8f84] text-white"
                                                v-if="product['discount'] != 0"
                                            >
                                                <p 
                                                    class="text-xs px-2 py-1 text-red-400"
                                                >
                                                    {{ product['discount'] }} % Off
                                                </p>
                                                <p class="text-xs font-normal px-2 py-1">
                                                    $ {{ product['discounted_price'] }}
                                                </p>
                                            </div>
                                            <div 
                                                class="flex items-end justify-end leading-none rounded-lg bg-[#4a8f84] text-white"
                                                v-else
                                            >
                                                <p class="text-xs font-normal px-2 py-1">
                                                    $ {{ product['discounted_price'] }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-col items-center gap-1">
                                        <p class="font-semibold text-gray-900">
                                            {{ product['name'] }}
                                        </p>
                                        <p class="text-gray-500">
                                            {{ product['category']['name'] }}
                                        </p>
                                        <div class="flex w-full items-center justify-center">
                                            <p class="leading-none mr-1 text-sm">
                                                {{ product['ratings'] }}
                                            </p>
                                            <div class="flex mr-1">
                                                <StarIcon 
                                                    class="size-5 fill-yellow-500 text-transparent"
                                                    v-for="n in parseInt(product['ratings'])"
                                                ></StarIcon>
                                                <StarIcon 
                                                    class="size-5 fill-gray-300 text-transparent"
                                                    v-for="n in 5 - parseInt(product['ratings'])"
                                                ></StarIcon>
                                            </div>
                                            <p class="leading-none text-sm">
                                                ({{ product['reviews'] }})
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UserAuthenticatedLayout>
</template>