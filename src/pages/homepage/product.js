import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode, Pagination } from "swiper";
import "./product.scss";
import "swiper/css/bundle";
import { Link } from "react-router-dom";
import { BsEye } from "react-icons/bs";
import ProductCard from "../../components/product-card/product-card";
import { useSelector } from "react-redux";

const Product = () => {
  let allProduct = useSelector(state => state.admin.products.products)

  return (
    <div className="new-products">
      <div className="container">
        <h2>
          Các sản phẩm mới cập nhật <span className="badge bg-success">New</span>
        </h2>
        <Swiper
          navigation={true}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          {allProduct?.map((item, index) => 
            index < 10 ? 
            <SwiperSlide key={index}>
              <ProductCard 
              item = {item}
              />
            </SwiperSlide >
            : 
            <>
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
