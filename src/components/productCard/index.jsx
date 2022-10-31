import "./index.scss";
import { useNavigate } from "react-router-dom";
import cartAPI from "../../api/cart.api";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    navigate("/auth/sign-in");

    let productId = product._id;
    let quantityAdded = 1;

    cartAPI.addToCart(productId, quantityAdded);
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
            giá: <span>{product?.price} vnđ</span>
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
