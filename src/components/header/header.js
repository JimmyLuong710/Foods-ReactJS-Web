import "./header.scss";
import { FaKey, FaUserAlt } from "react-icons/fa";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/apiRequests";
import createAxiosJWT from "../../axiosJWT";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/slice/authSlice";

const Header = (props) => {

  let loggedIn = useSelector((state) => state.auth.login.loggedIn);
  let loginUser = useSelector((state) => state.auth.login.user);
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess);

  const onKeyChange = (e) => {
    setKey(e.target.value);
  };
  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${key}`);
    }
  };
  const handleClickSearchButton = (e) => {
    navigate(`/search/${key}`);
  };

  const handleLogout = () => {
    logoutUser(loginUser.accessToken, axiosJWT, dispatch, navigate);
  };
  return (
    <div className="container">
      <header>
        <div className="container">
          <div className="header-top">
            <div className="row">
              <div className="col-lg-6 logo">
                <Link to="/">
                  <img
                    src={require("../../assets/image/logo.png")}
                    alt="logo image"
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="header-top-right">
                  {loggedIn ? (
                    <>
                      <Link className="link-to-cart" to="/cart">
                        <AiOutlineShoppingCart className="cart-icon" />
                        Giỏ hàng
                      </Link>

                      <span className="text-capitalize">
                        <FaUserCircle /> {loginUser?.userName}
                        <ul className="user-action">
                          {loginUser.role === "admin" ? (
                            <>
                              <Link to="/product-pending">
                                <li>Đơn chờ xử lý</li>
                              </Link>
                              <Link to="/manage-user">
                                <li> Quản lý người dùng </li>
                              </Link>
                              <Link to="/manage-product">
                                <li> Quản lý sản phẩm </li>
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link to="/">
                                <li> Sửa thông tin </li>
                              </Link>
                              <Link to="/">
                                <li> Đơn mua </li>
                              </Link>
                            </>
                          )}
                          <li onClick={handleLogout}> Đăng xuất </li>
                        </ul>
                      </span>
                    </>
                  ) : (
                    <>
                      <button>
                        <Link to="/login">ĐĂNG NHẬP</Link>
                      </button>
                      <button>
                        <Link to="/sign-up"> ĐĂNG KÝ</Link>
                      </button>
                    </>
                  )}
                </div>
              </div>
              <div className="search">
                <input
                  type="text"
                  placeholder="Tìm kiếm mòn ăn"
                  value={key}
                  onChange={(e) => onKeyChange(e)}
                  onKeyDown={(e) => handleSearchKeyDown(e)}
                />
                <div className="search-icon">
                  <AiOutlineSearch
                    onClick={(e) => handleClickSearchButton(e)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
