import { useState } from "react";

const PaymentInfo = () => {
  let [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const onCustomerInfoChange = (e, key) => {
    setCustomerInfo({
      ...customerInfo,
      [key]: e.target.value,
    });
  };

  return (
    <div className="mt-4 mb-4 payment-info">
      <div className="row mt-3">
        <h6 className="text-uppercase">Thông tin thanh toán</h6>
        <div className="col-md-6">
          <div className="inputbox mt-3">
            <label> Tên khi nhận hàng:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={"saigon"}
               // onChange={(e) => onCustomerInfoChange(e, "name")}
            />
          </div>
        </div>

        <div className="col-md-6">
          <div className="inputbox mt-3">
            <label>Số điện thoại</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={"sonla"}
            //   onChange={(e) => onCustomerInfoChange(e, "phone")}
            />
          </div>
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-md-6">
          <div className="inputbox mt-3">
            <label>Địa chỉ</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={"hanoi"}
            //   onChange={(e) => onCustomerInfoChange(e, "address")}
            />
          </div>
        </div>

        <div className="col-md-6">
          <p className="mt-5">
            Phương thức thanh toàn: <i>Tiền mặt</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentInfo;
