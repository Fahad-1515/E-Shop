<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-6">Shopping Cart</h1>

    <table class="min-w-full bg-white rounded shadow">
      <thead>
        <tr class="bg-gray-200">
          <th class="py-2 px-4">Product</th>
          <th class="py-2 px-4">Price</th>
          <th class="py-2 px-4">Quantity</th>
          <th class="py-2 px-4">Subtotal</th>
          <th class="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id" class="border-b">
          <td class="py-2 px-4">{{ item.name }}</td>
          <td class="py-2 px-4">$ {{ item.price }}</td>
          <td class="py-2 px-4">{{ item.quantity }}</td>
          <td class="py-2 px-4">$ {{ item.price * item.quantity }}</td>
          <td class="py-2 px-4">
            <button
              @click="removeFromCart(item.id)"
              class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-6 flex justify-end items-center gap-6 text-xl font-semibold">
      <span>Total Items: {{ totalItems }}</span>
      <span>Total Price: $ {{ totalPrice }}</span>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart";

export default {
  setup() {
    const store = useCartStore();
    return {
      cart: store.cart,
      totalItems: store.totalItems,
      totalPrice: store.totalPrice,
      removeFromCart: store.removeFromCart,
    };
  },
};
</script>
