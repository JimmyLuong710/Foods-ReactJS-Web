import "./index.scss";
import ProductRow from "../productRow";
import { BsCashCoin } from "react-icons/bs";
import { useState } from "react";
import castPrice from '../../../../utils/castPrice'

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const ProductTable = ({ cart, getCart, notify }) => {
  console.log("table");
  let navigate = useNavigate();
  const [totalProductInCart, setTotalProductInCart] = useState();
  const [totalPriceInCart, setTotalPriceInCart] = useState();

  const handleRedirectToPayment = () => {
    navigate(`/order/cart/${cart._id}`);
  };

  useEffect(() => {
    let totalPrice = cart?.products?.reduce(
      (total, item) => total + item.quantityAdded * item.product?.price,
      0
    );
    let totalProduct = cart?.products?.reduce(
      (total, item) => total + item.quantityAdded,
      0
    );

    setTotalPriceInCart(totalPrice);
    setTotalProductInCart(totalProduct);
  }, [cart]);

  return (
    <div>
      <div className="container cart mt-5 mb-5">
        <h2 className="text-uppercase text-center mb-5"> giỏ hàng của bạn</h2>
        <div className="row title">
          <div className="col-4">
            <b>Sản phẩm</b>
          </div>
          <div className="col-2">
            <b>Đơn giá</b>
          </div>
          <div className="col-2">
            <b>Số lượng</b>
          </div>
          <div className="col-2">
            <b>Số tiền</b>
          </div>
          <div className="col-2">
            <b>Thao tác </b>
          </div>
        </div>

        {cart?.products?.map((item, index) => {
          let product = {
            ...item.product,
            quantityAdded: item.quantityAdded,
          };
          return (
            <ProductRow
              key={index}
              product={product}
              getCart={getCart}
              setTotalPriceInCart={setTotalPriceInCart}
              setTotalProductInCart={setTotalProductInCart}
              notify={notify}
            />
          );
        })}

        <div className="row">
          <div className="buy-in-cart">
            <span>
              Tổng thanh toán ({totalProductInCart} sản phẩm):{" "}
              <i className="text-danger">{castPrice(totalPriceInCart)}đ</i>{" "}
            </span>
            <button onClick={handleRedirectToPayment}>
              <span style={{ color: "white", textDecoration: "none" }}>
                <BsCashCoin /> Mua hàng
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
