import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode, Pagination } from "swiper";
import "./index.scss";
import "swiper/css/bundle";
import ProductCard from "../../../../components/productCard";
import { useEffect, useState } from "react";
import productAPI from "../../../../api/product.api";

const ProductsOverRate = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      let res = await productAPI.getProducts({ sort: "-quantitySold", limit: 8 });
      setProducts([...res.docs]);
    };
    getProducts();
  }, []);

  return (
    <div className="product-overrate">
      <div className="container">
        <h2>
          {" "}
          Sản phẩm bán chạy <span className="badge bg-success">overrate</span>
        </h2>
        <Swiper
          navigation={true}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          {products?.map((product, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsOverRate;
