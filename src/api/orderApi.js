import axios from 'axios';

export const createOrder = (data) => axios.post('/orders', data);
export const getOrders = () => axios.get('/orders'); // admin or user-specific depending backend
export const getOrderById = (id) => axios.get(`/orders/${id}`);