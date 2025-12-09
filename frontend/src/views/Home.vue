<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold mb-6">{{ title }}</h1>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <ProductCard v-for="p in filteredProducts" :key="p.id" :product="p" />
    </div>

    <p v-if="filteredProducts.length === 0" class="text-gray-500 text-lg mt-6">
      No products found. Try a different search.
    </p>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useProductsStore } from "../stores/products";
import { useRoute } from "vue-router";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: { ProductCard },
  setup() {
    const store = useProductsStore();
    const route = useRoute();
    const searchQuery = ref(route.query.search || "");

    watch(
      () => route.query.search,
      (newQuery) => {
        searchQuery.value = newQuery || "";
      }
    );

    const filteredProducts = computed(() => {
      const search = searchQuery.value.toLowerCase().trim();
      if (!search) return store.products;

      return store.products.filter((p) =>
        p.name.toLowerCase().includes(search)
      );
    });

    const title = computed(() =>
      searchQuery.value
        ? `Search results for "${searchQuery.value}"`
        : "Featured Products"
    );

    return { filteredProducts, title };
  },
};
</script>
