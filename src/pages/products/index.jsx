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
import ReactPaginate from "react-paginate";
import { useCallback } from "react";


const ManageProduct = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [typeActionModal, setTypeActionModal] = useState();
  const [productToUpdate, setProductToUpdate] = useState();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});

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

  const getProducts = useCallback(async () => {
    let res = await productAPI.getProducts({page: currentPage});
    setProducts([...res.docs]);
    setPagination(res.pagination)
  }, [currentPage])

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

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
        
        {products.length > 0 && (
          <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pagination.totalPages}
            previousLabel="< prev"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default ManageProduct;
