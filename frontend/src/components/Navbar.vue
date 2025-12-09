<template>
  <nav
    class="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50"
  >
    <router-link to="/" class="text-2xl font-bold text-indigo-600">
      E-Shop
    </router-link>

    <div class="flex items-center gap-4">
      <SearchBar @search="handleSearch" />

      <router-link
        to="/cart"
        class="flex items-center gap-1 text-gray-700 hover:text-indigo-600 relative"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a1 1 0 11-2 0 1 1 0 012 0zm8 0a1 1 0 11-2 0 1 1 0 012 0z"
          />
        </svg>

        <span
          v-if="cartCount > 0"
          class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
        >
          {{ cartCount }}
        </span>
      </router-link>

      <router-link
        to="/login"
        class="text-gray-700 hover:text-indigo-600 font-semibold"
      >
        Login
      </router-link>
    </div>
  </nav>
</template>

<script>
import { useCartStore } from "../stores/cart";
import { computed } from "vue";
import { useRouter } from "vue-router";
import SearchBar from "./SearchBar.vue";

export default {
  components: { SearchBar },
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();

    const cartCount = computed(() =>
      cartStore.cart.reduce((acc, item) => acc + item.quantity, 0)
    );

    const handleSearch = (keyword) => {
      router.push({ path: "/", query: { search: keyword } });
    };

    return { cartCount, handleSearch };
  },
};
</script>

<style scoped>
span {
  transition: all 0.2s ease-in-out;
}
</style>
