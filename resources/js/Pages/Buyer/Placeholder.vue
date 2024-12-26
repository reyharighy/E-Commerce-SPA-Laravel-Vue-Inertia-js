<script>
export default {
    methods: {
        asset(path) {
            return `/${path}`;
        }
    }
};
</script>

<template>
    <UserAuthenticatedLayout title="Placeholder">
        <header class="flex justify-between border-b py-3 px-10 bg-white sticky top-0">
            <a href="#" class="flex items-center cursor-pointer">
                <div class="size-6">
                    <img src="">
                </div>
                <p class="font-bold text-teal-400 ml-1">BACK</p>
            </a>
        </header>

        <!-- Main Container -->
        <div class="container mx-auto p-6">
            <!-- Header -->
            <div class="bg-white shadow rounded-lg p-6 mb-6">
                <h1 class="font-extrabold text-teal-500 text-3xl my-8">Order Status</h1>
                <p class="text-gray-600 mt-2">Order ID: <span class="font-medium">#1</span></p>
                <p class="text-gray-600">Placed on: <span class="font-medium">Aug 17, 1945</span></p>
            </div>

        <!-- Order Status Timeline -->
        <div class="bg-white shadow rounded-lg p-6 mb-6">
            <h2 class="text-lg font-semibold text-gray-700 mb-4">Status Timeline</h2>
            <ol class="relative border-l border-gray-200">
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 border border-white"></div>
                    <h3 class="text-sm font-semibold text-gray-900">Order Confirmed</h3>
                    <p class="text-sm text-gray-600">Jan 10, 2024, 10:00 AM</p>
                </li>
                <li class="mb-10 ml-4">
                    <div class="absolute w-3 h-3 bg-teal-500 rounded-full -left-1.5 border border-white"></div>
                    <h3 class="text-sm font-semibold text-gray-900">Order Shipped</h3>
                    <p class="text-sm text-gray-600">Jan 11, 2024, 2:30 PM</p>
                </li>
                <li class="ml-4">
                    <div class="absolute w-3 h-3 bg-gray-300 rounded-full -left-1.5 border border-white"></div>
                    <h3 class="text-sm font-semibold text-gray-900">Out for Delivery</h3>
                    <p class="text-sm text-gray-600">Expected: Jan 12, 2024, 9:00 AM</p>
                </li>
            </ol>
        </div>

        <!-- Shipping Information -->
        <div class="bg-white shadow rounded-lg p-6 mb-6">
            <h2 class="text-lg font-semibold text-gray-700 mb-4">Shipping Information</h2>
            <p class="text-gray-600"><strong>Carrier:</strong> UPS</p>
            <p class="text-gray-600"><strong>Tracking Number:</strong> 1Z12345E1512345678</p>
            <a href="#" class="text-teal-500 hover:underline">Track Package</a>
        </div>

        <!-- Order Summary -->
        <div class="bg-white shadow rounded-lg p-6">
            <h2 class="text-lg font-semibold text-gray-700 mb-4">Order Summary</h2>
            <table class="w-full text-left table-auto border-collapse border border-gray-200">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="border px-4 py-2 text-gray-700">Item</th>
                        <th class="border px-4 py-2 text-gray-700">Quantity</th>
                        <th class="border px-4 py-2 text-gray-700">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border px-4 py-2">Product A</td>
                        <td class="border px-4 py-2">2</td>
                        <td class="border px-4 py-2">$50</td>
                    </tr>
                    <tr>
                        <td class="border px-4 py-2">Product B</td>
                        <td class="border px-4 py-2">1</td>
                        <td class="border px-4 py-2">$30</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2" class="border px-4 py-2 font-semibold text-right">Total</td>
                        <td class="border px-4 py-2 font-semibold">$130</td>
                    </tr>
                </tfoot>
                </table>
            </div>
        </div>
    </UserAuthenticatedLayout>
</template>