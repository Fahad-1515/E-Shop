<template>
  <div>
    <Navbar />
    <div class="container mx-auto px-4 py-6">
      <h1 class="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <router-link
        to="/admin/products"
        class="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded font-semibold text-black"
      >
        Manage Products
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Footer from "../../components/Footer.vue";

export default { components: { Navbar, Footer } };
</script>
