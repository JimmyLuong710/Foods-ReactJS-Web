import { Link } from "react-router-dom";
import './product-card.scss'

const ProductCard = () => {
  return (
    <div className="card border-primary card-product">
      <Link to="/product">
        <div className="card__img">
          <img
            className="card-img-top"
            src={require("../../assets/image/bap-xao.jpg")}
            alt=""
          />
        </div>
        <div className="card-body">
          <h4 className="card__title">thịt chó chấm mắm tôm</h4>
          <p className="card__disciption">
            giá: <span>2$</span>
          </p>
          <p className="card__disciption">
            đã bán: <span>tốt</span>
          </p>
        </div>
        <div className="add-to-cart">
          <button>Thêm vào giỏ</button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
