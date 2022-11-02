import Header from "../../components/header";
import Footer from "../../components/footer";
import "./index.scss";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PaymentCard from "./paymentCard";
import OrderDetail from "./orderDetail";
import PaymentInfo from "./paymentInfo";
import castPrice from "../../utils/castPrice";
import { useSearchParams, useParams } from "react-router-dom";
import cartAPI from "../../api/cart.api";
import productAPI from "../../api/product.api";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const { paymentType } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const notify = (msg, type = "SUCCESS") => {
    toast.success(msg, { type: toast.TYPE[type] });
  };

  const handlePayment = () => {};

  useEffect(() => {
    const getProducts = async () => {
      if (paymentType === "cart") {
        let res = await cartAPI.getCart();
        let _totalCost = res.products.reduce((value, item) => {
          return value + item.product.price * item.quantityAdded;
        }, 0);
        setTotalCost(_totalCost);
        setProducts([...res.products]);
      } else if (paymentType === "product") {
        let product = await productAPI.getProduct(
          searchParams.get("productId")
        );
        setTotalCost(product.price * parseInt(searchParams.get("quantity")));
        setProducts([
          { product: product, quantityAdded: searchParams.get("quantity") },
        ]);
      }
    };

    getProducts();
  }, [paymentType, searchParams]);
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="payment">
        <div className="container mt-5 mb-5 px-5">
          <div className="mb-4">
            <h2>Xác nhận đơn hàng và thanh toán</h2>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="card p-3">
                <OrderDetail products={products} notify={notify} />
                <PaymentInfo />
              </div>

              <div className="">
                <span>
                  Tổng thanh toán:{" "}
                  <strong>
                    <i>{castPrice(totalCost)}đ</i>
                  </strong>
                </span>
                <button className="btn btn-success" onClick={handlePayment}>
                  Thanh toán
                </button>
              </div>
            </div>

            <PaymentCard totalCost={totalCost}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
