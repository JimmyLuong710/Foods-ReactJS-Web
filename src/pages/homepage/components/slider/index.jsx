import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import './index.scss'

const Slider = () => {
  let sliders = [1, 2, 3, 4, 5, 6];
  return (
    <div className="slider">
        {/* <div className="content">
            <h2>Chúng tôi luôn đem đến trải nghiệm tốt nhất cho người dùng</h2>
            <p>Cam kết đem lại cho khách hàng trải nghiệm tốt nhất khi đặt món ở cửa hàng chúng tôi </p>
        </div> */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper"
      >
        {sliders.map((item, index) => {
          return (
            <SwiperSlide className="swiper-item" key={index}>
              <div className="swiper-item__img ">
                <img
                  src={require(`../../../../assets/image/slider${
                    index + 1
                  }.png`)}
                  alt="slider"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
