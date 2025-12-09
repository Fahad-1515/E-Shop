<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="container mx-auto px-4 py-6 flex-1">
      <router-view />
    </main>
    <footer class="text-center py-4 text-sm text-gray-500">© E-Shop</footer>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default { components: { Navbar } };
</script>
