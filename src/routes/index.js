import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/homepage/App";
import SignUp from "../pages/signUp"
import ProductDetails from "../pages/productDetails"
// import Cart from "../pages/cart"
// import Payment from "../pages/payment/payment";
// import Products from "../pages/products/manageProduct";
// import Accounts from "../pages/accounts"
// import Search from "../pages/search/search";
// import HistoryBought from "../pages/orders/orders";
// import HandleOrdered from "../pages/orderPending/handleOrdered";

import Login from "../pages/login"


const Routers = () => {
//   window.onbeforeunload = function() {
//     localStorage.clear();
//  }
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/auth/sign-in" element={<Login />} />
      <Route path="/auth/sign-up" element={<SignUp />} />
      <Route path="/" element={<App />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
        {/*
        <Route path="/cart" element={ <Cart />} />
        <Route path="/payment" element={ <Payment />} />
        <Route path="/manage-product" element={ <Products />} />
        <Route path="/manage-user" element={ <Accounts />} />
        <Route path="/search/:key" element={ <Search />} />
        <Route path="/history" element={ <HistoryBought />} />
        <Route path="/handle-ordered" element={ <HandleOrdered />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
