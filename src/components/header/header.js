import "./header.scss";
import { FaKey, FaUserAlt } from "react-icons/fa";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="header-top">
          <div className="row">
            <div className="col-lg-6 logo">
              <img src={require("../../assets/image/logo.png")} alt="logo image" />
            </div>
            <div className="col-lg-6 login">
              <div className="form-login">
                <form action="" method="post">
                  <div className="user-input">
                    <div className="user-icon">
                      <FaUserAlt />
                    </div>
                    <input
                      type="text"
                      placeholder="Username"
                      name="user-name"
                    />
                  </div>
                  <div className="password-input">
                    <div className="pass-word-icon">
                      {" "}
                      <FaKey />{" "}
                    </div>
                    <input type="text" placeholder="Password" name="password" />
                  </div>
                  <button className="btn btn-login" type="submit">
                    Login
                  </button>
                </form>
              </div>
              <div className="forget-password">
                <p>
                  <Link to="/forgot-password">quên mật khẩu?</Link>
                  <Link to="/sign-up"> đăng ký? </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-6">
              <div className="nav">
                <ul>
                  <li className="active">
                    <span>Home</span>
                  </li>
                  <li className="dropdown">
                    <span> Đồ ăn</span> <AiOutlineDown />
                    <ul>
                      <li>
                        <a href="">Hải sản</a>
                      </li>
                      <li>
                        <a href="">Đặc sản</a>
                      </li>
                      <li>
                        <a href="">Các món hot</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <span> Đồ uống </span> <AiOutlineDown />
                    <ul>
                      <li>
                        <a href="">Trà sữa</a>
                      </li>
                      <li>
                        <a href="">Đa dạng</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span> Bán chạy </span>
                  </li>
                  <li>
                    <span> Call Me </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="search">
                <input type="text" placeholder="Search..." />
                <div className="search-icon">
                  <AiOutlineSearch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
