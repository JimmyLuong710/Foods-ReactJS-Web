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

export const handleOrder = async (orderId, status) => {
  let { data } = await AxiosAuth.put(`/orders/${orderId}`, {status});
  return data;
};

const orderAPI = {
  addOrder,
  getOrders,
  getOrderPending,
  handleOrder
};

export default orderAPI;
