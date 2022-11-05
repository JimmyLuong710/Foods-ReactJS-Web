import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import "./index.scss";
import OrderList from "./orderedList";
import orderAPI from "../../api/order.api";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    let res = await orderAPI.getOrders();
    setOrders([...res.docs]);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Header />
      <OrderList orders={orders} />
      <Footer />
    </div>
  );
};

export default Orders;
