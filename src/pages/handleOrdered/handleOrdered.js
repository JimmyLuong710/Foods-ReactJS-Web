import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import "./handleOrdered.scss";
import createAxiosJWT from "../../axiosJWT";
import { loginSuccess, loginFailed } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInHandleOrdered, handleOrdered } from "../../redux/apiRequests";
import { getPoductsInPayMent } from "../../redux/slice/userSlice";
import { useNavigate } from "react-router";
import { GiConfirmed, GiCancel } from "react-icons/gi";

const HandleOrdered = () => {
  let loginUser = useSelector((state) => state.auth.login.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess, loginFailed);
  const [listProducts, setListProducts] = useState();

  const handleConfirm = async (orderStatus, item, index) => {
    let data = {
      orderStatus: orderStatus,
      orderId: item['Order.id'],
      userId: item['Order.User.id']
    }
    await handleOrdered(loginUser?.accessToken, data, axiosJWT);
    let list = [...listProducts]
    list.splice(index, 1)
    setListProducts(list)
  };

  useEffect(async () => {
    if (!loginUser || loginUser?.role !== "admin") {
      navigate("/");
    }
    let data = await getProductsInHandleOrdered(
      loginUser?.accessToken,
      axiosJWT
    );
    let _data = [];
    for (let i = 0; i < data.length; i++) {
      let orderId = data[i]["Order.id"];
      let sub = [];
      sub.push(data[i]);
      while (i < data.length - 1 && orderId === data[i + 1]["Order.id"]) {
        i = i + 1;
        sub.push(data[i]);
      }
      _data.push(sub);
    }
    console.log(_data);
    setListProducts(_data);
  }, []);
  return (
    <div>
      <Header />
      <div className="container-fluid history-ordered mt-5 mb-5">
        <h2 className="text-uppercase text-center mb-5">xác nhận đơn đặt</h2>
        <div className="row title text-center">
        <div className="col-1 border border-primary">
            <b>Stt</b>
          </div>
          <div className="col-1 border border-primary">
            <b>Tài khoản</b>
          </div>

          <div className="col-5 ">
            <div className="row">
              <div className="col-6 border border-primary">
                <b>Sản phẩm</b>
              </div>
              <div className="col-3 border border-primary">
                <b>Số lượng</b>
              </div>
              <div className="col-3 border border-primary">
                <b>Tổng tiền</b>
              </div>
            </div>
          </div>

          <div className="col-2 border border-primary">
            <b>Thông tin khách</b>
          </div>
          <div className="col-2 border border-primary">
            <b>Thời gian</b>
          </div>
          <div className="col-1 border border-primary">
            <b>Thao tác </b>
          </div>
        </div>

        {listProducts?.map((item, index) => (
          <div className="row  content text-center mt-3" key={index}>
            <div className="col-1 border border-primary">
              <p>{index + 1}</p>
            </div>
            <div className="col-1 border border-primary">
              <div className="user">
                <p>{item[0]["Order.User.userName"]}</p>
              </div>
            </div>
            <div className="col-5">
              {item?.map((it, idn) => (
                <div className="row ">
                  <div className="col-6">
                    <div className="row">
                      <div className="col-6 border border-primary">
                        <img
                          className="ordered-img-top"
                          src={process.env.REACT_APP_BACK_END_URL + '/' + it["Product.image"]}
                          alt=""
                        />
                      </div>
                      <div className="col-6 border border-primary">
                        <h5>{it["Product.productName"]}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-3 border border-primary">
                    <p className="quantity">
                      <i> {it.quantityOrdered}</i>
                    </p>
                  </div>
                  <div className="col-3 border border-primary">
                    <p className="total-price">
                      <i>{it.priceEach}</i>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-2 border border-primary">
              <div className="customer-info">
                <p>
                  <b>Tên: </b> {item[0]["CustomerInfo.name"]}
                </p>
                <p>
                  <b>Sđt: </b> {item[0]["CustomerInfo.phone"]}
                </p>
                <p>
                  <b>Địa chỉ: </b>
                  {item[0]["CustomerInfo.address"]}
                </p>
              </div>
            </div>
            <div className="col-2 border border-primary">
              <p className="mb-0 align-middle"> {item[0]["Order.OrderDate"]}</p>
            </div>
            <div className="col-1">
              <div className="action">
                <span className="confirm" onClick={(e) => handleConfirm('shipped', item[0], index)}>
                  {" "}
                  <GiConfirmed />
                </span>
                <span className="cancel" onClick={(e) => handleConfirm('canceled', item[0], index)}>
                  {" "}
                  <GiCancel />{" "}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HandleOrdered;
