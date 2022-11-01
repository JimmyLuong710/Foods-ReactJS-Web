import Modal from "react-modal";
import { useState } from "react";
import accountAPI from "../../../../api/account.api";
import './index.scss'

const customStyles = {
  content: {
    margin: "auto auto",
    width: "800px",
    height: "400px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
};

const AccountModal = ({ isModalOpened, closeModal, notify, getAccounts }) => {
  let [accountInfo, setAccountInfo] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
  });
  let [errMsg, setErrMsg] = useState({
    userName: "",
    email: "",
    password: "",
    rePassword: ""
  });

  const onAccountInfoChange = (e, key) => {
    setAccountInfo({
      ...accountInfo,
      [key]: e.target.value,
    });
  };

  const handleAddAccount = async () => {
    let errMsgUserName = accountInfo.userName
      ? ""
      : "Tên người dùng không được để trống";
    let errMsgEmail = accountInfo.email ? "" : "Email không được để trống";
    let errMsgPw = accountInfo.password ? "" : "Mật không được để trống";
    let errMsgRePw = accountInfo.rePassword ? "" : "Nhập lại mật khẩu không được để trống";

    if (accountInfo.userName.includes(" ") && !errMsgUserName)
      errMsgUserName = "Tên đăng nhập không được chứa khoảng trống";
    if (!accountInfo.email.endsWith("@gmail.com") && !errMsgEmail)
      errMsgEmail = "Địa chỉ email không hợp lệ";
    if (accountInfo.password.length <= 5 && !errMsgPw) {
      errMsgPw = "Mật khẩu phải dài hơn 5 ký tự";
    } else if (accountInfo.password !== accountInfo.rePassword) {
      errMsgPw = "Mật khẩu bạn nhập không trùng nhau";
    }
    debugger
    if (errMsgUserName || errMsgEmail || errMsgPw || errMsgRePw) {
      setErrMsg({
        userName: errMsgUserName,
        email: errMsgEmail,
        password: errMsgPw,
        rePassword: errMsgRePw
      });
      return;
    }

    try {
      let {rePassword, ...account} = accountInfo
      await accountAPI.addAccount(account)
      getAccounts()
      notify("Thêm tài khoản thành công!")
      closeModal()
    } catch (err) {
      console.log(err);
      notify(err.response?.data, "ERROR")
    }
  };

  return (
    <Modal
      isOpen={isModalOpened}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Account Modal"
      id="account-modal"
    >
      <h2 className="text-center title">THÊM TÀI KHOẢN MỚI</h2>
      <span
        className="btn-close-modal"
        onClick={closeModal}
        style={{
          position: "absolute",
          fontSize: "25px",
          right: "10px",
          top: "-5px",
          padding: "3px",
          cursor: "pointer",
          color: "red",
        }}
      >
        x
      </span>

      <form className="add-user-form">
        <div className="row">
          <div className="col-6 mb-3 mt-3">
            <label>Tên đăng nhập:</label>
            <input
              type="text"
              className="form-control"
              value={accountInfo?.userName}
              onChange={(e) => onAccountInfoChange(e, "userName")}
            />
            <p className="message"> {errMsg.userName}</p>
          </div>
          <div className="col-6 mt-3 mb-3">
            <label>Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              value={accountInfo?.password}
              onChange={(e) => onAccountInfoChange(e, "password")}
            />
            <p className="message"> {errMsg.password}</p>
          </div>
          <div className="col-6 mt-3 mb-3">
            <label>Email:</label>
            <input
              type="text"
              className="form-control"
              value={accountInfo.email}
              onChange={(e) => onAccountInfoChange(e, "email")}
            />
            <p className="message"> {errMsg.email}</p>
          </div>
          <div className="col-6 mt-3 mb-3">
            <label>Nhập lại mật khẩu: </label>
            <input
              type="password"
              className="form-control"
              value={accountInfo.rePassword}
              onChange={(e) => onAccountInfoChange(e, "rePassword")}
            />
             <p className="message"> {errMsg.rePassword}</p>
          </div>
        </div>
      </form>
      <div className="add-account-modal__submit-btn text-end mt-5">
        <button className="btn btn-primary" onClick={handleAddAccount}>
          Hoàn tất
        </button>
      </div>
    </Modal>
  );
};

export default AccountModal;
