import "./index.scss";
import cartAPI from "../../../../api/cart.api";
import { useState } from "react";

const ProductRow = ({ product, getCart, setTotalProductInCart, setTotalPriceInCart }) => {
  console.log('row')
  const [quantityAdded, setQuantityAdded] = useState(product.quantityAdded);

  const changeQuantityAdded = async (amount) => {
    try {
      if (quantityAdded + amount < 1) return;

      cartAPI.updateProductInCart(product._id, {
        quantityAdded: quantityAdded + amount,
      });
      setQuantityAdded((prev) => prev + amount);
      setTotalProductInCart(prev => prev + amount)
      setTotalPriceInCart(prev => prev + amount * product.price)
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteProductInCart = async () => {
    try {
      await cartAPI.deleteProductInCart(product._id);
      getCart();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="row content">
      <div className="col-4">
        <div className="row">
          <div className="col-6">
            <img
              className="cart-img-top"
              src={process.env.REACT_APP_BACK_END_URL + "/" + product?.image}
              alt=""
            />
          </div>
          <div className="col-6">
            <h5>{product?.productName}</h5>
          </div>
        </div>
      </div>
      <div className="col-2">
        <p className="price">
          <i>{product?.price}vnđ</i>
        </p>
      </div>
      <div className="col-2">
        <p className="quantity">
          <button onClick={(e) => changeQuantityAdded(-1)}>-</button>{" "}
          <i> &emsp; {quantityAdded} &emsp;</i>
          <button onClick={(e) => changeQuantityAdded(1)}>+</button>
        </p>
      </div>
      <div className="col-2">
        <p className="total-price">
          <i>{quantityAdded * product?.price}vnđ</i>
        </p>
      </div>
      <div className="col-2">
        <p className="action" onClick={(e) => handleDeleteProductInCart()}>
          Xóa
        </p>
      </div>
    </div>
  );
};

export default ProductRow;
