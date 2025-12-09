<template>
  <div>
    <Navbar />

    <div class="container mx-auto px-4 py-6" v-if="product">
      <div class="flex flex-col md:flex-row gap-6">
        <img
          :src="product.image"
          class="w-full md:w-1/2 h-96 object-contain rounded-lg border"
        />

        <div class="flex flex-col gap-4 md:w-1/2">
          <h1 class="text-3xl font-bold">{{ product.name }}</h1>

          <div class="flex items-center gap-2">
            <span
              class="bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold"
            >
              {{ product.rating }} ★
            </span>
            <span class="text-gray-500 text-sm"
              >{{ product.reviews }} Reviews</span
            >
          </div>

          <div class="flex items-center gap-3">
            <p class="text-indigo-600 font-bold text-3xl">
              ₹{{
                product.discountPrice ? product.discountPrice : product.price
              }}
            </p>
            <p
              v-if="product.discountPrice"
              class="text-gray-500 line-through text-lg"
            >
              ₹{{ product.price }}
            </p>
            <p
              v-if="product.discountPrice"
              class="text-green-600 text-lg font-semibold"
            >
              {{ discountPercent }}% off
            </p>
          </div>

          <p
            class="text-sm font-semibold"
            :class="product.stock > 0 ? 'text-green-600' : 'text-red-600'"
          >
            {{ product.stock > 0 ? "In Stock" : "Out of Stock" }}
          </p>

          <p class="text-gray-600 leading-relaxed">
            {{ product.description }}
          </p>

          <p class="text-sm text-gray-700">
            Secure delivery by <strong>{{ deliveryDate }}</strong>
          </p>

          <div class="flex gap-3 mt-4">
            <button
              @click="addToCart(product)"
              :disabled="product.stock === 0"
              class="px-4 py-2 rounded font-semibold text-black transition-all bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:text-gray-500"
            >
              Add to Cart
            </button>

            <router-link
              to="/cart"
              class="px-4 py-2 rounded font-semibold bg-gray-200 hover:bg-gray-300"
            >
              Go to Cart
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20 text-xl font-semibold text-gray-500">
      Product not found.
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  components: { Navbar, Footer },

  setup() {
    const route = useRoute();
    const productStore = useProductsStore();
    const cartStore = useCartStore();

    const productId = Number(route.params.id);
    const product = productStore.products.find((p) => p.id === productId);

    const addToCart = (p) => cartStore.addToCart(p);

    const discountPercent = computed(() => {
      if (!product || !product.discountPrice) return 0;
      return Math.round(
        ((product.price - product.discountPrice) / product.price) * 100
      );
    });

    const deliveryDate = computed(() => {
      const date = new Date();
      date.setDate(date.getDate() + 3);
      return date.toDateString();
    });

    return { product, addToCart, discountPercent, deliveryDate };
  },
};
</script>
