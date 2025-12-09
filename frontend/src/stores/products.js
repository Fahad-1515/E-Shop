import { defineStore } from "pinia";
import { ref } from "vue";

export const useProductsStore = defineStore("products", () => {
  const products = ref([
    {
      id: 1,
      title: "Apple iPhone 15 (Black, 128 GB)",
      brand: "Apple",
      rating: 4.6,
      ratingsCount: 2700000,
      reviewsCount: 9465,

      price: 51999,
      originalPrice: 59900,
      discountPercent: 13,
      offerText: "Extra ₹7901 off",

      image: "/products/iphone15.jpg",
      images: [
        "/products/iphone15.jpg",
        "/products/iphone15.jpg",
        "/products/iphone15.jpg",
      ],

      description:
        "Apple iPhone 15 with Dynamic Island, A16 Bionic chip, advanced dual-camera system, and a stunning 6.1-inch Super Retina XDR display.",

      features: [
        "48MP Main Camera",
        "A16 Bionic Chip",
        "6.1-inch Super Retina XDR Display",
        "USB-C Connector",
      ],

      inStock: true,
      delivery: "Secure delivery by 12 Dec, Friday",
    },

    {
      id: 2,
      title:
        "Samsung Galaxy S24 5G Snapdragon (Amber Yellow, 128 GB) (8 GB RAM)",
      brand: "Samsung",
      rating: 4.6,
      ratingsCount: 44725,
      reviewsCount: 2469,

      price: 40999,
      originalPrice: 74999,
      discountPercent: 45,
      offerText: "Extra ₹34000 off",

      image: "/products/SamsungGalaxyS24.jpg",
      images: [
        "/products/SamsungGalaxyS24.jpg",
        "/products/SamsungGalaxyS24.jpg",
        "/products/SamsungGalaxyS24.jpg",
      ],

      description:
        "Samsung Galaxy S24 with Snapdragon chipset, 120Hz Dynamic AMOLED 2X display, and pro-grade AI-powered camera.",

      features: [
        "Snapdragon 8 Gen 3",
        "6.2-inch Dynamic AMOLED 2X Display",
        "AI Zoom & Nightography",
        "8 GB RAM | 128 GB Storage",
      ],

      inStock: true,
      delivery: "Secure delivery by 12 Dec, Friday",
    },

    {
      id: 3,
      title:
        "Sony WH-1000XM5 Wireless Noise Cancelling Headphones with Mic (Black)",
      brand: "Sony",
      rating: 4.4,
      ratingsCount: 16233,
      reviewsCount: 1200,

      price: 29990,
      originalPrice: 34990,
      discountPercent: 14,
      offerText: "With 14% Savings",

      image: "/products/sony_xm5.jpg",
      images: [
        "/products/sony_xm5.jpg",
        "/products/sony_xm5.jpg",
        "/products/sony_xm5.jpg",
      ],

      description:
        "Industry-leading noise cancellation, 30 hours battery life, crystal clear calling, and superior sound quality.",

      features: [
        "30 Hours Battery Life",
        "8-Microphone Noise Cancelling System",
        "Multipoint Bluetooth",
        "Fast Charging (3 min = 3 hours)",
      ],

      inStock: true,
      delivery: "Secure delivery by 12 Dec, Friday",
    },

    {
      id: 4,
      title:
        "Apple MacBook Pro M1 - (16 GB/256 GB SSD/Mac OS Big Sur) 13.3 inch",
      brand: "Apple",
      rating: 4.7,
      ratingsCount: 799,
      reviewsCount: 88,

      price: 149900,
      originalPrice: 149900,
      discountPercent: 0,
      offerText: "No discount available",

      image: "/products/Macbook.jpg",
      images: [
        "/products/Macbook.jpg",
        "/products/Macbook.jpg",
        "/products/Macbook.jpg",
      ],

      description:
        "Apple MacBook Pro with the M1 chip delivers exceptional performance, powerful battery life, and a stunning Retina display.",

      features: [
        "Apple M1 Chip",
        "16 GB Unified Memory",
        "256 GB SSD Storage",
        "13.3-inch Retina Display",
        "Magic Keyboard with Touch Bar",
      ],

      inStock: false,
      delivery: "Currently unavailable (Out of Stock)",
    },
  ]);

  return { products };
});
