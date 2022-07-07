import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./payment.scss";

const Payment = () => {
  return (
    <div className="payment">
      <Header />
      <div class="container mt-5 mb-5 px-5">
        <div class="mb-4">
          <h2>Xác nhận đơn hàng và thanh toán</h2>
        </div>

        <div class="row">
          <div class="col-md-8">
            <div class="card p-3">
              <h6 class="text-uppercase">Chi tiết thanh toán</h6>
              <div class="mt-4 mb-4">
                <div class="row mt-3">
                  <h6 class="text-uppercase">thông tin thanh toán</h6>
                  <div class="col-md-6">
                    <div class="inputbox mt-3 mr-2">
                      <label> Tên khi nhận hàng:</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required="required"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="inputbox mt-3 mr-2">
                      <label>Số điện thoại</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required="required"
                      />
                    </div>
                  </div>
                </div>

                <div class="row mt-2">
                  <div class="col-md-6">
                    <div class="inputbox mt-3 mr-2">
                      <label>Địa chỉ</label>
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        required="required"
                      />
                    </div>
                  </div>

                  <div class="col-md-6">
                    <p className="mt-5">Phương thức thanh toàn: <i>Tiền mặt</i></p>
                  </div>
                </div>
              </div>
            </div>

            <div class="">
                <span>Tổng thanh toán: <strong><i>100.000vcđ</i></strong></span>
              <button class="btn btn-success">Thanh toán</button>
            </div>
          </div>

          <div class="col-md-4">
            <div class="card card-blue p-3 text-white mb-3">
              <span>Bạn phải trả</span>
              <div class="d-flex flex-row align-items-end mb-3">
                <h1 class="mb-0 yellow">$549</h1> <span>.99</span>
              </div>

              <span>
                Tận hưởng tất cả các tính năng và đặc quyền sau khi bạn hoàn tất
                thanh toán
              </span>
              <a href="#" class="yellow decoration">
                Know all the features
              </a>

              <div class="hightlight">
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
