import "./index.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import ProductModal from "./components/productModal";
import ProductTable from "./components/productTable";
import productAPI from "../../api/product.api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageProduct = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [typeActionModal, setTypeActionModal] = useState();
  const [productToUpdate, setProductToUpdate] = useState();
  const [products, setProducts] = useState([]);

  const notify = (msg, type = "SUCCESS") => {
    toast.success(msg, { type: toast.TYPE[type] });
  };

  function openProductModal(actionType, product = {}) {
    if (actionType === "add") {
      setTypeActionModal("add");
    } else if (actionType === "update") {
      setTypeActionModal("update");
      setProductToUpdate(product);
    }
    setIsModalOpened(true);
  }

  const closeModal = () => {
    setIsModalOpened(false);
  };

  const getProducts = async () => {
    let res = await productAPI.getProducts();
    setProducts([...res.docs]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="container mt-5 mb-5 management-products">
        <div className="title">
          <span onClick={(e) => openProductModal("add")}>
            <IoMdAddCircleOutline /> Thêm sản phẩm
          </span>
          {isModalOpened && (
            <ProductModal
              isModalOpened={isModalOpened}
              closeModal={closeModal}
              typeActionModal={typeActionModal}
              getProducts={getProducts}
              productToUpdate={productToUpdate}
              notify={notify}
            />
          )}
          <h3 className="">QUẢN LÝ SẢN PHẨM</h3>
        </div>

        <ProductTable
          openProductModal={openProductModal}
          products={products}
          getProducts={getProducts}
          notify={notify}
        />
      </div>
      <Footer />
    </>
  );
};

export default ManageProduct;
