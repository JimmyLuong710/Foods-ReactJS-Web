import castPrice from "../../../../utils/castPrice";

const PaymentCard = ({ totalCost }) => {
  return (
    <div className="col-md-4">
      <div className="card card-blue p-3 text-white mb-3">
        <span>Bạn phải trả</span>
        <div className="d-flex flex-row align-items-end mb-3">
          <h1 className="mb-0 yellow">{castPrice(totalCost)}đ</h1>
        </div>

        <span>
          Tận hưởng tất cả các tính năng và đặc quyền sau khi bạn hoàn tất thanh
          toán
        </span>
        <span className="yellow decoration">Know all the features</span>

        <div className="hightlight">
          <span>
            100% Đảm bảo hỗ trợ và giải quyết các khiếu nại từ khách hàng
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
