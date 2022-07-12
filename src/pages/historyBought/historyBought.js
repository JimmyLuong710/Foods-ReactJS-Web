import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import "./historyBought.scss";
import createAxiosJWT from "../../axiosJWT";
import { loginSuccess, loginFailed} from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsInCart,
  updateProductInCart,
  deleteProductInCart,
} from "../../redux/apiRequests";
import { getPoductsInPayMent } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router";
import {
  getProductsInHistory,
  deleteProductInHistory,
} from "../../redux/apiRequests";

const HistoryBought = () => {
  let loginUser = useSelector((state) => state.auth.login.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess, loginFailed);
  const [listProducts, setListProducts] = useState();

  useEffect(async () => {
    if (!loginUser) {
      navigate("/");
    }
    let data = await getProductsInHistory(loginUser?.accessToken, axiosJWT);
    let _data = [];
    for (let i = 0; i < data?.length; i++) {
      let orderId = data[i]["Order.id"];
      let sub = [];
      sub.push(data[i]);
      while (i < data?.length - 1 && orderId === data[i + 1]["Order.id"]) {
        i = i + 1;
        sub.push(data[i]);
      }
      _data.push(sub);
    }
    setListProducts(_data);
  }, []);
  return (
    <div>
      <Header />
      <div className="container history mt-5 mb-5">
        <h2 className="text-uppercase text-center mb-5"> lịch sử mua hàng</h2>
        <div className="row title">
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

        {listProducts?.map((it, index) => (
          <div className="row content" key={index}>
            <div className="col-1 border border-primary">
              <p className="action">{index + 1}</p>
            </div>
            <div className="col-8">
              {it.map((item, ind) => (
                <div key={ind} className="row">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 border border-primary">
                        <img
                          className="history-img-top"
                          src={`http://localhost:8000/${item["Product.image"]}`}
                          alt=""
                        />
                      </div>
                      <div className="col-6 border border-primary">
                        <h5>{item["Product.productName"]}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 border border-primary">
                    <p className="price">
                      <i>{item["Product.price"]}</i>
                    </p>
                  </div>
                  <div className="col-2 border border-primary">
                    <p className="quantity">
                      <i> &emsp; {item.quantityOrdered} &emsp;</i>
                    </p>
                  </div>
                  <div className="col-2 border border-primary">
                    <p className="total-price">
                      <i>{item.priceEach}</i>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-2 border border-primary">
                <p className="order-date">{it[0]["Order.OrderDate"]}</p>
              </div>
              <div className="col-1 border border-primary">
                <p className="status">
                  <i>{it[0]["Order.status"]}</i>
                </p>
              </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HistoryBought;
