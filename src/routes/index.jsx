import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../pages/homepage/App";
import SignUp from "../pages/signUp";
import ProductDetails from "../pages/productDetails";
import Cart from "../pages/cart";
import Accounts from "../pages/accounts";
import Products from "../pages/products";
import Payment from "../pages/payment";
import Account from "../pages/account";
import Orders from "../pages/orders";
import OrdersPending from "../pages/orderPending";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Search from "../pages/search/search";

import Login from "../pages/login";
import { useSelector } from "react-redux";

const Routers = () => {
  let auth = useSelector((state) => state.auth);

  const notify = (msg, type = "SUCCESS") => {
    toast.success(msg, { type: toast.TYPE[type] });
  };

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/auth/sign-in" element={<Login />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/" element={<App />} />

        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route
          path="/account/:field"
          element={
            auth.isLoggedIn ? (
              <Account />
            ) : (
              <Navigate replace to={"/auth/sign-in"} />
            )
          }
        />
        <Route
          path="/cart"
          element={
            auth.isLoggedIn ? (
              <Cart />
            ) : (
              <Navigate replace to={"/auth/sign-in"} />
            )
          }
        />
        <Route
          path="/management/accounts"
          element={
            auth.account.role === "admin" ? (
              <Accounts />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        <Route
          path="/management/products"
          element={
            auth.account.role === "admin" ? (
              <Products />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        <Route
          path="/payment/:paymentType"
          element={
            auth.isLoggedIn ? (
              <Payment notify={notify} />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        <Route
          path="/orders"
          element={auth.isLoggedIn ? <Orders /> : <Navigate replace to={"/"} />}
        />
        <Route
          path="/management/orders/pending"
          element={
            auth.account.role === "admin" ? (
              <OrdersPending notify={notify} />
            ) : (
              <Navigate replace to={"/"} />
            )
          }
        />
        {/*
        
        <Route path="/search/:key" element={ <Search />} />
        */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
