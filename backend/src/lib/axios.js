import axios from 'axios';


const BASE_URL = import.meta.env.Mode === "development" ? "htto://localhost:5001/api" : "/api";

export const axiosInstance = axios.create({
    baseUrl = BASE_URL,
    withCredentials: true,
})