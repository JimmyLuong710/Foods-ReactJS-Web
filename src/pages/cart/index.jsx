import ProductTable from "./components/productTable";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState, useCallback, useEffect } from "react";
import cartAPI from "../../api/cart.api";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  console.log('cart')
  const [cart, setCart] = useState();

  const notify = (msg, type = "SUCCESS") => {
    toast.success(msg, {type: toast.TYPE[type]});
  };

  const getCart = useCallback(async () => {
    let cart = await cartAPI.getCart();
    setCart(cart);
  }, []);

  useEffect(() => {
    getCart();
  }, [getCart]);

  return (
    <>
      <Header />
      <ToastContainer />
      <ProductTable cart={cart} getCart={getCart} notify={notify}/>
      <Footer />
    </>
  );
};

export default Cart;
