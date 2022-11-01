import { GiPencil } from "react-icons/gi";
import { MdDelete } from "react-icons/md";
import productAPI from "../../../../api/product.api";
import castPrice from "../../../../utils/castPrice";

const ProductTable = ({ products, openProductModal, getProducts, notify }) => {
  const handleDeleteProduct = async (productId) => {
    try {
      await productAPI.deleteProduct(productId);
      notify("Xóa sản phẩm thành công!");
      getProducts();
    } catch (err) {
      console.log(err);
      notify(err.response?.data, "ERROR");
    }
  };
  return (
    <table className="table table-hover text-center">
      <thead>
        <tr>
          <th>Stt</th>
          <th>Sản phẩm</th>
          <th>Giá</th>
          <th>Loại</th>
          <th>Tính trạng</th>
          <th>Mô tả</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {products?.map((product, index) => (
          <tr key={index}>
            <td style={{ width: "5%" }}>{index + 1}</td>
            <td style={{ width: "25%" }}>
              <div className="img-product">
                <img
                  src={process.env.REACT_APP_BACK_END_URL + "/" + product.image}
                  alt="product"
                />
              </div>
              <p className="product-name"> {product.productName} </p>
            </td>
            <td style={{ width: "10%" }}>{castPrice(product.price)}đ</td>
            <td style={{ width: "10%" }}>{product.type}</td>
            <td style={{ width: "10%" }}>{product.status} </td>
            <td style={{ width: "30%" }}>{product.description}</td>
            <td style={{ width: "10%" }}>
              {" "}
              <GiPencil
                className="pencil"
                onClick={(e) => openProductModal("update", product)}
              />
              <MdDelete
                className="bin"
                onClick={(e) => handleDeleteProduct(product._id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
