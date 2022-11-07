import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import productAPI from "../../api/product.api";
import ProductCard from "../../components/productCard";
import { useSearchParams } from "react-router-dom";

const Search = ({ notify }) => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const getProducts = async () => {
      let res = await productAPI.getProducts({
        limit: 15,
        key: searchParams.get("key"),
      });
      setProducts([...res.docs]);
    };

    getProducts();
  }, [searchParams]);
  return (
    <>
      <Header />
      <div className="container search mt-3 text-center">
        <h2 className="text-center">KẾT QUẢ TÌM KIẾM VỚI TỪ KHÓA {searchParams.get('key')}</h2>
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
      <Footer />
    </>
  );
};

export default Search;
