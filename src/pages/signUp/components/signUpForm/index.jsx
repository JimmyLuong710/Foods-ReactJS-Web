import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onSignUp } from "../../../../redux/action/auth.action";

const SignUpForm = ({ notify }) => {
  const dispatch = useDispatch();
  let [account, setAccount] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });
  let [errMessage, setErrMessage] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const onAccountChange = (e, key) => {
    setAccount({
      ...account,
      [key]: e.target.value,
    });
  };

  let handleSubmit = async (e) => {
    let userNameM = account.userName
      ? ""
      : "Tên người dùng không được để trống";
    let emailM = account.email ? "" : "Email không được để trống";
    let passwordM = account.password ? "" : "Mật không được để trống";

    if (account.userName.includes(" ") && !userNameM)
      userNameM = "Tên đăng nhập không được chứa khoảng trống";
    if (!account.email.endsWith("@gmail.com") && !emailM)
      emailM = "Địa chỉ email không hợp lệ";
    if (account.password?.length <= 5 && !passwordM) {
      passwordM = "Mật khẩu phải dài hơn 5 ký tự";
    } else if (account.password !== account.rePassword) {
      passwordM = "Mật khẩu bạn nhập không trùng nhau";
    }

    if (userNameM || emailM || passwordM) {
      setErrMessage({
        userName: userNameM,
        email: emailM,
        password: passwordM,
      });
      return;
    }

    try {
      await dispatch(onSignUp(account)).unwrap();
    } catch (err) {
      notify(err, "ERROR");
      setErrMessage({})
    }
  };

  return (
    <section className="bg-image">
      <div className="mask d-flex align-items-center gradient-custom-3">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-9 col-lg-7 col-xl-6">
              <div
                className="card card-sign-up"
                style={{ borderRadius: "15px" }}
              >
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
                        value={account.userName}
                        onChange={(e) => onAccountChange(e, "userName")}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSubmit();
                        }}
                      />
                      <p className="message">{errMessage.userName}</p>
                    </div>

                    <div className="form-outline mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        value={account.email}
                        onChange={(e) => onAccountChange(e, "email")}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSubmit();
                        }}
                      />
                      <p className="message">{errMessage.email}</p>
                    </div>

                    <div className="form-outline mb-3">
                      <label>Mật khẩu</label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        value={account.password}
                        onChange={(e) => onAccountChange(e, "password")}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSubmit();
                        }}
                      />
                      <p className="message"> {errMessage.password} </p>
                    </div>
                    <div className="form-outline mb-3">
                      <label>Nhập lại mật khẩu</label>
                      <input
                        type="password"
                        id="form3Example4cg"
                        className="form-control form-control-lg"
                        value={account.rePassword}
                        onChange={(e) => onAccountChange(e, "rePassword")}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSubmit();
                        }}
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
                      <Link to="/auth/sign-in" className="fw-bold text-body">
                        <u>Đăng nhập</u>
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

export default SignUpForm;
