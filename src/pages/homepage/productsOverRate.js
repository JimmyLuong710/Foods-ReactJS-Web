import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation,FreeMode, Pagination } from "swiper";
import "./product.scss";
import "swiper/css/bundle";
import ProductCard from "../../components/product-card/product-card";
import { useSelector } from "react-redux";

const ProductsOverRate = () => {
  let allProduct = useSelector(state => state.admin.products.products)
  return (
  <div className="product-overrate">
    <div className="container">
    <h2> sản phẩm được đánh giá cao <span className="badge bg-success">overrate</span></h2>
   <Swiper
     navigation={true}
     grabCursor={true}
     spaceBetween={10}
     slidesPerView={'auto'}
     freeMode={true}
     modules={[Pagination, Navigation, FreeMode]}
   >
      {allProduct?.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard 
              item = {item}
              />
            </SwiperSlide >
          ))}
    
   </Swiper>
   </div>
   </div>
);
}

export default ProductsOverRate