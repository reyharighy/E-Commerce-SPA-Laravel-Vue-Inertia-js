<script setup>
const model = defineModel({
    type: String,
    required: true
});
</script>

<template>
    <input
        class="rounded-md border-gray-300 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5]"
        v-model="model"
    />
</template>
