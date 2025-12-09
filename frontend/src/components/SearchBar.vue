<template>
  <div class="relative w-64">
    <input
      type="text"
      v-model="query"
      @keyup.enter="search"
      placeholder="Search products..."
      class="w-full border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
    <button
      @click="search"
      class="absolute right-1 top-1/2 transform -translate-y-1/2 px-3 py-1 text-white bg-indigo-500 rounded-full hover:bg-indigo-600"
    >
      🔍
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const query = ref("");
    const router = useRouter();

    const search = () => {
      if (query.value.trim()) {
        router.push({ path: "/search", query: { q: query.value.trim() } });
        query.value = "";
      }
    };

    return { query, search };
  },
};
</script>
