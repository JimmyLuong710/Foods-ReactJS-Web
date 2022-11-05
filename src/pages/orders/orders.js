import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import "./orders.scss";
import OrderTable from "./orderTable";
import orderAPI from "../../api/order.api";

const Orders = () => {
  console.log('order')
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
      <OrderTable orders={orders} />
      <Footer />
    </div>
  );
};

export default Orders;
