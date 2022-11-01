import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "../pages/homepage/App";
import SignUp from "../pages/signUp";
import ProductDetails from "../pages/productDetails";
import Cart from "../pages/cart";
import Accounts from "../pages/accounts";
import Products from "../pages/products";

// import Search from "../pages/search/search";
// import HistoryBought from "../pages/orders/orders";
// import HandleOrdered from "../pages/orderPending/handleOrdered";

import Login from "../pages/login";
import { useSelector } from "react-redux";

const Routers = () => {
  let auth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/sign-in" element={<Login />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="/" element={<App />} />
        <Route path="/products/:productId" element={<ProductDetails />} />

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

        {/*
        <Route path="/payment" element={ <Payment />} />
       
       
        <Route path="/search/:key" element={ <Search />} />
        <Route path="/history" element={ <HistoryBought />} />
        <Route path="/handle-ordered" element={ <HandleOrdered />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
