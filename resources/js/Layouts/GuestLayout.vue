<script setup>
import { Head, router, usePage } from '@inertiajs/vue3'
import Logo from '@/Components/Logo.vue'
import Toast from '@/Components/Toast/Toast.vue'
import { ref } from 'vue'

defineProps({
    title: {
        type: String,
        required: true
    },
    width: {
        type: String,
        required: false
    }
})

const showingToast = ref(false)

router.on('finish', () => {
    showingToast.value = !!usePage().props.toast.message
})
</script>

<template #header>
    <Head :title="title"></Head>
    
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div class="mt-5">
           <Logo/>
        </div>

        <Toast
            :message="$page.props.toast.message || ''"
            position="bottom-right"
            :show="showingToast"
            @hide="showingToast = false"
            type="Success"
        ></Toast>

        <div 
            :class="[
                'mt-6 px-6 py-4 w-full bg-white shadow-md rounded-lg overflow-scroll scrollbar-hide',
                width ? width : 'max-w-md'
            ]">
            <slot></slot>
        </div>
    </div>
</template>
