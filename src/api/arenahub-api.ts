import { useAuthStore } from "@/store/auth.store";
import axios from "axios";

const arenaApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 1. Interceptor de Petición (Request)
arenaApi.interceptors.request.use(
  (config) => {
    const { accessToken, tokenType } = useAuthStore.getState();

    if (accessToken) {
      const type = tokenType ? tokenType.trim() : "Bearer";
      config.headers.Authorization = `${type} ${accessToken.trim()}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// 2. Interceptor de Respuesta (Response) - CORREGIDO
arenaApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default arenaApi;
