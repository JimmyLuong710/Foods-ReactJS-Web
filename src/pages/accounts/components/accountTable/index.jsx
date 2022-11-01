import { MdDelete } from "react-icons/md";
import accountAPI from "../../../../api/account.api";

const AccountTable = ({ accounts, notify, getAccounts }) => {

  const handleDeleteAccount = async (accountId) => {
    try {
      await accountAPI.deleteAccount(accountId);
      getAccounts()
      notify("Xóa tài khoản thành công!")
    } catch(err) {
      console.log(err)
      notify(err.response?.data, "ERROR")
    }
  };

  return (
    <table className="table table-hover text-center">
      <thead>
        <tr>
          <th>Stt</th>
          <th>Tên đăng nhập</th>
          <th>Email</th>
          <th>Vai trò</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {accounts?.map((account, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{account.userName}</td>
            <td>{account.email}</td>
            <td>{account.role}</td>
            <td>
              {" "}
              <MdDelete
                className="bin"
                onClick={(e) => handleDeleteAccount(account._id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AccountTable;
