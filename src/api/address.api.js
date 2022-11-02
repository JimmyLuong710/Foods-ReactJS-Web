import { AxiosAuth } from "../services/AxiosService";

const addAddress = async (address) => {
  let { data } = await AxiosAuth.post("/deliveryInfos", address);
  return data;
};

const getAddresses = async () => {
  let { data } = await AxiosAuth.get("/deliveryInfos");
  return data;
};

const deleteAddress = async (addressId) => {
  let { data } = await AxiosAuth.delete(`/deliveryInfos/${addressId}`);
  return data;
};

const addressAPI = {
  addAddress,
  getAddresses,
  deleteAddress
};

export default addressAPI;
