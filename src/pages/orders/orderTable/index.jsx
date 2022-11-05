import { useState } from "react";

const OrderTable = ({ orders }) => {
  console.log(orders)
  return (
    <div className="container orders mt-5 mb-5">
      <h2 className="text-uppercase text-center mb-5"> lịch sử mua hàng</h2>
      <div className="row title-row">
        <div className="col-1 border border-primary">
          <b>Stt </b>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-6 border border-primary">
              <b>Sản phẩm</b>
            </div>
            <div className="col-2 border border-primary">
              <b>Đơn giá</b>
            </div>
            <div className="col-2 border border-primary">
              <b>Số lượng</b>
            </div>
            <div className="col-2 border border-primary">
              <b>Số tiền</b>
            </div>
          </div>
        </div>
        <div className="col-2 border border-primary">
          <b>Ngày đặt</b>
        </div>
        <div className="col-1 border border-primary">
          <b>Trạng thái</b>
        </div>
      </div>

      {orders?.map((order, index) => (
        <div className="row content" key={index}>
          <div className="col-1 border border-primary">
            <p className="action">{index + 1}</p>
          </div>
          <div className="col-8">
            {order.products.map((item, ind) => (
              <div key={ind} className="row">
                <div className="col-6">
                  <div className="row">
                    <div className="col-6 border border-primary">
                      <img
                        className="history-img-top"
                        src={
                          process.env.REACT_APP_BACK_END_URL +
                          "/" +
                          item?.product?.image
                        }
                        alt="product"
                      />
                    </div>
                    <div className="col-6 border border-primary">
                      <h5>{item?.product?.productName}</h5>
                    </div>
                  </div>
                </div>
                <div className="col-2 border border-primary">
                  <p className="price">
                    <i>{item?.product?.price}</i>
                  </p>
                </div>
                <div className="col-2 border border-primary">
                  <p className="quantity">
                    <i> &emsp; {item?.quantityOrdered} &emsp;</i>
                  </p>
                </div>
                <div className="col-2 border border-primary">
                  <p className="total-price">
                    <i>{10}</i>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-2 border border-primary">
            <p className="order-date">{order.orderDate}</p>
          </div>
          <div className="col-1 border border-primary">
            <p className="status">
              <i>{order.status}</i>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderTable;
