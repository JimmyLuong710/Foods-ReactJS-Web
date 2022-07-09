import "./login.scss";
import { useState } from "react";
import Axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginUser } from "../../redux/apiRequests";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth); // get all data from auth reducer

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    userName: username,
    password: password,
  };
  let onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  let onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  let handleLogin = async (e) => {
    loginUser(user, dispatch, navigate);
  };
  return (

    <section className="bg-image">
      <div className="mask d-flex align-items-center gradient-custom-3">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-9 col-lg-7 col-xl-6">
              <div
                className="card card-login"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body">
                  <h2 className="text-uppercase text-center mb-5">
                    ĐĂNG NHẬP TÀI KHOẢN
                  </h2>
                  <form className="form-login">
                    <div className="form-outline mb-3">
                      <label>Tên đăng nhập</label>
                      <input
                      type="text"
                      className="form-control form-control-lg"
                      id="email"
                      value={username}
                      onChange={(e) => onUsernameChange(e)}
                      />
                      {/* <p className="message">{message.userName}</p> */}
                    </div>

                    <div className="form-outline mb-3">
                      <label>Mật khẩu</label>
                      <input
                       type="password"
                       className="form-control form-control-lg"
                       id="pwd"
                       value={password}
                       onChange={(e) => onPasswordChange(e)}
                      />
                      {/* <p className="message"> {message.password} </p> */}
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body mt-5"
                        onClick={(e) => handleLogin(e)}
                      >
                        Đăng nhập
                      </button>
                    </div>

                    <div className="login-options">
                    <p className="text-center text-muted">
                      <Link to="/">
                        Quên mật khẩu?
                      </Link>
                    </p>
                    <p className="text-center text-muted">
                      Chưa có tài khoản?{" "}
                      <Link to="/sign-up">
                        Đăng ký
                      </Link>
                    </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
