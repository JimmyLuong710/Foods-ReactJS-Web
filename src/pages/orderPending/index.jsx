import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import OrderList from "./components/orderedList";
import orderAPI from "../../api/order.api";

const OrdersPending = ({ notify }) => {
  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    let res = await orderAPI.getOrderPending();
    setOrders([...res.docs]);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Header />
      <OrderList orders={orders} getOrders={getOrders} notify={notify} />
      <Footer />
    </div>
  );
};

export default OrdersPending;
