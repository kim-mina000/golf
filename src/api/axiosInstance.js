import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://192.168.10.117:8066/", // Swagger API 기본 URL
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosInstance;
