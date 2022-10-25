import { AxiosAuth } from "../services/AxiosService";

export const addOrder = async (order, typeOrder) => {
  let { data } = await AxiosAuth.post(`/orders`, order);

  // delete current cart if order from cart success
  if (typeOrder === "cart") {
    await AxiosAuth.delete(`/cart`);
  }

  return data;
};

export const getOrders = async (params) => {
  let { data } = await AxiosAuth.get("/orders", { params: params });
  return data;
};

export const getOrderPending = async (params) => {
    let { data } = await AxiosAuth.get("/orders/pending", { params: params });
    return data;
};

export const handleOrder = async (orderId) => {
  let { data } = await AxiosAuth.put(`/orders/${orderId}`);
  return data;
};

const orderAPI = {
  addOrder,
  getOrders,
  getOrderPending,
  handleOrder
};

export default orderAPI;
