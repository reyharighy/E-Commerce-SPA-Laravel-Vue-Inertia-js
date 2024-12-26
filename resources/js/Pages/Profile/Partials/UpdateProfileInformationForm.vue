<script setup>
import InputError from '@/Components/InputError.vue'
import InputLabel from '@/Components/InputLabel.vue'
import PrimaryButton from '@/Components/PrimaryButton.vue'
import TextInput from '@/Components/TextInput.vue'
import { Link, useForm, usePage } from '@inertiajs/vue3'
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
    emailVerifiedAt: {
        type: String
    },
    message: {
        type: String
    },
    postalList: {
        type: Array,
        required: true
    }
})

const allPostalCodes = props.postalList.map(
    (postal) => ({
        id: postal['postal_id'],
        postalCode: postal['postal_code'],
        city: postal['city'],
        province: postal['province']
    })
)

const user = usePage().props.auth.user
const selected = ref('')
const city = ref('')
const province = ref('')

const form = useForm({
    name: user.name,
    address_line: user.address_line,
    phone_number: user.phone_number,
    postal_id: user.postal_id
})

if (user.postal_id) {
    const initialPostal = allPostalCodes.find((postal) => postal.id === user.postal_id)
    if (initialPostal) {
        selected.value = initialPostal
        city.value = initialPostal.city
        province.value = initialPostal.province
    }
}

const formFields = [
    {label: 'Name', name: 'name', type: 'text', span: 'col-span-5'},
    {label: 'Email', name: 'email', type: 'email', span: 'col-span-5'},
    {name: 'verify_email', span: 'col-span-10'},
    {label: 'Address Line', name: 'address_line', type: 'text', span: 'col-span-10'},
    {label: 'Phone Number', name: 'phone_number', type: 'text', span: 'col-span-5'},
    {label: 'Postal Code', name: 'postal_id', span: 'col-span-5'},
    {label: 'City', name: 'city', type: 'text', span: 'col-span-5'},
    {label: 'Province', name: 'province', type: 'text', span: 'col-span-5'}
]

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
    <section>
        <header>
            <h2 class="text-lg font-medium text-gray-900">
                Profile Information
            </h2>

            <p class="mt-1 text-sm text-gray-600">
                Update your account's profile information.
            </p>
        </header>

        <form
            @submit.prevent="form.patch(route('profile.update'))"
            class="mt-6 space-y-6"
        >
            <div class="grid grid-cols-10 gap-x-5">
                <div 
                    v-for="field in formFields"
                    :key="field['name']"
                    :class="field['span']"
                >
                    <div v-if="field['name'] != 'verify_email'">
                        <InputLabel :for="field['name']" :value="field['label']"/>
                        
                        <div v-if="field['name'] != 'city' && field['name'] != 'province' && field['name'] != 'email'">
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
                            <TextInput
                                v-else
                                :id="field['name']"
                                :type="field['type']"
                                class="mt-1 block w-full"
                                :class="field['name'] != formFields.slice(-1)[0]['name'] ? 'mb-5' : ''"
                                v-model="form[field['name']]"
                                required
                            />
                        </div>
                        <div v-else>
                            <input
                                :id="field['name']"
                                :type="field['type']"
                                class="mt-1 block w-full bg-gray-200 rounded-md shadow-sm border border-gray-300"
                                :value="field['name'] == 'city' ? city : field['name'] == 'province' ? province : user.email"
                                disabled
                            />
                        </div>
        
                        <InputError class="mt-2" :message="form.errors[field['name']]"/>
                    </div>
                    <div v-else>
                        <div v-if="emailVerifiedAt === null">
                            <p class="text-sm text-gray-800 mb-5 -mt-2">
                                Your email address is unverified.
                                <Link
                                    :href="route('verification.send')"
                                    method="post"
                                    as="button"
                                    class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Click here to send the verification email.
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center gap-4">
                <PrimaryButton :disabled="form.processing">Save</PrimaryButton>

                <Transition
                    enter-active-class="transition ease-in-out"
                    enter-from-class="opacity-0"
                    leave-active-class="transition ease-in-out"
                    leave-to-class="opacity-0"
                >
                    <p
                        v-if="form.recentlySuccessful"
                        class="text-sm text-gray-600"
                    >
                        Saved.
                    </p>
                </Transition>
            </div>
        </form>
    </section>
</template>
