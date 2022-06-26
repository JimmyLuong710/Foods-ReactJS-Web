import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation,FreeMode, Pagination } from "swiper";
import "./product.scss";
import "swiper/css/bundle";

const Product = () => {
  return (
    <div className="new-products">
       <div className="container">
       <h2>Các món ăn mới hon <span className="badge bg-success">New</span></h2>
      <Swiper
        navigation={true}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[Pagination, Navigation, FreeMode]}
      >
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card border-primary">
              <div className="card__img">
                <img className="card-img-top" src={require("../../assets/image/bap-xao.jpg")} alt="" />
              </div>
              <div className="card-body">
                <h4 className="card__title">Bắp xào</h4>
                <p className="card__disciption">giá: <span>2$</span></p>
                <p className="card__disciption">đánh giá: <span>tốt</span></p>
              </div>
              <div className="add-to-cart">
                <button>Thêm vào giỏ</button>
              </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
  );
};

export default Product;
