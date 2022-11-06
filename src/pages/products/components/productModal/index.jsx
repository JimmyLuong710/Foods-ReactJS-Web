import Modal from "react-modal";
import { useState } from "react";
import productAPI from "../../../../api/product.api";
import { useEffect } from "react";
import "./index.scss";

// custom style default of react modal
const customStyles = {
  content: {
    margin: "auto auto",
    width: "800px",
    height: "530px",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
};

const ProductModal = ({
  isModalOpened,
  closeModal,
  typeActionModal,
  getProducts,
  productToUpdate,
  notify,
}) => {
  const [selectedFile, setSelectedFile] = useState();
  const [productInfo, setProductInfo] = useState({
    productName: "",
    price: "",
    description: "",
    type: "food",
    status: "active",
  });

  console.log(productInfo);

  const onProductInfoChange = (e, key) => {
    setProductInfo({
      ...productInfo,
      [key]: e.target.value,
    });
  };

  const onFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleModalAction = async () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("productName", productInfo.productName);
    formData.append("description", productInfo.description);
    formData.append("price", productInfo.price);
    formData.append("type", productInfo.type);
    formData.append("status", productInfo.status);

    if (typeActionModal === "add") {
      try {
        await productAPI.addProduct(formData);
        getProducts();
        closeModal();
        notify("Thêm sản phẩm thành công");
      } catch (err) {
        console.log(err);
        notify(err.response?.data, "ERROR");
      }
    } else if (typeActionModal === "update") {
      try {
        await productAPI.updateProduct(formData, productToUpdate._id);
        getProducts();
        closeModal();
        notify("Cập nhật sản phẩm thành công");
      } catch (err) {
        console.log(err);
        notify(err.response?.data, "ERROR");
      }
    }
  };

  useEffect(() => {
    if (typeActionModal === "update") {
      setProductInfo(productToUpdate);
    }
  }, [productToUpdate, typeActionModal]);

  return (
    <Modal
      isOpen={isModalOpened}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}
      id="product-modal"
    >
      <h2 className="text-center">
        {typeActionModal === "add" ? "THÊM SẢN PHẨM MỚI" : "SỬA ĐỔI SẢN PHẨM"}
      </h2>
      <span className="btn-close-modal" onClick={closeModal}>
        x
      </span>
      <form>
        <div className="row">
          <div className="col-6 mb-3 mt-3">
            <label>Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              value={productInfo.productName}
              onChange={(e) => onProductInfoChange(e, "productName")}
            />
          </div>
          <div className="col-6 mt-3 mb-3">
            <label>Gía (vnđ): </label>
            <input
              type="number"
              className="form-control"
              value={productInfo.price}
              onChange={(e) => onProductInfoChange(e, "price")}
            />
          </div>
          <div className="col-6 mt-3 mb-3">
            <label>Loại sản phẩm: </label>
            <select
              value={productInfo.type}
              onChange={(e) => onProductInfoChange(e, "type")}
            >
              <option value="food">Đồ ăn</option>
              <option value="drink">Đồ uống</option>
            </select>
          </div>
          <div className="col-6 mt-3 mb-3">
            <label>Tính trạng: </label>
            <select
              value={productInfo.status}
              onChange={(e) => onProductInfoChange(e, "status")}
            >
              <option value="active">Còn bán</option>
              <option value="disabled">Hết hàng</option>
            </select>
          </div>
          <div className="col-6 mt-3 mb-3">
            <label>Mô tả sản phẩm:</label>
            <textarea
              rows="4"
              cols="47"
              value={productInfo.description}
              onChange={(e) => onProductInfoChange(e, "description")}
            />
          </div>
          <div className="col-6 mt-3 mb-3">
            <label>Ảnh sản phẩm:</label>
            <input
              type="file"
              className="form-control"
              onChange={(e) => onFileChange(e)}
            />
          </div>
        </div>
      </form>
      <div className="submit-btn text-end mt-5">
        <button className="btn btn-primary" onClick={handleModalAction}>
          Hoàn tất
        </button>
      </div>
    </Modal>
  );
};

export default ProductModal;
