import { useState } from "react";
import './index.scss'
import accountAPI from "../../../api/account.api";
import { updateAccount } from "../../../redux/slice/auth.slice";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({account, notify}) => {
  const [userName, setUserName] = useState(account.userName)
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth);

  const onUserNameChange = (e) => {
    setUserName(e.target.value)
  }

  const handleUpdateAccount = async () => {
    try {
      let account = await accountAPI.updateAccount({userName}, auth.account._id)
      dispatch(updateAccount(account.userName))
      notify("Cập nhật thành công!")
    } catch(err) {
      console.log(err)
      notify(err.response.data, "ERROR")
    }
  }
  return (
    <div className="profile col-9">
      <div className="title">
        <h4>Thông tin tài khoản</h4>
        <p>Quản lý thông tin tài khoản</p>
      </div>
      <div className="profile__content">
        <div className="field-row">
          <label>
            Tên người dùng
          </label>
          <input
            type="text"
            value={userName}
            onChange={(e) => onUserNameChange(e)}
          />
        </div>
        <div className="field-row">
          <label>Email</label>
          <span>{account.email}</span>
        </div>
        <div className="field-row">
          <label>Ảnh đại diện </label>
          <div className="avatar">
            <img src="https://cdn.xxl.thumbs.canstockphoto.com/anonymous-avatar-profile-icon-vector-illustration_csp21530127.jpg" alt="avatar" />
          </div>
        </div>
      </div>
      <div className="btn-save">
        <button onClick={handleUpdateAccount}>Lưu</button>
      </div>
    </div>
  );
};

export default Profile;
