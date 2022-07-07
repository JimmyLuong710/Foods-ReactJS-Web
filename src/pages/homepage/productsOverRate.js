import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation,FreeMode, Pagination } from "swiper";
import "./product.scss";
import "swiper/css/bundle";
import ProductCard from "../../components/product-card/product-card";

const ProductsOverRate = () => {
  let array = [1,2,34,3,32,5,6,3,56,32]
  return (
  <div className="product-overrate">
    <div className="container">
    <h2> sản phẩm được đánh giá cao <span className="badge bg-success">overrate</span></h2>
   <Swiper
     navigation={true}
     grabCursor={true}
     spaceBetween={10}
     slidesPerView={'auto'}
    //  pagination={{
    //    clickable: true,
    //  }}
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
}

export default ProductsOverRate