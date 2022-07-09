import "./signUp.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Axios from "../../axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { registerUser } from "../../redux/apiRequests";

const SignUp = () => {
  const navigate = useNavigate()
  let userRegister = useSelector(state => state.auth.register)

  const dispatch = useDispatch()

  let [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    cfPassword: "",
  });
  let [message, setMessage] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
  });

  let user = {
    userName: userInfo.userName,
    email: userInfo.email,
    phone: userInfo.phone,
    password: userInfo.password
  }
  const onUserInfoChange = (e, key) => {
    setUserInfo({
      ...userInfo,
      [key]: e.target.value,
    })
  }

  let handleSubmit = async (e) => {
    let userNameM = userInfo.userName
      ? ""
      : "Tên người dùng không được để trống";
    let emailM = userInfo.email ? "" : "Email không được để trống";
    let phoneM = userInfo.phone ? "" : "Số điện không được để trống";
    let passwordM = userInfo.password ? "" : "Mật không được để trống";

    if(userInfo.userName.includes(' ') && !userNameM) 
      userNameM = "Tên đăng nhập không được chứa khoảng trống"
    if (!userInfo.email.endsWith("@gmail.com") && !emailM)
      emailM = "Địa chỉ email không hợp lệ";
    if (userInfo.phone[0] != "0" || !userInfo.phone.match(/^-?\d+$/) || userInfo.phone.length !== 10)
      phoneM = "số điện thoại không hợp lệ";
    if (userInfo.password.length <= 5 && !passwordM) {
      passwordM = "Mật khẩu phải dài hơn 5 ký tự";
    } else if (userInfo.password !== userInfo.cfPassword) {
      passwordM = "Mật khẩu bạn nhập không trùng nhau";
    }
    if (!userNameM && !emailM && !phoneM && !passwordM) {
      await registerUser(user, dispatch, navigate)
    }

    setMessage({
      userName: userNameM,
      email: emailM,
      phone: phoneM,
      password: passwordM,
    });
  };

  return (
    <section className="bg-image">
      <div className="mask d-flex align-items-center gradient-custom-3">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-9 col-lg-7 col-xl-6">
              <div className="card card-sign-up" style={{ borderRadius: "15px" }}>
                <div className="card-body">
                  <h2 className="text-uppercase text-center mb-5">
                    Tạo tài khoản
                  </h2>
                  <form>
                    <div className="form-outline mb-3">
                      <label>Tên đăng nhập</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={userInfo.userName}
                        onChange={(e) => onUserInfoChange(e, 'userName')}
                      />
                      <p className="message">{message.userName}</p>
                    </div>

                    <div className="form-outline mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        value={userInfo.email}
                        onChange={(e) => onUserInfoChange(e, 'email')}
                      />
                      <p className="message">{message.email}</p>
                    </div>

                    <div className="form-outline mb-3">
                      <label>Số điện thoại</label>
                      <input
                        type="text"
                        id="phone"
                        className="form-control form-control-lg"
                        value={userInfo.phone}
                        onChange={(e) => onUserInfoChange(e, 'phone')}
                      />
                      <p className="message"> {message.phone}</p>
                    </div>
                    <div className="form-outline mb-3">
                      <label>Mật khẩu</label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        value={userInfo.password}
                        onChange={(e) => onUserInfoChange(e, 'password')}
                      />
                      <p className="message"> {message.password} </p>
                    </div>
                    <div className="form-outline mb-3">
                      <label>Nhập lại mật khẩu</label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        value={userInfo.cfPassword}
                        onChange={(e) => onUserInfoChange(e, 'cfPassword')}
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body mt-5"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Đăng ký
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Đã có tài khoản?{" "}
                      <Link to="/login" className="fw-bold text-body">
                        <u>đăng nhập</u>
                      </Link>
                    </p>
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

export default SignUp;
