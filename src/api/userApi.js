import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://vrl-product-backend-stru.onrender.com'
});

export const registerUser = (data) => API.post('/api/users/register', data);
export const loginUser = (data) => API.post('/api/users/login', data);
export const sendResetOTP = (data) => API.post('/api/password/send-otp', data);
export const resetPassword = (data) => API.post('/api/password/reset', data);
export const getUserProfile = (data) => API.get('/api/users/profile', data);
