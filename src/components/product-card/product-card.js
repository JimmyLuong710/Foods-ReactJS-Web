import { Link } from "react-router-dom";
import './product-card.scss'

const ProductCard = (props) => {
  let item = props.item
  return (
    <div className="card border-primary card-product">
      <Link to={`/product/${item.id}`}>
        <div className="card__img">
          <img
            className="card-img-top"
            src={`http://localhost:8000/${item?.image}`}
            alt=""
          />
        </div>
        <div className="card-body">
          <h4 className="card__title">{item?.productName}</h4>
          <p className="card__disciption">
            giá: <span>{item?.price} vnđ</span>
          </p>
          <p className="card__disciption">
            đã bán: <span>10</span>
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
