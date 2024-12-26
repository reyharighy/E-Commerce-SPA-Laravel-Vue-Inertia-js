<script setup>
import Checkbox from '@/Components/Checkbox.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false
});

const input_list = [
    { label: "Email", name:'email', type: 'email'},
    { label: "Password", name:'password', type: 'password'}
]

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
        onSuccess: () => form.reset()
    });
};
</script>

<template>
    <GuestLayout title="Login">
        <form @submit.prevent="submit">
            <div v-for="input in input_list">
                <InputLabel 
                    class="mt-4 mb-2"
                    :for="input.name"
                    :value="input.label"
                />

                <TextInput
                    class="mt-1 block w-full text-gray-900"
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

            <div class="mt-4 block">
                <label class="flex items-center">
                    <Checkbox 
                        name="remember" 
                        v-model:checked="form.remember" 
                    />
                    <span class="ms-2 text-sm text-gray-600">
                        Remember me
                    </span>
                </label>
            </div>

            <div class="mt-4 flex items-center justify-end">
                <Link
                    class="rounded-md text-sm text-gray-600 underline hover:text-gray-900"
                    :href="route('password.request')"
                >
                    Forgot your password?
                </Link>

                <PrimaryButton
                    class="ms-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Log in
                </PrimaryButton>
            </div>

            <div class="flex flex-row justify-center items-center gap-1 pt-5">
                <p class="rounded-md text-sm text-gray-600">
                    Don't have an account?
                </p>
                <Link
                    class="rounded-md text-sm text-gray-600 underline hover:text-gray-900"
                    :href="route('register')"
                >
                    Register
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
