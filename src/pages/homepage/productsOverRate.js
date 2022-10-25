import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode, Pagination } from "swiper";
import "./product.scss";
import "swiper/css/bundle";
import ProductCard from "../../components/productCard/product-card";
import { useSelector } from "react-redux";
import { getProductsBestSell } from "../../redux/apiRequests";
import { useEffect, useState } from "react";

const ProductsOverRate = () => {
  // let allProduct = useSelector(state => state.admin.products.products)
  const [allProduct, setAllProduct] = useState([]);
  useEffect(async () => {
    let data = await getProductsBestSell();
    setAllProduct(data);
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
          {allProduct?.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard
                item={{
                  id: item["Product.id"],
                  image: item["Product.image"],
                  price: item["Product.price"],
                  productName: item["Product.productName"],
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsOverRate;
