import ProductCard from "../../../../components/productCard";
import { useState, useEffect } from "react";
import productAPI from "../../../../api/product.api";

const AllProduct = ({ notify }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let res = await productAPI.getProducts({ limit: 15 });
      setProducts([...res.docs]);
    };

    getProducts();
  }, []);
  return (
    <div className="container all-product mt-3 text-center">
      <h2 className="text-center">TẤT CẢ SẢN PHẨM TẠI NHÀ HÀNG</h2>
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
            <ProductCard product={product} notify={notify} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProduct;
