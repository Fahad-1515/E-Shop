import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Cart from "./views/Cart.vue";
import ProductDetail from "./views/ProductDetail.vue";
import SearchResults from "./views/SearchResults.vue"; // <-- new

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/cart", component: Cart },
    { path: "/product/:id", component: ProductDetail },
    { path: "/search", component: SearchResults },
  ],
});
