import './index.scss'

const Footer = () => {

    return (
        <div className="footer">
        <div className="about-us">
          <div className="container">
            <h2>Chúng tôi luôn sẵn sàng phục vụ 24/7</h2>
            <p>
              chỉ cần một click chuột 1s sau đồ ăn sẽ ship ngay đến tận giường cho
              bạn
            </p>
            <p><strong>càm kết:</strong> nhanh - gọn - chất lượng - freeship</p>
            <p><strong>Contact us: </strong> 0123456789</p>
            <p><strong>Email: </strong> nhom05vuive@gmail.com</p>
          </div>
        </div>
        <div className="payment">
          <ul>
            <li><img src={require("../../assets/image/pay1.png")} alt="payment" /></li>
            <li><img  src={require("../../assets/image/pay2.png")} alt="payment" /></li>
            <li><img  src={require("../../assets/image/pay3.png")} alt="payment" /></li>
            <li><img  src={require("../../assets/image/pay4.jpg")} alt="payment" /></li>
            <li><img  src={require("../../assets/image/pay5.jpg")} alt="payment" /></li>
          </ul>
        </div>
       </div>
    )
}

export default Footer;
