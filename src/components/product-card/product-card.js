import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './product-card.scss'
import createAxiosJWT from "../../axiosJWT";
import { loginSuccess, loginFailed } from "../../redux/slice/authSlice";
import { addToCart, getQuantitySold } from "../../redux/apiRequests";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const ProductCard = (props) => {
  const [quantitySold, setQuantitySold] = useState(0)
  let loginUser = useSelector(state => state.auth.login.user)
  const dispatch = useDispatch()
  const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess, loginFailed)
  let item = props.item
  const navigate = useNavigate()
  const handleAddToCart = (e) => {
    	e.stopPropagation() 
      if(!loginUser) {
        navigate('/login')
        return
      }
    let addition = {
      userId: loginUser?.id,
      productId: item.id,
      quantityAdded: 1
    }
    addToCart(loginUser?.accessToken, addition, axiosJWT, navigate)
  }

  const redirectToProductDetail = () => {
    navigate(`/product/${item.id}`)
  }

  useEffect(async () => {
    let _quantitySold = await getQuantitySold(item?.id)
    if(_quantitySold[0]) setQuantitySold(_quantitySold[0]?.total)
  })
  return (
    <div className="card border-primary card-product">
      <div onClick={redirectToProductDetail}>
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
            đã bán: <span>{quantitySold}</span>
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
