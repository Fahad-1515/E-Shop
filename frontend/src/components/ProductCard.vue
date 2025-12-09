<template>
  <div
    class="bg-white shadow-md hover:shadow-lg rounded-lg transition transform hover:-translate-y-1"
  >
    <img
      :src="product.image"
      :alt="product.title"
      class="h-48 w-full object-contain p-3 bg-gray-50 rounded-t-lg"
    />
    <div class="p-4 flex flex-col gap-2">
      <h2 class="font-semibold text-lg truncate">{{ product.title }}</h2>
      <p class="text-gray-500 text-sm truncate">{{ product.description }}</p>
      <p class="text-indigo-600 font-bold text-lg">$ {{ product.price }}</p>
      <div class="flex justify-between mt-2">
        <button
          @click="addToCart(product)"
          class="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded font-semibold text-black"
        >
          Add
        </button>
        <router-link
          :to="`/product/${product.id}`"
          class="text-indigo-600 hover:underline"
        >
          View
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cart";

export default {
  props: { product: Object },
  setup() {
    const cartStore = useCartStore();
    const addToCart = (product) => cartStore.addToCart(product);
    return { addToCart };
  },
};
</script>
