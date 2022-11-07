import ProductCard from "../../../../components/productCard";
import { useState, useEffect } from "react";
import productAPI from "../../../../api/product.api";

const Foods = ({notify}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let res = await productAPI.getProducts({ type: "food", limit: 15 });
      setProducts([...res.docs]);
    };

    getProducts();
  }, []);
  return (
    <div className="container foods-product mt-3 text-center">
      <h2 className="text-center">TẤT CẢ ĐỒ ĂN TẠI NHÀ HÀNG</h2>
      <ul>
        {products.map((product, index) => (
          <li
            key={index}
            style={{
              display: "inline-block",
              width: "250px",
              margin: "20px 6px",
            }}
          >
            {" "}
            <ProductCard product={product} notify={notify} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Foods;
