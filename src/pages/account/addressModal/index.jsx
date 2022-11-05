import Modal from "react-modal";
import "./index.scss";
import addressAPI from "../../../api/address.api";
import { useState } from "react";

const customStyles = {
  content: {
    margin: "auto auto",
    width: "500px",
    height: "440px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
};

const AddressModal = ({ isModalOpened, closeModal, notify, getAddresses }) => {
  const [address, setAddress] = useState({});
  const [errMsg, setErrMsg] = useState({});

  const onAddressChange = (e, field) => {
    setAddress({
      ...address,
      [field]: e.target.value,
    });
  };

  const handleAddAddress = async () => {
    let errMsgName = address.name ? "" : "Tên không được để trống";
    let errMsgPhone = address.phone
      ? ""
      : "Số điện thoại không được để trống";
    let errMsgAddress = address.address ? "" : "Địa chỉ không được để trống";

    if (
      isNaN(address.phone) ||
      (address.phone?.length !== 10 && address.phone?.length !== 11)
    ) {
      errMsgPhone = "Số điện thoại không hợp lệ";
    }

    if (errMsgName || errMsgPhone || errMsgAddress) {
      setErrMsg({
        name: errMsgName,
        phone: errMsgPhone,
        address: errMsgAddress,
      });
      return;
    }

    try {
      await addressAPI.addAddress(address);
      notify("Thêm địa chỉ thành công!");
      getAddresses();
      closeModal()
    } catch (err) {
      console.log(err);
      notify(err.response?.data, "ERROR");
    }
  };

  return (
    <Modal
      isOpen={isModalOpened}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Account Modal"
      id="address-modal"
    >
      <h4 className="text-center title">THÊM ĐỊA CHỈ MỚI</h4>
      <span className="btn-close-modal" onClick={closeModal}>
        x
      </span>

      <form className="add-user-form">
        <div className="mb-3 mt-3">
          <label>Tên khi nhận hàng:</label>
          <input
            type="text"
            className="form-control"
            value={address.name}
            onChange={(e) => onAddressChange(e, "name")}
          />
          <p className="message"> {errMsg.name}</p>
        </div>
        <div className="mt-3 mb-3">
          <label>Số điện thoại:</label>
          <input
            type="text"
            className="form-control"
            value={address.phone}
            onChange={(e) => onAddressChange(e, "phone")}
          />
          <p className="message"> {errMsg.phone}</p>
        </div>
        <div className="mt-3 mb-3">
          <label>Địa chỉ:</label>
          <input
            type="text"
            className="form-control"
            value={address.address}
            onChange={(e) => onAddressChange(e, "address")}
          />
          <p className="message"> {errMsg.address}</p>
        </div>
      </form>
      <div className="add-address-modal__submit-btn text-end mt-5">
        <button className="btn btn-primary" onClick={handleAddAddress}>
          Hoàn tất
        </button>
      </div>
    </Modal>
  );
};

export default AddressModal;
