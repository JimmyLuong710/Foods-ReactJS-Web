import "./index.scss";
import { HiPencil } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";

const SideBar = ({ account }) => {
  const { field } = useParams();
  return (
    <div className="side-bar col-3">
      <div className="modifier">
        <div className="avatar">
          <img
            src="https://cdn.xxl.thumbs.canstockphoto.com/anonymous-avatar-profile-icon-vector-illustration_csp21530127.jpg"
            alt="avatar"
          />
        </div>
        <div className="info">
          <h5>{account.userName}</h5>
          <p>
            {" "}
            <HiPencil /> chỉnh sử hồ sơ
          </p>
        </div>
      </div>
      <h4>Tài khoản của tôi</h4>
      <ul>
        <li>
          <Link
            to="/account/profile"
            className={field === "profile" ? "active" : ""}
          >
            {" "}
            Hồ sơ
          </Link>
        </li>
        <li>
          <Link
            to="/account/address"
            className={field === "address" ? "active" : ""}
          >
            {" "}
            Địa chỉ
          </Link>
        </li>
        <li>
          <Link
            to="/account/forgot-password"
            className={field === "forgot-password" ? "active" : ""}
          >
            Đổi mật khẩu
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
