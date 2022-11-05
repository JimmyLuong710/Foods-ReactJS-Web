import Header from "../../components/header";
import Footer from "../../components/footer";
import "./index.scss";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import PaymentCard from "./components/paymentCard";
import OrderDetail from "./components/orderDetail";
import PaymentInfo from "./components/paymentInfo";
import castPrice from "../../utils/castPrice";
import { useSearchParams, useParams } from "react-router-dom";
import cartAPI from "../../api/cart.api";
import productAPI from "../../api/product.api";
import orderAPI from "../../api/order.api";
import PopupConfirm from "../../components/popupConfirm";

const Payment = ({ notify }) => {
  const [searchParams] = useSearchParams();
  const { paymentType } = useParams();
  const [addressId, setAddressId] = useState();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handlePayment = async () => {
    let _products = products.map((item, index) => {
      return {
        product: item.product._id,
        quantityOrdered: item.quantityAdded,
      };
    });
    let order = {
      products: _products,
      deliveryInfo: addressId,
      orderDate: new Date(),
    };
    let typeOrder = paymentType === "cart" ? "cart" : "";

    try {
      await orderAPI.addOrder(order, typeOrder);
      notify("Đặt món thành công");
      notify("Vui lòng kiểm tra lịch sử mua để xem tiến trình đơn đặt", "INFO");
      navigate("/");
    } catch (err) {
      console.log(err);
      notify(err.response?.data, "ERROR");
    }
  };

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
      <div className="payment">
        <div className="container mt-5 mb-5 px-5">
          <div className="mb-4">
            <h2>Xác nhận đơn hàng và thanh toán</h2>
          </div>

          <div className="row">
            <div className="col-md-8">
              <div className="card p-3">
                <OrderDetail products={products} />
                <PaymentInfo setAddressId={setAddressId} />
              </div>

              <div className="mt-3">
                <span>
                  Tổng thanh toán:{" "}
                  <strong>
                    <i>{castPrice(totalCost)}đ</i>
                  </strong>
                </span>
                <button
                  className="btn btn-success ms-3 ps-3 pe-3"
                  onClick={openPopup}
                  disabled= {addressId ? false : true}
                >
                  Đặt món
                </button>
              </div>
            </div>
            {isPopupOpen && (
              <PopupConfirm
                message={"Bạn có chắc muốn đặt món không?"}
                closePopup={closePopup}
                handleAction={handlePayment}
              />
            )}
            <PaymentCard totalCost={totalCost} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
