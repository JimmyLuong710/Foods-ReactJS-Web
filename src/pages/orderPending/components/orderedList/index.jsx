import "./index.scss";
import castPrice from "../../../../utils/castPrice";
import { useState } from "react";
import PopupConfirm from "../../../../components/popupConfirm";
import moment from "moment";
import orderAPI from "../../../../api/order.api";

const calculateTotalCost = (products) => {
  let total = products.reduce((current, item) => {
    return current + item.quantityOrdered * item.product.price;
  }, 0);

  return total;
};

const OrderList = ({ orders, getOrders, notify }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [orderIdPicked, setOrderIdPicked] = useState("");
  const [status, setStatus] = useState("");

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const handleOrderAction = async () => {
    try {
      await orderAPI.handleOrder(orderIdPicked, status);
      getOrders();
      notify("Đã xử lý đơn");
    } catch (err) {
      console.log(err);
      notify(err.response?.data, "ERROR");
    }
  };
  return (
    <div className="container orders">
      <h3 className="text-uppercase text-center mt-5 mb-2">
        {" "}
        các đơn đang chờ xử lý
      </h3>
      {orders.map((order, index) => {
        return (
          <div className="row order-row" key={index}>
            <div className="order-status">
              <span className="order-date">
                {index + 1}. &nbsp; Đặt vào lúc:{" "}
                {moment(order.orderDate).format("DD-MM-YYYY HH:MM")}
              </span>
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

            <div className="row row-bottom">
              <div className="row-bottom__left col-6">
                <h5>{order.deliveryInfo?.name}</h5>
                <p>{order.deliveryInfo?.phone}</p>
                <p>{order.deliveryInfo?.address}</p>
              </div>
              <div className="row-bottom__right col-6">
                <div className="total-cost">
                  Tổng tiền:{" "}
                  <span>{castPrice(calculateTotalCost(order.products))}đ</span>
                </div>
                <div className="order-action">
                  <button
                    onClick={(e) => {
                      setOrderIdPicked(order._id);
                      setStatus("CANCELLED");
                      openPopup();
                    }}
                  >
                    Hủy
                  </button>
                  <button
                    onClick={(e) => {
                      setOrderIdPicked(order._id);
                      setStatus("CONFIRMED");
                      openPopup();
                    }}
                  >
                    Xác nhận
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {isPopupOpen && (
        <PopupConfirm
          message={
            status === "CANCELLED"
              ? "Bạn có chắc muốn hủy đơn này không?"
              : "Bạn có chắc muốn xác nhận đơn này không?"
          }
          closePopup={closePopup}
          handleAction={handleOrderAction}
        />
      )}
    </div>
  );
};

export default OrderList;
