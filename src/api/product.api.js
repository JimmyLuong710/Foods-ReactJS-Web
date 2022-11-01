import { Axios, AxiosAuth } from "../services/AxiosService";

// use when send formData
const config = {     
  headers: { 'content-type': 'multipart/form-data' }
}

const getProducts = async (params) => {
  let { data } = await Axios.get("/products", { params: params });
  return data;
};

const getProduct = async (productId) => {
  let { data } = await Axios.get(`/products/${productId}`);
  return data;
};

const deleteProduct = async (productId) => {
  let { data } = await AxiosAuth.delete(`/products/${productId}`);
  return data;
};

const updateProduct = async (formData, productId) => {
  let { data } = await AxiosAuth.put(`/products/${productId}`, formData, config);
  return data;
};

const addProduct = async (formData) => {
  let { data } = await AxiosAuth.post("/products", formData, config);
  return data;
};

const productAPI = {
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  addProduct
};

export default productAPI;
