import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import "./cart.scss";
import { BsCashCoin } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import createAxiosJWT from "../../axiosJWT";
import { loginSuccess, loginFailed } from "../../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProductsInCart, updateProductInCart, deleteProductInCart } from "../../redux/apiRequests";
import { getPoductsInPayMent } from "../../redux/slice/userSlice";

const Cart = () => {
  let loginUser = useSelector((state) => state.auth.login.user);
  const [productsInCart, setProductsInCart] = useState();
  const [totalIncart, setTotalIncart] = useState(0);
  const [totalPriceInCart, setTotalPriceInCart] = useState();
  let dispatch = useDispatch();
  let navigate = useNavigate()
  const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess, loginFailed);

  const changeQuantity = (change, item, index) => {
    let addition = {
      userId: item.userId,
      productId: item.productId,
      quantityAdded: 0,
    }
    if (change === 1) {
      let pros = [...productsInCart]
      pros[index].quantityAdded = pros[index].quantityAdded + 1
      addition.quantityAdded = pros[index].quantityAdded
      setProductsInCart(pros)
      setTotalIncart(prev => prev + 1)
      setTotalPriceInCart(prev => prev + item.Product.price)
      updateProductInCart(loginUser.accessToken,addition, axiosJWT)
    }
    else if (change === -1 ) {
      let pros = [...productsInCart]
      if(pros[index].quantityAdded > 1) {
        debugger
        pros[index].quantityAdded = pros[index].quantityAdded - 1
        addition.quantityAdded = pros[index].quantityAdded
        setProductsInCart(pros)
        setTotalIncart(prev => prev -1)
        setTotalPriceInCart(prev =>  prev - item.Product.price)
        updateProductInCart(loginUser.accessToken,addition, axiosJWT)
      }
    }
  };
 
  const handleDeleteProduct = (item, index) => {
    let addition = {
      userId: item.userId,
      productId: item.productId
    }
    let pros = [...productsInCart]
    pros.splice(index, 1)
    setProductsInCart(pros)
    setTotalIncart(prev => prev - item.quantityAdded)
    setTotalPriceInCart(prev => prev - item.quantityAdded * item.Product.price) 
   deleteProductInCart(loginUser.accessToken, addition, axiosJWT, navigate)
  }

  const handleRedirectToPayment = () => {
    if(totalIncart === 0) {
      alert('chưa có đơn trong giỏ')
      return
    }
    let _data = [
      productsInCart,
       totalIncart,
      totalPriceInCart,
      'cart'
    ]
    dispatch( getPoductsInPayMent(_data))
    navigate('/payment')
  }
  useEffect(async () => {
    if(!loginUser) {
      navigate('/') 
      return
    }
    let data = await getProductsInCart(loginUser.accessToken, loginUser.id, axiosJWT);
    setProductsInCart(data);
    let _totalPriceInCart = data?.reduce( (total, item) => total + item.quantityAdded * item.Product.price, 0) 
    let _totalIncart = data?.reduce((total, item) => total + item.quantityAdded, 0)
    setTotalIncart(_totalIncart)
    setTotalPriceInCart(_totalPriceInCart)
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
          <div className="row content" key={index}>
            <div className="col-4">
              <div className="row">
                <div className="col-6">
                  <img
                    className="cart-img-top"
                    src={process.env.REACT_APP_BACK_END_URL + '/' + item.Product.image}
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
                <button onClick={(e) => changeQuantity(-1,item , index)}>-</button>{" "}
                <i> &emsp; {item.quantityAdded} &emsp;</i>
                <button onClick={(e) => changeQuantity(1,item, index)}>+</button>
              </p>
            </div>
            <div className="col-2">
              <p className="total-price"><i>{item.quantityAdded * item.Product.price}vnđ</i></p>
            </div>
            <div className="col-2">
              <p className="action" onClick={(e) => handleDeleteProduct(item, index)}>Xóa</p>
            </div>
          </div>
        ))}
        <div className="row">
          <div className="buy-in-cart">
            <span>
              Tổng thanh toán ({totalIncart} sản phẩm):{" "}
              <i className="text-danger">{totalPriceInCart}vnđ</i>{" "}
            </span>
            <button
            onClick={handleRedirectToPayment}
            >
              <span
                style={{ color: "white", textDecoration: "none" }}
              >
                <BsCashCoin /> Mua hàng
              </span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
