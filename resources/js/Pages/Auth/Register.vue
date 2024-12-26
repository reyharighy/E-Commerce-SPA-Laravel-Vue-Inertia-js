<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue'
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
import { Link, useForm } from '@inertiajs/vue3'
import { ref, computed, watch } from 'vue'

import {
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    TransitionRoot,
} from '@headlessui/vue'

import { CheckIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    postalList: {
        type: Array,
        required: true
    }
})

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    address_line: '',
    phone_number: '',
    postal_id: ''
})

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset()
    })
}

const formFields = [
    {label: 'Name', name: 'name', type: 'text', span: 'col-span-6'},
    {label: 'Email', name: 'email', type: 'email', span: 'col-span-6'},
    {label: 'Password', name: 'password', type: 'password', span: 'col-span-6'},
    {label: 'Password Confirmation', name: 'password_confirmation', type: 'password', span: 'col-span-6'},
    {label: 'Address Line', name: 'address_line', type: 'text', span: 'col-span-12'},
    {label: 'Phone Number', name: 'phone_number', type: 'text', span: 'col-span-6'},
    {label: 'Postal Code', name: 'postal_id', span: 'col-span-6'},
    {label: 'City', name: 'city', type: 'text', span: 'col-span-6'},
    {label: 'Province', name: 'province', type: 'text', span: 'col-span-6'}
]

const allPostalCodes = props.postalList.map(
    (postal) => ({
        id: postal['postal_id'],
        postalCode: postal['postal_code'],
        city: postal['city'],
        province: postal['province']
    })
)

let selected = ref('')
let query = ref('')

let filteredPostal = computed(() =>
  query.value === ''
    ? allPostalCodes
    : allPostalCodes.filter((postal) =>
        postal.postalCode
          .replace(/\s+/g, '')
          .includes(query.value.replace(/\s+/g, ''))
      )
)

let city = ref('')
let province = ref('')

watch(selected, (newValue) => {
    if (newValue) {
        city.value = newValue.city
        province.value = newValue.province
        form.postal_id = newValue.id
    } else {
        city.value = ''
        province.value = ''
        form.postal_id = ''
    }
})
</script>

<template>
    <GuestLayout title="Register" width="max-w-2xl">
        <form @submit.prevent="submit" class="text-gray-700 px-1 overflow-scroll scrollbar-hide">
            <div class="grid grid-cols-12 gap-5">
                <div 
                    v-for="field in formFields"
                    :key="field.name"
                    :class="field.span"
                >
                    <InputLabel :for="field.name" :value="field.label"/>

                    <Combobox 
                        v-if="field.name == 'postal_id'"
                        v-model="selected"
                    >
                        <div class="relative mt-1">
                            <div class="relative w-full cursor-default overflow-hidden border-none box-border">
                                <ComboboxInput
                                    class="w-full focus:ring-0 border rounded-md border-gray-300 shadow-sm leading-normal focus:border-[#00adb5] focus:ring-[#00adb5] focus:border-2 focus:leading-none"
                                    :displayValue="(postal) => postal.postalCode"
                                    @change="query = $event.target.value"
                                />
                            </div>
                                
                            <TransitionRoot
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                                @after-leave="query = ''"
                            >
                                <ComboboxOptions class="absolute mt-1 max-h-20 w-full overflow-hidden rounded-md bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none scrollbar-hide">
                                    <div
                                        v-if="filteredPostal.length === 0 && query !== ''"
                                        class="relative cursor-default select-none px-4 py-2 text-gray-700"
                                    >
                                        Nothing found.
                                    </div>

                                    <ComboboxOption
                                        v-for="postal in filteredPostal"
                                        as="template"
                                        :key="postal.id"
                                        :value="postal"
                                        v-slot="{ selected, active }"
                                    >
                                        <li
                                            class="relative cursor-default select-none py-2 pl-10 pr-4"
                                            :class="{
                                                'bg-teal-600 text-white': active,
                                                'text-gray-900': !active,
                                            }"
                                        >
                                            <span
                                                class="block truncate"
                                                :class="{
                                                    'font-medium': selected, 
                                                    'font-normal': !selected
                                                }"
                                            >
                                            {{ postal.postalCode }}
                                            </span>
                                            <span
                                                v-if="selected"
                                                class="absolute inset-y-0 left-0 flex items-center pl-3"
                                                :class="{
                                                    'text-white': active, 
                                                    'text-teal-600': !active
                                                }"
                                            >
                                                <CheckIcon class="h-5 w-5" aria-hidden="true"/>
                                            </span>
                                        </li>
                                    </ComboboxOption>
                                </ComboboxOptions>
                            </TransitionRoot>
                        </div>
                    </Combobox>
                    <input
                        v-else-if="field.name == 'city' || field.name == 'province'"
                        :id="field.name"
                        :type="field.type"
                        class="mt-1 block w-full bg-gray-200 rounded-md border-gray-300 shadow-sm focus:border-[#00adb5] focus:ring-[#00adb5]"
                        :value="field.name == 'city' ? city : province"
                        required
                        disabled
                    />
                    <TextInput
                        v-else
                        :id="field.name"
                        :type="field.type"
                        class="mt-1 block w-full"
                        v-model="form[field.name]"
                        required
                    />

                    <InputError 
                        class="mt-2" 
                        :message="form.errors[field.name]"
                    />
                </div>
            </div>

            <div class="mt-5 flex items-center justify-end">
                <PrimaryButton
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Register
                </PrimaryButton>
            </div>

            <div class="flex flex-row justify-center items-center gap-1 pt-5">
                <p class="rounded-md text-sm text-gray-600">
                    Already Registered?
                </p>

                <Link
                    class="rounded-md text-sm text-gray-600 underline hover:text-gray-900"
                    :href="route('login')"
                >
                    Log In
                </Link>
            </div>
        </form>
    </GuestLayout>
</template>
