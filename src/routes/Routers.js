import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../pages/homepage/App";
import SignUp from "../pages/signUp/signUp"
import Login from "../pages/login/login"
import ProductDetails from "../pages/productDetails/productDetails"
import Cart from "../pages/cart/cart"
import Payment from "../pages/payment/payment";
import ManageProduct from "../pages/manageProducts/manageProduct";
import ManageUsers from "../pages/manageUsers/manageUsers"
import TestFile from "../pages/testFile";
import Search from "../pages/search/search";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/payment" element={ <Payment />} />
        <Route path="/manage-product" element={ <ManageProduct />} />
        <Route path="/manage-user" element={ <ManageUsers />} />
        <Route path="/search/:key" element={ <Search />} />
        <Route path="/test" element={ <TestFile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
