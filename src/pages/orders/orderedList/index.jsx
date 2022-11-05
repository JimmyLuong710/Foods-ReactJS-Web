import { useState } from "react";
import "./index.scss";
import castPrice from "../../../utils/castPrice";
import moment from "moment";

const calculateTotalCost = (products) => {
  let total = products.reduce((current, item) => {
    return current + item.quantityOrdered * item.product.price;
  }, 0);

  return total;
};

const OrderTable = ({ orders }) => {
  return (
    <div className="container orders">
      <h3 className="text-uppercase text-center mb-5"> lịch sử đặt món</h3>
      {orders.map((order, index) => {
        return (
          <div className="row order-row" key={index}>
            <div className="order-status">
              <span className="order-date">Đặt vào lúc: {moment(order.orderDate).format('DD-MM-YYYY HH:MM')}</span>
              <p>{order.status}</p>
            </div>

            {order.products.map((item, index) => {
              return (
                <div className="order-content" key={index}>
                  <div className="product-img">
                    <img
                      src={
                        process.env.REACT_APP_BACK_END_URL +
                        "/" +
                        item.product?.image
                      }
                      alt="product"
                    />
                  </div>
                  <div className="product-detail">
                    <h6>{item.product?.productName}</h6>
                    <p>x {item.quantityOrdered}</p>
                    <span className="price">
                      {castPrice(item.product?.price)}đ
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="total-cost">Tổng tiền: <span>{castPrice(calculateTotalCost(order.products))}đ</span></div>
            <div className="order-action">
              <button>Liên hệ người bán</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderTable;
