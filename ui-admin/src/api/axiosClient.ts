// src/api/axiosClient.ts
import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.response.use(
    response => response,
    error => {
        // Handle errors globally here if needed
        return Promise.reject(error);
    }
);

export default axiosClient;
