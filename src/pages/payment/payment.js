import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./payment.scss";
import { useSelector } from "react-redux";

const Payment = () => {
  let lisTProducts = useSelector(state => state.user.productsInPayMent)
  return (
    <div className="payment">
      <Header />
      <div className="container mt-5 mb-5 px-5">
        <div className="mb-4">
          <h2>Xác nhận đơn hàng và thanh toán</h2>
        </div>
        
        <div className="row">
          <div className="col-md-8">
            <div className="card p-3">
              <div>
                <h6 className="text-uppercase">Chi tiết thanh toán</h6>
              <div className="row title text-center mt-4 mb-2">
                <div className="col-6"><b>Sản phẩm</b></div>
                <div className="col-2"><b>Đơn giá</b></div>
                <div className="col-2"><b>Số lượng</b></div>
                <div className="col-2"><b>Tổng tiền</b></div>
              </div>
              </div>
              {lisTProducts[0]?.map((item, index) => (
                <div className="row content text-center mt-2 mb-2">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">
                        <img
                          className="card-img-top"
                          src={`http://localhost:8000/${item.Product.image}`}
                          alt=""
                        />
                      </div>
                      <div className="col-6">
                        <h5>{item.Product.productName}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <p className="price">
                      <i>{item.Product.price}</i>
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="quantity">
                      <i> {item.quantityAdded}</i>
                    </p>
                  </div>
                  <div className="col-2">
                    <p className="total-price">
                      <i>{item.quantityAdded * item.Product.price}</i>
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-4 mb-4">
                <div className="row mt-3">
                  <h6 className="text-uppercase">thông tin thanh toán</h6>
                  <div className="col-md-6">
                    <div className="inputbox mt-3">
                      <label> Tên khi nhận hàng:</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="inputbox mt-3">
                      <label>Số điện thoại</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                    </div>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-6">
                    <div className="inputbox mt-3">
                      <label>Địa chỉ</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <p className="mt-5">
                      Phương thức thanh toàn: <i>Tiền mặt</i>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <span>
                Tổng thanh toán:{" "}
                <strong>
                  <i>{lisTProducts[2]}vnđ</i>
                </strong>
              </span>
              <button className="btn btn-success">Thanh toán</button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-blue p-3 text-white mb-3">
              <span>Bạn phải trả</span>
              <div className="d-flex flex-row align-items-end mb-3">
                <h1 className="mb-0 yellow">{lisTProducts[2]} vnđ</h1>
              </div>

              <span>
                Tận hưởng tất cả các tính năng và đặc quyền sau khi bạn hoàn tất
                thanh toán
              </span>
              <span className="yellow decoration">
                Know all the features
              </span>

              <div className="hightlight">
                <span>
                  100% Đảm bảo hỗ trợ và giải quyết các khiếu nại từ khách hàng
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
