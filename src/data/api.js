import axios from "axios";

const API_BASE_URL = "https://api.escuelajs.co/api/v1";

export const getAllProducts = async (offset = 0, limit = 10) => {
  return axios.get(`${API_BASE_URL}/products?offset=${offset}&limit=${limit}`);
};

export const getProductById = async (id) => {
  return axios.get(`${API_BASE_URL}/products/${id}`);
};

export const createProduct = async (product) => {
  return axios.post(`${API_BASE_URL}/products`, product);
};

export const updateProduct = async (id, updatedProduct) => {
  return axios.put(`${API_BASE_URL}/products/${id}`, updatedProduct);
};

export const deleteProduct = async (id) => {
  return axios.delete(`${API_BASE_URL}/products/${id}`);
};
