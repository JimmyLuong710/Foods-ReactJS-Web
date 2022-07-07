import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./productDetails.scss";
import { useState } from "react";
import {BsCashCoin} from "react-icons/bs"
import {Link} from "react-router-dom"

const ProductDetails = () => {
	let red = 'red'
	const [quantity, setQuantity] = useState(0)

	const changeQuantity = (change) => {
		if(change === 1) setQuantity(prev => prev + 1)
		if(change !== 1 && quantity > 0) setQuantity(prev => prev - 1)
	}
  return (
    <div className="container product-details">
      <Header />
      <div className="card">
        <div className="wrapper row">
          <div className="preview col-md-7">
            <div className="thumbnail">
              <img src={require("../../assets/image/shipper.jpg")} />
            </div>
          </div>
          <div className="details col-md-5">
            <div className="description">
              <h3> bắp xào chua cay</h3>
              <p>
                {" "}
                <strong>mô tả: </strong> <i>sản phẩm của chúng tôi được làm từ 100% heo nguyên chất 100% không xọa lìn nha</i>{" "}
              </p>
              <p>
                <strong>số lượng đã bán:</strong>  <i>10</i>
              </p>
              <h2>100.000vnđ</h2>
              <p style={{
				color: `${red}`
			  }}> <i>còn bán</i></p>
              <p >
                <strong>số lượng: &emsp; </strong> <button onClick={(e) => changeQuantity(-1)}>-</button> <i> &emsp; {quantity} &emsp;</i><button onClick={(e) => changeQuantity(1)}>+</button>
              </p>
            </div>
            <div className="action">
              <button type="button" class="btn btn-primary">
                <Link to="/payment" >
                <BsCashCoin /> &nbsp; Mua ngay
                </Link>
              </button>
              <button type="button" class="btn btn-primary">
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
