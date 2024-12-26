<script setup>
defineProps({
    bgColor: {
        type: String,
        required: false
    },
    py: {
        type: String,
        required: false
    }
})
</script>

<template>
    <button
        :class="[
            'inline-flex items-center rounded-md border border-transparent px-4 text-xs font-semibold uppercase tracking-widest transition duration-150 ease-in-out text-[#dfecea] hover:bg-[#008a8e] hover:text-[#ffffff]',
            bgColor ? bgColor : 'bg-[#00adb5]',
            py ? py : 'py-2'
        ]"
    >
        <slot></slot>
    </button>
</template>
