import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./productDetails.scss";
import { useState, useEffect } from "react";
import { BsCashCoin } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { getOneProduct } from "../../redux/apiRequests";
import { addToCart } from "../../redux/apiRequests";
import createAxiosJWT from "../../axiosJWT";
import { loginSuccess } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  let red = "red";
  let loginUser = useSelector(state => state.auth.login.user)
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  let [data, setData] = useState({});
  let dispatch = useDispatch()
  const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess)
  useEffect(async () => {
    let _data = await getOneProduct(id);
    setData(_data);
  }, []);
  const changeQuantity = (change) => {
    if (change === 1) setQuantity((prev) => prev + 1);
    if (change === -1 && quantity > 1) setQuantity((prev) => prev - 1);
  };
  const handleAddToCart = () => {
    let addition = {
      userId: loginUser?.id,
      productId: id,
      quantityAdded: quantity
    }
    addToCart(loginUser.accessToken, addition, axiosJWT)
  }
  return (
    <div className="container product-details">
      <Header />
      <div className="card">
        <div className="wrapper row">
          <div className="preview col-md-7">
            <div className="thumbnail">
              <img src={`http://localhost:8000/${data?.image}`} />
            </div>
          </div>
          <div className="details col-md-5">
            <div className="description">
              <h3> {data?.productName} </h3>
              <p>
                {" "}
                <strong>mô tả: </strong> <i>{data?.description}</i>{" "}
              </p>
              <p>
                <strong>số lượng đã bán:</strong> <i>10</i>
              </p>
              <h2>{data?.price} vnđ</h2>
              <p
                style={{
                  color: `${red}`,
                }}
              >
                {" "}
                <i>{data?.status}</i>
              </p>
              <p>
                <strong>số lượng: &emsp; </strong>{" "}
                <button onClick={(e) => changeQuantity(-1)}>-</button>{" "}
                <i> &emsp; {quantity} &emsp;</i>
                <button onClick={(e) => changeQuantity(1)}>+</button>
              </p>
              <p>
                {" "}
                <strong>Tổng tiền:</strong>{" "}
                <span
                  style={{ color: "red", fontSize: "30px", marginLeft: "20px" }}
                >
                  {quantity * data?.price} vnđ
                </span>
              </p>
            </div>
            <div className="action">
              <button type="button" className="btn btn-primary">
                <Link to="/payment">
                  <BsCashCoin /> &nbsp; Mua ngay
                </Link>
              </button>
              <button type="button" className="btn btn-primary" 
              onClick={handleAddToCart}
              >
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
