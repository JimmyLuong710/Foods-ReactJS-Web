import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./productDetails.scss";
import { useState, useEffect } from "react";
import { BsCashCoin } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOneProduct } from "../../redux/apiRequests";
import { addToCart, getQuantitySold } from "../../redux/apiRequests";
import createAxiosJWT from "../../axiosJWT";
import { loginSuccess, loginFailed } from "../../redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPoductsInPayMent } from "../../redux/slice/userSlice";

const ProductDetails = () => {
  let loginUser = useSelector(state => state.auth.login.user)
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [quantitySold, setQuantitySold] = useState(0);
  let [data, setData] = useState({});
  let dispatch = useDispatch()
  let navigate = useNavigate()
  const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess, loginFailed)


  const changeQuantity = (change) => {
    if (change === 1) setQuantity((prev) => prev + 1);
    if (change === -1 && quantity > 1) setQuantity((prev) => prev - 1);
  };
  const handleAddToCart = () => {
    if(!loginUser) {
      navigate('/login')
      return
    }
    let addition = {
      userId: loginUser?.id,
      productId: id,
      quantityAdded: quantity
    }
    addToCart(loginUser.accessToken, addition, axiosJWT)
  }
  const redirectToPayment = () => {
    if(!loginUser) {
      navigate('/login')
      return
    }
    let _data = [
      [{
      userId: loginUser.id,
      productId: id,
      quantityAdded: quantity,
      Product: data
      }],
       quantity,
       data.price * quantity,
       'product-detail'
    ]
    dispatch(getPoductsInPayMent(_data))
    navigate('/payment')
  }
  useEffect(async () => {
    let _data = await getOneProduct(id);
    let _quantitySold = await getQuantitySold(id)
    if(_quantitySold[0]) setQuantitySold(_quantitySold[0].total)
    setData(_data);
  }, []);
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
                <strong>số lượng đã bán:</strong> <i>{quantitySold}</i>
              </p>
              <h2>{data?.price} vnđ</h2>
              <p
                style={{
                  color: `#20D200`,
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
              <button type="button" className="btn btn-primary" onClick={redirectToPayment}>
                <span >
                  <BsCashCoin /> &nbsp; Mua ngay
                </span>
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
