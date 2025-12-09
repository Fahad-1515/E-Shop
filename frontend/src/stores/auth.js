import { defineStore } from "pinia";
import api from "../utils/api";
import { ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const user = ref(JSON.parse(localStorage.getItem("user")) || null);
  const token = ref(localStorage.getItem("token") || null);
  const loading = ref(false);
  const error = ref("");

  const register = async (formData) => {
    try {
      loading.value = true;
      error.value = "";
      const res = await api.post("/auth/register", formData);
      return res.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Registration failed";
    } finally {
      loading.value = false;
    }
  };

  const login = async (formData) => {
    try {
      loading.value = true;
      error.value = "";
      const res = await api.post("/auth/login", formData);

      token.value = res.data.token;
      user.value = res.data.user;

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      return true;
    } catch (err) {
      error.value = err.response?.data?.message || "Login failed";
      return false;
    } finally {
      loading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    token.value = null;
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return { user, token, error, loading, register, login, logout };
});
