import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Navigation,FreeMode, Pagination } from "swiper";
import "./member.scss";
import "swiper/css/bundle";
import {ImStarEmpty} from 'react-icons/im'

const Members = () => {
  return (
    <div className="members">
       <div className="container">
       <h2>Our team members</h2>
      <Swiper
        navigation={true}
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={'auto'}
        pagination={{
          clickable: true,
        }}
        freeMode={true}
        modules={[Pagination, Navigation, FreeMode]}
      >
        <SwiperSlide>
        <div className="item">
            <div className="avatar">
              <img src={require("../../assets/image/member1.jpg")} alt="" />
            </div>
            <h4>Lê Xuân Quỳnh</h4>
            <p>Chức vụ: <span>nhân viên</span></p>
            <p>Tuổi: <span>21</span></p>
            <p>Đóng góp: <span>0%</span></p>
            <p>
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <div className="avatar">
              <img src={require("../../assets/image/member2.jpg")} alt="" />
            </div>
            <h4>Trần Văn Tư</h4>
            <p>Chức vụ: <span>Nhân viên</span></p>
            <p>Tuổi: <span>22</span></p>
            <p>Đóng góp: <span>0%</span></p>
            <p>
            <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <div className="avatar">
              <img src={require("../../assets/image/member3.jpg")} alt="" />
            </div>
            <h4>Trần Qúy Nhất</h4>
            <p>Chức vụ: <span>Collector</span></p>
            <p>Tuổi: <span>21</span></p>
            <p>Đóng góp: <span>0%</span></p>
            <p>
            <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <div className="avatar">
              <img src={require("../../assets/image/member4.jpg")} alt="" />
            </div>
            <h4>Dương Văn Tình</h4>
            <p>Chức vụ: <span>Design</span></p>
            <p>Tuổi: <span>21</span></p>
            <p>Đóng góp: <span>0%</span></p>
            <p>
            <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item">
            <div className="avatar">
              <img src={require("../../assets/image/member5.jpg")} alt="" />
            </div>
            <h4>Lường Văn Vinh</h4>
            <p>Chức vụ: <span>Developer</span></p>
            <p>Tuổi: <span>20</span></p>
            <p>Đóng góp: <span>100%</span></p>
            <p>
            <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
              <ImStarEmpty className="star-icon" />
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      </div>
  );
};

export default Members;
