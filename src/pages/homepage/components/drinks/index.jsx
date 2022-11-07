import ProductCard from "../../../../components/productCard";
import { useEffect, useState } from "react";
import productAPI from "../../../../api/product.api";

const Drinks = ({ notify }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let res = await productAPI.getProducts({ type: "drink", limit: 15 });
      setProducts([...res.docs]);
    };

    getProducts();
  }, []);
  return (
    <div className="container drinks-product mt-3 text-center">
      <h2 className="text-center">TẤT CẢ ĐỒ UỐNG TẠI NHÀ HÀNG</h2>
      <ul>
        {products?.map((product, index) => (
          <li
            key={index}
            style={{
              display: "inline-block",
              width: "250px",
              margin: "20px 6px",
            }}
          >
            <ProductCard product={product} notify={notify} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drinks;
