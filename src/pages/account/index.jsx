import Header from "../../components/header";
import Footer from "../../components/footer";
import Profile from "./profile";
import Address from "./address";
import ForgotPw from "./forgotPw";
import { useSelector } from "react-redux";
import SideBar from "./sideBar";
import "./index.scss";
import { useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Account = () => {
  const auth = useSelector((state) => state.auth);
  const { field } = useParams();

  const notify = (msg, type = "SUCCESS") => {
    toast.success(msg, { type: toast.TYPE[type] });
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container account mt-5 mb-5">
        <div className="row">
          <SideBar account={auth.account} />
          {field === "profile" && <Profile account={auth.account} notify={notify}/>}
          {field === "address" && <Address notify={notify} />}
          {field === "forgot-password" && <ForgotPw notify={notify} />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Account;
