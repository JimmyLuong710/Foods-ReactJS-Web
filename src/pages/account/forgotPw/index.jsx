import "./index.scss";

const ForgetPw = () => {

  return (
    <div className="forgot-pw col-9">
      <div className="title">
        <h4>Đổi mật khẩu</h4>
        <p>Đổi mật khẩu để bảo vệ chính bạn</p>
      </div>
      <div className="forgot-pw__content">
        <form>
            <div className="input-box">
                <label htmlFor="">Mật khẩu hiện tại</label>
                <input type="password" />
            </div>
            <div className="input-box">
                <label htmlFor="">Mật khẩu mới</label>
                <input type="password" />
            </div>
            <div className="input-box">
                <label htmlFor="">Nhập lại mật khẩu mới</label>
                <input type="password" />
            </div>
            <div className="btn-submit">
                <button type="submit">Xác nhận</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPw;
