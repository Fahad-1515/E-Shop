<template>
  <form @submit.prevent="submit" class="bg-white p-4 rounded shadow">
    <div class="grid grid-cols-2 gap-4">
      <input v-model="name" placeholder="Name" class="border p-2 rounded" />
      <input
        v-model.number="price"
        placeholder="Price"
        class="border p-2 rounded"
      />
      <input
        v-model="category"
        placeholder="Category"
        class="border p-2 rounded"
      />
      <input
        v-model="image"
        placeholder="Image URL"
        class="border p-2 rounded"
      />
      <textarea
        v-model="description"
        placeholder="Description"
        class="border p-2 rounded col-span-2"
      ></textarea>
    </div>
    <div class="mt-4 flex justify-end">
      <button class="bg-indigo-600 text-white px-4 py-2 rounded">Save</button>
    </div>
  </form>
</template>

<script>
import api from "../services/api";
export default {
  data() {
    return { name: "", price: 0, image: "", category: "", description: "" };
  },
  methods: {
    async submit() {
      await api.post("/products", {
        name: this.name,
        price: this.price,
        image: this.image,
        category: this.category,
        description: this.description,
      });
      this.$emit("created");
      this.name = "";
      this.price = 0;
      this.image = "";
      this.category = "";
      this.description = "";
    },
  },
};
</script>
