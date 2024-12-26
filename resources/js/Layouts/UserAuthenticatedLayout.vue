<script setup>
import { ref, computed } from 'vue'
import { Head, Link, usePage, router } from '@inertiajs/vue3'
import Logo from '@/Components/Logo.vue'
import Toast from '@/Components/Toast/Toast.vue'

import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'

import {
    ShoppingBagIcon,
    ShoppingCartIcon,
    ArchiveBoxIcon,
    HeartIcon
} from '@heroicons/vue/24/outline'

import { 
    ChevronDownIcon
} from '@heroicons/vue/20/solid'

defineProps({
    title: {
        type: String,
        required: true
    }
})

const parentMenuList = computed(() => {
    const user = usePage().props.auth.user

    return [
        { name: 'Home', id: 'home', href: 'home'},
        { name: 'Offers', id: 'offers', href: 'offers'},
        { name: 'Collection', id: 'collection', href: 'collection'},
        ...(user ? [{name: user.name, id: 'user'}] : []),
    ]
})

const subMenuList = computed(() => {
    const user = usePage().props.auth.user

    return {
        'Shop': [
            { name: 'Shop-1', id: 'shop-1', description: 'Description of Shop-1', href: '/', icon: ShoppingBagIcon },
            { name: 'Shop-2', id: 'shop-2', description: 'Description of Shop-2', href: '/', icon: ShoppingBagIcon }
        ],
        ...(user ? {
        [user.name]: [
            { name: 'Profile', id: 'profile', href: '/profile', method: 'get', as: 'a' },
            { name: 'Log Out', id: 'logout', href: '/logout', method: 'post', as: 'button' }
        ]
        } : {})
    }
})

const showingToast = ref(false)

router.on('finish', () => {
    showingToast.value = !!usePage().props.toast.message
})

const showingToastWarning = ref(false)

router.on('finish', () => {
    showingToastWarning.value = !!usePage().props.toast.warning
})
</script>

<style scoped>
.sticky {
    position: sticky;
    top: 0;
    z-index: 50;
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.over-width {
    width: 150%;
    top: 150%;
    left: -50%;
}

.shifted-panel {
    left: -175%;
}
</style>

<template #header>
    <Head :title="title"></Head>

    <div class="flex flex-col h-screen">
        <div class="sticky">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <!--Company Logo-->
                <div class="flex lg:flex-1">
                    <Logo/>
                </div>
    
                <!--Navigation Menu-->
                <!--User has logged in-->
                <PopoverGroup 
                    class="items-center justify-around flex gap-x-12"
                    v-if="$page.props.auth.user"
                >
                    <!--Parent Menu Dropdown-->
                    <Popover
                        class="relative"
                        v-for="parentMenu in parentMenuList.slice(0, -1)"
                        :key="parentMenu.id"
                    >
                        <!--Parent Menu Name-->
                        <PopoverButton 
                            class="flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"
                            v-if="subMenuList[parentMenu.name]"
                        >
                            {{ parentMenu.name }} <ChevronDownIcon class="size-5 flex-none text-gray-400"/>
                        </PopoverButton>
    
                        <div v-else>
                            <Link 
                                class="block text-sm/1 text-gray-900 space-y-2 py-3"
                                :href="parentMenu.href === 'collection' || parentMenu.href === 'offers' ? route(parentMenu.href, 1) : route(parentMenu.href)"
                                :key="parentMenu.id"
                                as="a"
                            >
                                {{ parentMenu.name }}
                            </Link>
                        </div>
            
                        <!--Show Sub Menu Panel when clicked-->
                        <transition 
                            enter-active-class="transition ease-out duration-200" 
                            enter-from-class="opacity-0 translate-y-1" 
                            enter-to-class="opacity-100 translate-y-0" 
                            leave-active-class="transition ease-in duration-150" 
                            leave-from-class="opacity-100 translate-y-0" 
                            leave-to-class="opacity-0 translate-y-1"
                        >
                            <!--Sub Menu Panel-->
                            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel">
                                <div>
                                    <Link 
                                        class="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50"
                                        v-for="subMenu in subMenuList[parentMenu.name]" 
                                        :key="subMenu.name" 
                                        :href="subMenu.href"
                                        as="a"
                                    >
                                        <!--Sub Menu Icon-->
                                        <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <component 
                                                :is="subMenu.icon" 
                                                class="size-6 text-gray-900 group-hover:text-[#00adb5]"
                                            />
                                        </div>
    
                                        <!--Sub Menu Name and Description-->
                                        <div class="flex-auto">
                                            <p class="block text-gray-900">
                                                {{ subMenu.name }}
                                            </p>
                                            <p class="mt-1 text-gray-600">
                                                {{ subMenu.description }}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>
                </PopoverGroup>
    
                <!--User hasn't logged in-->
                <PopoverGroup 
                    class="items-center justify-around flex gap-x-12"
                    v-else
                >
                    <!--Parent Menu Dropdown-->
                    <Popover
                        class="relative"
                        v-for="parentMenu in parentMenuList"
                        :key="parentMenu.id"
                    >
                        <!--Parent Menu Name-->
                        <PopoverButton 
                            class="flex items-center gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0"
                            v-if="subMenuList[parentMenu.name]"
                        >
                            {{ parentMenu.name }} <ChevronDownIcon class="size-5 flex-none text-gray-400"/>
                        </PopoverButton>
    
                        <div v-else>
                            <Link
                                class="block text-sm/1 text-gray-900 space-y-2 py-3"
                                :href="parentMenu.href === 'collection' || parentMenu.href === 'offers' ? route(parentMenu.href, 1) : route(parentMenu.href)"
                                :key="parentMenu.id"
                                as="a"
                            >
                                {{ parentMenu.name }}
                            </Link>
                        </div>
            
                        <!--Show Sub Menu Panel when clicked-->
                        <transition 
                            enter-active-class="transition ease-out duration-200" 
                            enter-from-class="opacity-0 translate-y-1" 
                            enter-to-class="opacity-100 translate-y-0" 
                            leave-active-class="transition ease-in duration-150" 
                            leave-from-class="opacity-100 translate-y-0" 
                            leave-to-class="opacity-0 translate-y-1"
                        >
                            <!--Sub Menu Panel-->
                            <PopoverPanel class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 shifted-panel">
                                <div>
                                    <Link 
                                        class="group relative flex items-center gap-x-6 p-4 text-sm/6 hover:bg-gray-50"
                                        v-for="subMenu in subMenuList[parentMenu.name]" 
                                        :key="subMenu.name" 
                                        :href="subMenu.href"
                                        as="a"
                                    >
                                        <!--Sub Menu Icon-->
                                        <div class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <component 
                                                :is="subMenu.icon" 
                                                class="size-6 text-gray-900 group-hover:text-[#00adb5]"
                                            />
                                        </div>
    
                                        <!--Sub Menu Name and Description-->
                                        <div class="flex-auto">
                                            <p class="block text-gray-900">
                                                {{ subMenu.name }}
                                            </p>
                                            <p class="mt-1 text-gray-600">
                                                {{ subMenu.description }}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </PopoverPanel>
                        </transition>
                    </Popover>
                </PopoverGroup>
    
                <!--Order, Cart, User Profile, and Login-->
                <div 
                    class="flex flex-1 justify-end"
                    v-if="$page.props.canLogin"
                >
                    <div
                        class="flex justify-around items-center flex-row gap-5"
                        v-if="$page.props.auth.user"
                    >
                        <!--Order-->
                        <Link
                            :href="route('order.index')"
                            as="a"
                        >
                            <component
                                class="size-6 text-gray-900"
                                :is="ArchiveBoxIcon"
                            />
                        </Link>

                        <Link
                            :href="route('wishlist.index')"
                            as="a"
                        >
                            <component
                                class="size-6 border-none ring-0 stroke-none fill-red-400"
                                :is="HeartIcon"
                            />
                        </Link>

                        <!--Cart Icon-->
                        <Link
                            :href="route('cart.index')"
                            as="a"
                        >
                            <component
                                class="size-6 text-gray-900"
                                :is="ShoppingCartIcon"
                            />
                        </Link>
    
                        <!--User Menu Dropdown-->
                        <PopoverGroup class="items-center justify-around flex gap-x-12">
                            <Popover
                                class="relative"
                                v-for="parentMenu in parentMenuList.slice(-1)"
                                :key="parentMenu.id"
                            >
                                <!--User Name-->
                                <PopoverButton class="flex flex-row items-center w-max gap-x-1 text-sm/1 text-gray-900 focus:outline-none focus:ring-0 focus:border-0">
                                    {{ parentMenu.name }} <ChevronDownIcon class="size-5 flex-none text-gray-400"/>
                                </PopoverButton>
                    
                                <!--Show User Sub Menu Panel when clicked-->
                                <transition 
                                    enter-active-class="transition ease-out duration-200" 
                                    enter-from-class="opacity-0 translate-y-1" 
                                    enter-to-class="opacity-100 translate-y-0" 
                                    leave-active-class="transition ease-in duration-150" 
                                    leave-from-class="opacity-100 translate-y-0" 
                                    leave-to-class="opacity-0 translate-y-1"
                                >
                                    <!--User Sub Menu Panel-->
                                    <PopoverPanel class="absolute over-width w-full top-full z-10 max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5">
                                        <Link 
                                            class="flex flex-col items-start w-full rounded-lg px-4 py-3 text-sm/6 text-gray-900 hover:bg-gray-50"
                                            v-for="subMenu in subMenuList[parentMenu.name]" 
                                            :key="subMenu.name" 
                                            :href="subMenu.href"
                                            :method="subMenu.method"
                                            :as="subMenu.as"
                                        >
                                            <!--User Sub Menu Name and Description-->
                                            {{ subMenu.name }}
                                        </Link>
                                    </PopoverPanel>
                                </transition>
                            </Popover>
                        </PopoverGroup>
                    </div>
    
                    <!--Login Link-->
                    <Link v-else
                        class="text-sm/1 pl-5 text-gray-900"
                        :href="route('login')"
                        as="a"
                    >
                        Log in &rarr;
                    </Link>
                </div>
            </nav>
        </div>

        <Toast
            :message="$page.props.toast.message || ''"
            position="bottom-right"
            :show="showingToast"
            @hide="showingToast = false"
            type="Success"
        ></Toast>

        <Toast
            :message="$page.props.toast.warning || ''"
            position="bottom-right"
            :show="showingToastWarning"
            @hide="showingToastWarning = false"
            type="Warning"
        ></Toast>
    
        <div class="h-full overflow-auto scrollbar-hide">
            <slot></slot>
        </div>
    </div>
</template>