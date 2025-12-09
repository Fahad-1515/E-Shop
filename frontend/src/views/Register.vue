<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 px-4">
    <div class="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold text-center text-indigo-600 mb-6">
        Create Account
      </h2>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          required
        />

        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          required
        />

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
        >
          Register
        </button>
      </form>

      <p v-if="auth.error" class="mt-4 text-red-500 text-center">
        {{ auth.error }}
      </p>

      <p class="text-center mt-4">
        Already have an account?
        <router-link to="/login" class="text-indigo-600">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useAuthStore } from "../stores/auth";
import { useRouter } from "vue-router";

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const auth = useAuthStore();
    const router = useRouter();

    const handleRegister = async () => {
      const res = await auth.register({
        name: name.value,
        email: email.value,
        password: password.value,
      });

      if (res) router.push("/login");
    };

    return { name, email, password, auth, handleRegister };
  },
};
</script>
