import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onSignIn } from "../../../../redux/action/auth.action";
import "./index.scss";

const LoginForm = ({ notify }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState({});
  const { error } = useSelector((state) => state.auth);

  error && notify(error, "ERROR");
  const account = {
    userName: username,
    password: password,
  };

  let onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  let onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  let handleLogin = async () => {
    let usernameMsg = username ? "" : "Tên đăng nhập không được để trống";
    let pwMsg = password ? "" : "Mật khẩu không được để trống";
    setErrMsg({
      userName: usernameMsg,
      password: pwMsg,
    });
    if (usernameMsg || pwMsg) {
      return
    }
    dispatch(onSignIn(account));
  };
  return (
    <section className="bg-image">
      <div className="mask d-flex align-items-center gradient-custom-3">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-9 col-lg-7 col-xl-6">
              <div className="card card-login" style={{ borderRadius: "15px" }}>
                <div className="card-body">
                  <h2 className="text-uppercase text-center mb-5">
                    ĐĂNG NHẬP TÀI KHOẢN
                  </h2>
                  <form className="form-login">
                    <div className="form-outline mb-3">
                      <label>Tên đăng nhập / email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="email"
                        value={username}
                        onChange={(e) => onUsernameChange(e)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleLogin();
                          return
                        }}
                      />
                      <p className="message">{errMsg.userName}</p>
                    </div>

                    <div className="form-outline mb-3">
                      <label>Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        id="pwd"
                        value={password}
                        onChange={(e) => onPasswordChange(e)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleLogin();
                          return
                        }}
                      />
                      <p className="message"> {errMsg.password} </p>
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
                        <Link to="/">Quên mật khẩu?</Link>
                      </p>
                      <p className="text-center text-muted">
                        Chưa có tài khoản?{" "}
                        <Link to="/auth/sign-up">Đăng ký</Link>
                      </p>
                      <p className="text-center text-muted">
                        <Link to="/">Quay về trang chủ</Link>
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

export default LoginForm;
