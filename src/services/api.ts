import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

/**
 * Backend Base URL
 * Uses Render backend in production
 */
const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://127.0.0.1:8000";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

/**
 * Automatically attach JWT token
 */
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  }
);
