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

const Product = () => {
  let array = [1, 2, 3, 4, 5, 6];
  return (
    <div className="new-products">
      <div className="container">
        <h2>
          Các món ăn mới hon <span className="badge bg-success">New</span>
        </h2>
        <Swiper
          navigation={true}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={"auto"}
          // pagination={{
          //   clickable: true,
          // }}
          freeMode={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          {array.map((item, index) => (
            <SwiperSlide >
              <ProductCard />
            </SwiperSlide >
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Product;
