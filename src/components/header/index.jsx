import "./index.scss";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authAPI from "../../api/auth.api";
import { onLogOut } from "../../redux/action/auth.action";

const Header = () => {
  let auth = useSelector((state) => state.auth);
  const [key, setKey] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate(`/products/search?key=${key}`);
    }
  };

  const handleClickSearchButton = (e) => {
    navigate(`/search/${key}`);
  };

  const handleLogout = async () => {
    try {
      await authAPI.logOut()
      dispatch(onLogOut())
   } catch(err) {
      console.log(err)
    }
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
                    alt="logo"
                  />
                </Link>
              </div>
              <div className="col-lg-6">
                <div className="header-top-right">
                  {auth.isLoggedIn ? (
                    <>
                      <Link className="link-to-cart" to="/cart">
                        <AiOutlineShoppingCart className="cart-icon" />
                        Giỏ hàng
                      </Link>

                      <span className="text-capitalize">
                        <FaUserCircle /> {auth.account.userName}
                        <ul className="user-action">
                          {auth.account.role === "admin" ? (
                            <>
                             <Link to="/account/profile">
                                <li> Tài khoản của tôi </li>
                              </Link>
                              <Link to="/management/orders/pending">
                                <li>Đơn chờ xử lý</li>
                              </Link>
                              <Link to="/management/accounts">
                                <li> Quản lý người dùng </li>
                              </Link>
                              <Link to="/management/products">
                                <li> Quản lý sản phẩm </li>
                              </Link>
                            </>
                          ) : (
                            <>
                              <Link to="/account/profile">
                                <li> Tài khoản của tôi </li>
                              </Link>
                              <Link to="/orders">
                                <li> Lịch sử mua </li>
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
                        <Link to="/auth/sign-in">ĐĂNG NHẬP</Link>
                      </button>
                      <button>
                        <Link to="/auth/sign-up"> ĐĂNG KÝ</Link>
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
