<template>
  <div>
    <Navbar />
    <div class="container mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold mb-6">Products Management</h1>

      <form
        @submit.prevent="addProduct"
        class="mb-6 flex flex-col gap-4 max-w-md"
      >
        <input
          v-model="name"
          placeholder="Product Name"
          class="border p-2 rounded"
          required
        />
        <input
          v-model="description"
          placeholder="Description"
          class="border p-2 rounded"
        />
        <input
          type="number"
          v-model="price"
          placeholder="Price"
          class="border p-2 rounded"
          required
        />
        <input
          v-model="image"
          placeholder="Image URL"
          class="border p-2 rounded"
        />
        <button
          type="submit"
          class="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded font-semibold text-black"
        >
          Add Product
        </button>
      </form>

      <table class="min-w-full bg-white rounded shadow">
        <thead>
          <tr class="bg-gray-200">
            <th class="py-2 px-4">Name</th>
            <th class="py-2 px-4">Price</th>
            <th class="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p.id" class="border-b">
            <td class="py-2 px-4">{{ p.name }}</td>
            <td class="py-2 px-4">$ {{ p.price }}</td>
            <td class="py-2 px-4">
              <button
                @click="deleteProduct(p.id)"
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";
import { useProductsStore } from "../../stores/products";
import { ref } from "vue";

export default {
  components: { Navbar, Footer },
  setup() {
    const store = useProductsStore();
    const products = store.products;

    const name = ref("");
    const description = ref("");
    const price = ref(0);
    const image = ref("");

    const addProduct = () => {
      const id = Date.now();
      store.products.push({
        id,
        name: name.value,
        description: description.value,
        price: price.value,
        image: image.value,
      });
      name.value = description.value = image.value = "";
      price.value = 0;
    };

    const deleteProduct = (id) => {
      store.products = store.products.filter((p) => p.id !== id);
    };

    return {
      products,
      name,
      description,
      price,
      image,
      addProduct,
      deleteProduct,
    };
  },
};
</script>
