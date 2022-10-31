// import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer";
// import { useEffect, useState } from "react";
// import "./cart.scss";
// import { BsCashCoin } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";
// import { useCallback } from "react";
// import cartAPI from "../../../../api/cart.api";
// import ProductRow from "../productRow/productRow";

// const Cart = () => {
//   const [cart, setCart] = useState();
//   const [totalProductInCart, setTotalProductInCart] = useState();
//   const [totalPriceInCart, setTotalPriceInCart] = useState();
//   let navigate = useNavigate();

//   const handleRedirectToPayment = () => {
//     navigate(`/payment/cart/${cart._id}`);
//   };

//   const getCart = useCallback(async () => {
//     let cart = await cartAPI.getCart();
//     setCart(cart);
    
//     let totalPrice = cart.products?.reduce(
//       (total, item) => total + item.quantityAdded * item.product.price,
//       0
//     );
//     let totalProduct = cart?.reduce(
//       (total, item) => total + item.quantityAdded,
//       0
//     );

//     setTotalPriceInCart(totalPrice);
//     setTotalProductInCart(totalProduct);
//   }, []);

//   useEffect(() => {
//     getCart();
//   }, [getCart]);

//   return (
//     <div>
//       <Header />
//       <div className="container cart mt-5 mb-5">
//         <h2 className="text-uppercase text-center mb-5"> giỏ hàng của bạn</h2>
//         <div className="row title">
//           <div className="col-4">
//             <b>Sản phẩm</b>
//           </div>
//           <div className="col-2">
//             <b>Đơn giá</b>
//           </div>
//           <div className="col-2">
//             <b>Số lượng</b>
//           </div>
//           <div className="col-2">
//             <b>Số tiền</b>
//           </div>
//           <div className="col-2">
//             <b>Thao tác </b>
//           </div>
//         </div>

//         {cart.products?.map((item, index) => {
//           let product = {
//             ...item.product,
//             quantityAdded: item.quantityAdded,
//           };

//           return <ProductRow product={product} />;
//         })}
//         <div className="row">
//           <div className="buy-in-cart">
//             <span>
//               Tổng thanh toán ({totalProductInCart} sản phẩm):{" "}
//               <i className="text-danger">{totalPriceInCart}vnđ</i>{" "}
//             </span>
//             <button onClick={handleRedirectToPayment}>
//               <span style={{ color: "white", textDecoration: "none" }}>
//                 <BsCashCoin /> Mua hàng
//               </span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Cart;
