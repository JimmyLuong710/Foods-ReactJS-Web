import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import "./cart.scss";
import { BsCashCoin } from "react-icons/bs";
import { Link } from "react-router-dom";
import createAxiosJWT from "../../axiosJWT";
import { loginSuccess } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInCart, updateProductInCart, deleteProductInCart } from "../../redux/apiRequests";

const Cart = () => {
  let loginUser = useSelector((state) => state.auth.login.user);
  const [productsInCart, setProductsInCart] = useState();
  let dispatch = useDispatch();
  const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess);

  const changeQuantity = (change, index) => {
    if (change === 1) {
      let data = productsInCart
      data[index].quantityAdded = data[index].quantityAdded + 1
      console.log(data[index])
      setProductsInCart(data)
    }
    if (change === -1 ) {
      let data = productsInCart
      if(data[index].quantityAdded > 1) {
      data[index].quantityAdded = data[index].quantityAdded - 1
      setProductsInCart(data)
      }
    }
  };
 
  const handleDeleteProduct = (userId, productId, index) => {
    let addition = {
      userId: userId,
      productId: productId
    }
    let data = productsInCart
    data.splice(index, 1)
    console.log(data)
    setProductsInCart(data)
   deleteProductInCart(loginUser.accessToken, addition, axiosJWT)
    
  }
  useEffect(async () => {
    let data = await getProductsInCart(loginUser.accessToken, loginUser.id, axiosJWT);
    setProductsInCart(data);
  }, []);
  return (
    <div>
      <Header />
      <div className="container cart mt-5 mb-5">
        <h2 className="text-uppercase text-center mb-5"> giỏ hàng của bạn</h2>
        <div className="row title">
          <div className="col-4"><b>Sản phẩm</b></div>
          <div className="col-2"><b>Đơn giá</b></div>
          <div className="col-2"><b>Số lượng</b></div>
          <div className="col-2"><b>Số tiền</b></div>
          <div className="col-2"><b>Thao tác  </b></div>
        </div>

        {productsInCart?.map((item, index) => (
          <div className="row content">
            <div className="col-4">
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
              <p className="price"><i>{item.Product.price}vnđ</i></p>
            </div>
            <div className="col-2">
              <p className="quantity">
                <button onClick={(e) => changeQuantity(-1, index)}>-</button>{" "}
                <i> &emsp; {item.quantityAdded} &emsp;</i>
                <button onClick={(e) => changeQuantity(1, index)}>+</button>
              </p>
            </div>
            <div className="col-2">
              <p className="total-price"><i>{item.quantityAdded * item.Product.price}vnđ</i></p>
            </div>
            <div className="col-2">
              <p className="action" onClick={(e) => handleDeleteProduct(item.userId, item.productId, index)}>Xóa</p>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="buy-in-cart">
            <span>
              Tổng thanh toán (10 sản phẩm):{" "}
              <i className="text-danger">100.000vnđ</i>{" "}
            </span>
            <button>
              <Link
                to="/payment"
                style={{ color: "white", textDecoration: "none" }}
              >
                <BsCashCoin /> Mua hàng
              </Link>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
