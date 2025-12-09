import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
    token: null,
  }),
  actions: {
    async login({ email, password }) {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email, password }
      );
      this.user = data.user;
      this.token = data.token;
    },
    async register({ name, email, password }) {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/register",
        { name, email, password }
      );
      this.user = data.user;
      this.token = data.token;
    },
    logout() {
      this.user = null;
      this.token = null;
    },
  },
});
