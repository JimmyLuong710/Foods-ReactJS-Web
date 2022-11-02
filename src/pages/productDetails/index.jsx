import Header from "../../components/header";
import Footer from "../../components/footer";
import "./index.scss";
import { useState, useEffect } from "react";
import { BsCashCoin } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import cartAPI from "../../api/cart.api";
import productAPI from "../../api/product.api";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import castPrice from "../../utils/castPrice";


const ProductDetails = () => {
  let auth = useSelector((state) => state.auth);
  const { productId } = useParams();
  const [quantityPicked, setQuantityPicked] = useState(1);
  let [product, setProduct] = useState();
  let navigate = useNavigate();
  const notify = (msg, type) => {
    toast.success(msg, {type: toast.TYPE[type]});
  };

  const changeQuantityPicked = (change) => {
    if (change === 1) setQuantityPicked((prev) => prev + 1);
    if (change === -1 && quantityPicked > 1)
      setQuantityPicked((prev) => prev - 1);
  };

  const handleAddToCart = async () => {
    if (!auth.isLoggedIn) {
      navigate("/auth/sign-in");
      return;
    }

    try {
     await cartAPI.addToCart(productId, quantityPicked);
     notify("Đã thêm vào giỏ!", 'SUCCESS')
    } catch (err) {
      console.log(err);
      notify(err.response?.data, "ERROR")
    }
  };

  const orderProduct = () => {
    if (!auth.isLoggedIn) {
      navigate("/auth/sign-in");
      return;
    }

    navigate(`/payment/product?productId=${productId}&quantity=${quantityPicked}`);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        let _product = await productAPI.getProduct(productId);
        setProduct(_product);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, [productId]);

  return (
    <div className="container product-details">
      <Header />
      <ToastContainer />
      <div className="card">
        <div className="wrapper row">
          <div className="preview col-md-7">
            <div className="thumbnail">
              <img
                src={process.env.REACT_APP_BACK_END_URL + "/" + product?.image}
                alt="product"
              />
            </div>
          </div>
          <div className="details col-md-5">
            <div className="description">
              <h3> {product?.productName} </h3>
              <p>
                {" "}
                <strong>mô tả: </strong> <i>{product?.description}</i>{" "}
              </p>
              <p>
                <strong>số lượng đã bán:</strong> <i>{product?.quantitySold}</i>
              </p>
              <h2>{castPrice(product?.price)}đ</h2>
              <p
                style={{
                  color: `#20D200`,
                }}
              >
                {" "}
                <i>{product?.status}</i>
              </p>
              <p>
                <strong>số lượng: &emsp; </strong>{" "}
                <button onClick={(e) => changeQuantityPicked(-1)}>-</button>{" "}
                <i> &emsp; {quantityPicked} &emsp;</i>
                <button onClick={(e) => changeQuantityPicked(1)}>+</button>
              </p>
              <p>
                {" "}
                <strong>Tổng tiền:</strong>{" "}
                <span
                  style={{ color: "red", fontSize: "30px", marginLeft: "20px" }}
                >
                  {castPrice(quantityPicked * product?.price)}đ
                </span>
              </p>
            </div>
            <div className="action">
              <button
                type="button"
                className="btn btn-primary"
                onClick={orderProduct}
              >
                <span>
                  <BsCashCoin /> &nbsp; Mua ngay
                </span>
              </button>
              <button
                type="button"
                className="btn btn-primary"
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
