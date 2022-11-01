import "./index.scss";
import { useNavigate } from "react-router-dom";
import cartAPI from "../../api/cart.api";
import { useSelector } from "react-redux";
import castPrice from '../../utils/castPrice'

const ProductCard = ({ product, notify }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleAddToCart = async (e) => {
    e.stopPropagation();
    if (!auth.isLoggedIn) {
      navigate("/auth/sign-in");
      return;
    }

    let productId = product._id;
    let quantityAdded = 1;
    try {
      await cartAPI.addToCart(productId, quantityAdded);
      notify("Đã thêm vào giỏ!");
    } catch (err) {
      console.log(err);
      notify(err.response?.data, "ERROR");
    }
  };

  const redirectToProductDetail = () => {
    navigate(`/products/${product._id}`);
  };

  return (
    <div className="card border-primary card-product">
      <div onClick={redirectToProductDetail}>
        <div className="card__img">
          <img
            className="card-img-top"
            src={process.env.REACT_APP_BACK_END_URL + "/" + product?.image}
            alt=""
          />
        </div>
        <div className="card-body">
          <h4 className="card__title">{product?.productName}</h4>
          <p className="card__description">
            giá: <span>{castPrice(product?.price)}đ</span>
          </p>
          <p className="card__description">
            đã bán: <span>{product?.quantitySold}</span>
          </p>
        </div>
        <div className="add-to-cart" onClick={(e) => handleAddToCart(e)}>
          <button>Thêm vào giỏ</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
