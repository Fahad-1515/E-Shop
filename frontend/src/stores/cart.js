import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref(JSON.parse(localStorage.getItem("cart")) || []);

  const addToCart = (product) => {
    if (!product.inStock) return alert("This item is out of stock!");

    const existing = cart.value.find((p) => p.id === product.id);

    if (existing) {
      existing.quantity++;
    } else {
      cart.value.push({
        id: product.id,
        title: product.title,
        price: product.price,
        discountPrice: product.discountPrice || null,
        image: product.image,
        quantity: 1,
      });
    }
  };

  const incrementQty = (id) => {
    const item = cart.value.find((p) => p.id === id);
    if (item) item.quantity++;
  };

  const decrementQty = (id) => {
    const item = cart.value.find((p) => p.id === id);
    if (item && item.quantity > 1) item.quantity--;
  };

  const removeFromCart = (id) => {
    cart.value = cart.value.filter((p) => p.id !== id);
  };

  const totalItems = computed(() =>
    cart.value.reduce((sum, p) => sum + p.quantity, 0)
  );

  const totalPrice = computed(() =>
    cart.value.reduce(
      (sum, p) => sum + (p.discountPrice || p.price) * p.quantity,
      0
    )
  );

  watch(
    cart,
    (newCart) => {
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    { deep: true }
  );

  return {
    cart,
    addToCart,
    incrementQty,
    decrementQty,
    removeFromCart,
    totalItems,
    totalPrice,
  };
});
