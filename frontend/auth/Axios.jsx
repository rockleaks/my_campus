import axios from "axios";

// Backend API URL from environment variable
const backend_API = import.meta.env.VITE_APP_BACKEND_API;

// Function to get the auth token from localStorage
const authToken = () => {
    return localStorage.getItem('token');
}

// Function to redirect to the login page
const redirect = () => {
    window.location.href = '/login';
}

// Axios instance with base URL
export const privateAxios = axios.create({
    baseURL: backend_API,
});

// Interceptor to add the Authorization header
privateAxios.interceptors.request.use(
    (config) => {
        const token = authToken();
        if (token) {
            config.headers["x-auth-token"] = `${token}`;
        } else {
            redirect(); // Redirect if not authenticated
            return Promise.reject(new Error('Not authenticated')); // Reject the request
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

