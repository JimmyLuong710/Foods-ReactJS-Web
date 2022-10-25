import { Axios, AxiosAuth } from "../services/AxiosService";

const getProducts = async (params) => {
  let { data } = await Axios.get("/products", { params: params });
  return data;
};

const getProduct = async (productId) => {
  let { data } = await Axios.get(`/products/${productId}`);
  return data;
};

const deleteProduct = async (productId) => {
  let { data } = await Axios.delete(`/products/${productId}`);
  return data;
};

const updateProduct = async (product, productId) => {
  let { data } = await AxiosAuth.put(`/products/${productId}`, product);
  return data;
};

const addProduct = async (product) => {
  let { data } = await Axios.post("/products", product);
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
