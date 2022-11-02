import { useEffect } from "react";
import { useState } from "react";
import "./index.scss";
import addressAPI from "../../../api/address.api";

const Address = ({notify}) => {
  const [addresses, setAddresses] = useState([]);

  const handleDeleteAddress = async (addressId) => {
    try {
        await addressAPI.deleteAddress(addressId)
        notify("Xóa thành công!")
        getAddresses()
    } catch(err) {
        console.log(err)
        notify(err.response.data, "ERROR")
    }
  }

  const getAddresses = async () => {
    let _addresses = await addressAPI.getAddresses();
    setAddresses([..._addresses]);
  };

  useEffect(() => {
    getAddresses();
  }, []);
  return (
    <div className="address col-9">
      <div className="title">
        <h4>Địa chỉ của tôi</h4>
        <button>+ Thêm địa chỉ mới</button>
      </div>
      <div className="address__content">
        <h5 className="mt-3">Địa chỉ</h5>
        {addresses.map((address, index) => {
          return (
            <div className="address__content--row" key={index}>
              <h6>{address.name} </h6>
              <p>{address.phone}</p>
              <p style={{ maxWidth: "300px" }}>{address.address}</p>
              <div className="action">
                <span>Cập nhật</span>
                <span onClick={(e) => handleDeleteAddress(address._id)}>Xóa</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Address;
