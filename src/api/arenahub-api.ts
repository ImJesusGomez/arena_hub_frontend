import { useAuthStore } from "@/store/auth.store";
import axios from "axios";

const arenaApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

arenaApi.interceptors.request.use(
  (config) => {
    const { accessToken, tokenType } = useAuthStore.getState();

    if (accessToken) {
      config.headers.Authorization = `${tokenType} ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

arenaApi.interceptors.response.use(
  (config) => {
    const { accessToken, tokenType } = useAuthStore.getState();

    if (accessToken) {
      config.headers.Authorization = `${tokenType} ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export default arenaApi;
