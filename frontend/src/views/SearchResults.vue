<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-6">Search results for "{{ query }}"</h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
    </div>

    <p v-if="filteredProducts.length === 0" class="text-gray-500 text-lg mt-6">
      No products found.
    </p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useProductsStore } from "../stores/products";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: { ProductCard },
  setup() {
    const route = useRoute();
    const store = useProductsStore();

    const query = computed(() => route.query.q || "");

    const filteredProducts = computed(() => {
      const q = query.value.toLowerCase();
      if (!q) return store.products;
      return store.products.filter(
        (p) =>
          p.title.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    });

    return { query, filteredProducts };
  },
};
</script>
