import axios from "axios";

const backendURL = import.meta.env.VITE_APP_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: backendURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include Authorization headers

// This ensures that every request includes an Access Token. You do not have to manually retrieve it in other components

/* axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // Retrieve token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}); */

export default axiosInstance;
