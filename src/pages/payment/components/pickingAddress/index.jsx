import Modal from "react-modal";
import "./index.scss";
import { useState } from "react";

const customStyles = {
  content: {
    margin: "auto auto",
    width: "500px",
    height: "460px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
};

const PickingAddress = ({
  isPickingAddressOpened,
  closePickingAddress,
  addresses,
  setAddress,
}) => {
  const [addressPicked, setAddressPicked] = useState();
  console.log(addressPicked);
  const onRadioChange = (e) => {
    setAddressPicked(addresses[parseInt(e.target.value)]);
  };

  const handlePickAddress = async () => {
    setAddress(addressPicked);
    closePickingAddress();
  };

  return (
    <Modal
      isOpen={isPickingAddressOpened}
      onRequestClose={closePickingAddress}
      ariaHideApp={false}
      style={customStyles}
      contentLabel="Account Modal"
      id="picking-address-modal"
    >
      <h5 className="title">Địa chỉ của tôi</h5>
      <span className="btn-close-modal" onClick={closePickingAddress}>
        x
      </span>
      <div className="list-address">
        {addresses?.map((address, index) => {
          return (
            <div className="address__content--row" key={index}>
              <input
                type="radio"
                name="field"
                id={`label${index}`}
                value={index}
                onChange={(e) => onRadioChange(e)}
              />

              <label className="address__content" htmlFor={`label${index}`}>
                <h6>{address.name} </h6>
                <p>{address.phone}</p>
                <p style={{ maxWidth: "350px" }}>{address.address}</p>
              </label>
            </div>
          );
        })}
      </div>
      <div className="btn-pick-address text-end mt-5">
        <button className="btn btn-primary" onClick={handlePickAddress}>
          Hoàn tất
        </button>
      </div>
    </Modal>
  );
};

export default PickingAddress;
