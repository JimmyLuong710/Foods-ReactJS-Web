import castPrice from "../../../../utils/castPrice";
import "./index.scss";

const OrderDetail = ({ products }) => {
  return (
    <>
      <div>
        <h6 className="text-uppercase">Chi tiết thanh toán</h6>
      </div>
      <div className="row order-detail-title text-center mt-4 mb-2">
          <div className="col-6">
            <b>Sản phẩm</b>
          </div>
          <div className="col-2">
            <b>Đơn giá</b>
          </div>
          <div className="col-2">
            <b>Số lượng</b>
          </div>
          <div className="col-2">
            <b>Tổng tiền</b>
          </div>
        </div>
      {products?.map((item, index) => (
        <div
          key={index}
          className="row order-detail-row text-center mt-4 mb-2"
        >
          <div className="col-6">
            <div className="row">
              <div className="col-6">
                <div className="card-img-top">
                  <img
                    src={
                      process.env.REACT_APP_BACK_END_URL +
                      "/" +
                      item.product.image
                    }
                    alt="product"
                  />
                </div>
              </div>
              <div className="col-6">
                <h5>{item.product.productName}</h5>
              </div>
            </div>
          </div>
          <div className="col-2">
            <p className="price">
              <i>{castPrice(item.product.price)}đ</i>
            </p>
          </div>
          <div className="col-2">
            <p className="quantity">
              <i> {item.quantityAdded}</i>
            </p>
          </div>
          <div className="col-2">
            <p className="total-price">
              <i>{castPrice(item.quantityAdded * item.product.price)}đ</i>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderDetail;
