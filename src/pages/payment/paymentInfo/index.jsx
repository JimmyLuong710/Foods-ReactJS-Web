import "./index.scss";
import { useEffect, useState } from "react";
import PickingAddress from "../pickingAddress";
import addressAPI from "../../../api/address.api";

const PaymentInfo = ({ setAddressId }) => {
  const [isPickingAddressOpened, setIsPickingAddressOpened] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState();

  const closePickingAddress = () => {
    setIsPickingAddressOpened(false);
  };

  const openPickingAddress = () => {
    setIsPickingAddressOpened(true);
  };

  const getAddresses = async () => {
    let _addresses = await addressAPI.getAddresses();
    setAddresses([..._addresses]);
  };

  useEffect(() => {
    getAddresses();
    setAddressId(address?._id);
  }, [address, setAddressId]);
  return (
    <div className="mt-4 mb-4 payment-info">
      <h5 className="text-uppercase mb-2">Thông tin thanh toán</h5>
      <div className="btn-pick-address">
        <button onClick={openPickingAddress}>Chọn địa chỉ nhận hàng</button>
        {isPickingAddressOpened && (
          <PickingAddress
            isPickingAddressOpened={isPickingAddressOpened}
            closePickingAddress={closePickingAddress}
            addresses={addresses}
            setAddress={setAddress}
          />
        )}
      </div>
      {address && (
        <div className="address-info">
          <h5>Địa chỉ nhận hàng:</h5>
          <div className="address-detail">
            <h5>
              {address?.name} 
            </h5>
            <span className="mb-0">{address?.phone}</span>
            <p>{address?.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentInfo;
