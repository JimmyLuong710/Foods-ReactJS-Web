import "./index.scss";
import { IoMdAddCircleOutline } from "react-icons/io";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useState } from "react";
import { useEffect } from "react";
import accountAPI from "../../api/account.api";
import AccountModal from "./components/accountModal";
import AccountTable from "./components/accountTable";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [isModalOpened, setIsModalOpened] = useState(false);

  const notify = (msg, type = "SUCCESS") => {
    toast.success(msg, { type: toast.TYPE[type] });
  };

  function openModal() {
    setIsModalOpened(true);
  }

  function closeModal() {
    setIsModalOpened(false);
  }

  const getAccounts = async (params = {sort: "createdAt"}) => {
    let res = await accountAPI.getAccounts(params);
    setAccounts([...res.docs]);
  };

  useEffect(() => {
    getAccounts();
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container mt-5 mb-5 management-users">
        <div className="title">
          <span onClick={openModal}>
            <IoMdAddCircleOutline /> Thêm người dùng
          </span>
          {isModalOpened && (
            <AccountModal
              isModalOpened={isModalOpened}
              closeModal={closeModal}
              notify={notify}
              getAccounts={getAccounts}
            />
          )}
          <h3 className="">QUẢN LÝ TÀI KHOẢN NGƯỜI DÙNG</h3>
        </div>

        <AccountTable
          accounts={accounts}
          getAccounts={getAccounts}
          notify={notify}
        />
      </div>
      <Footer />
    </>
  );
};

export default Accounts;
