// import "./productRow.scss";
// import cartAPI from "../../../../api/cart.api";
// import { useState } from "react";

// const ProductRow = ({ product }) => {
//   const changeQuantity = (change, item, index) => {
//     let addition = {
//       productId: item.productId,
//       quantityAdded: 0,
//     };
//     if (change === 1) {
//       cartAPI.updateProductInCart();
//     } else if (change === -1) {
//     }
//   };

//   const handleDeleteProductInCart = () => {};
//   return (
//     <div className="row content">
//       <div className="col-4">
//         <div className="row">
//           <div className="col-6">
//             <img
//               className="cart-img-top"
//               src={process.env.REACT_APP_BACK_END_URL + "/" + product.image}
//               alt=""
//             />
//           </div>
//           <div className="col-6">
//             <h5>{product.productName}</h5>
//           </div>
//         </div>
//       </div>
//       <div className="col-2">
//         <p className="price">
//           <i>{product.price}vnđ</i>
//         </p>
//       </div>
//       <div className="col-2">
//         <p className="quantity">
//           <button onClick={(e) => changeQuantity(-1)}>-</button>{" "}
//           <i> &emsp; {product.quantityAdded} &emsp;</i>
//           <button onClick={(e) => changeQuantity(1)}>+</button>
//         </p>
//       </div>
//       <div className="col-2">
//         <p className="total-price">
//           <i>{product.quantityAdded * product.price}vnđ</i>
//         </p>
//       </div>
//       <div className="col-2">
//         <p className="action" onClick={(e) => handleDeleteProductInCart()}>
//           Xóa
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductRow;
