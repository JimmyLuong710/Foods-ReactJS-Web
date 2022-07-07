import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useState } from "react";
import "./cart.scss";
import {BsCashCoin} from "react-icons/bs"
import { Link } from "react-router-dom";

const Cart = () => {
    const [quantity, setQuantity] = useState(0)
    const changeQuantity = (change) => {
		if(change === 1) setQuantity(prev => prev + 1)
		if(change !== 1 && quantity > 0) setQuantity(prev => prev - 1)
	}
  return (
    <div>
      <Header />
      <div className="container cart mt-5 mb-5">
        <h2 className="text-uppercase text-center mb-5"> giỏ hàng của bạn</h2>
        <div className="row title">
          <div className="col-4">Sản phẩm</div>
          <div className="col-2">Đơn giá</div>
          <div className="col-2">Số lượng</div>
          <div className="col-2">Số tiền</div>
          <div className="col-2">Thao tác</div>
        </div>
        <div className="row content">
          <div className="col-4">
            <div className="row">
              <div className="col-6">
                <img
                  className="card-img-top"
                  src={require("../../assets/image/bap-xao.jpg")}
                  alt=""
                />
              </div>
              <div className="col-6">
                <h5>bap xao chinh hang</h5>
              </div>
            </div>
          </div>
          <div className="col-2">
            <p className="price">Đơn giá</p>
          </div>
          <div className="col-2">
            <p className="quantity"><button onClick={(e) => changeQuantity(-1)}>-</button> <i> &emsp; {quantity} &emsp;</i><button onClick={(e) => changeQuantity(1)}>+</button></p>
          </div>
          <div className="col-2">
            <p className="total-price">Số tiền</p>
          </div>
          <div className="col-2">
            <p className="action">Thao tác</p>
          </div>
        </div>
        <div className="row"> 
            <div className="buy-in-cart">
                <span>Tổng thanh toán (10 sản phẩm): <i className="text-danger">100.000vnđ</i> </span>
                <button>
                    <Link to="/payment" style={{color: 'white', textDecoration: 'none'}}>
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
