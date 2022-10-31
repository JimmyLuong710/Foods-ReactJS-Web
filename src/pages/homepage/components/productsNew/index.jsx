import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation, FreeMode, Pagination } from "swiper";
import "./index.scss";
import "swiper/css/bundle";
import ProductCard from "../../../../components/productCard";
import React, { useState } from "react";
import productAPI from "../../../../api/product.api"
import { useEffect } from "react";

const ProductsNew = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      let res = await productAPI.getProducts({sort: "-createdAt", limit: 8})
      setProducts([...res.docs])
    } catch(err) {
      console.log(err)
    }
  }

  useEffect( () => {
    getProducts()
  }, [])
  return (
    <div className="new-products">
      <div className="container">
        <h2>
          Các sản phẩm mới cập nhật{" "}
          <span className="badge bg-success">New</span>
        </h2>
        <Swiper
          navigation={true}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={"auto"}
          freeMode={true}
          modules={[Pagination, Navigation, FreeMode]}
        >
          {products.map((product, index) =>
            index < 10 ? (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ) : (
              <></>
            )
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsNew
