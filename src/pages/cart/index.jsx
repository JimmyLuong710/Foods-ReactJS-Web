import ProductTable from "./components/productTable";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState, useCallback, useEffect } from "react";
import cartAPI from "../../api/cart.api";

const Cart = () => {
  console.log('cart')
  const [cart, setCart] = useState();

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
      <ProductTable cart={cart} getCart={getCart} />
      <Footer />
    </>
  );
};

export default Cart;
