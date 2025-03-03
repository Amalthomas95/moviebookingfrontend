import axios, { AxiosInstance } from 'axios';

const API_BASE_URL = 'http://localhost:4000';

const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL
});

export default api;
