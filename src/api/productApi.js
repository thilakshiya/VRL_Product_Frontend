import axios from "axios"

export const getProducts = (params = {}) => axios.get('/products', { params });
export const getProductById = (id) => axios.get(`/products/${id}`);
export const createProduct = (data) => axios.post('/products', data); // admin
export const updateProduct = (id, data) => axios.put(`/products/${id}`, data); // admin
export const deleteProduct = (id) => axios.delete(`/products/${id}`); 
