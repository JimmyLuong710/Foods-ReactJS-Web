import "./index.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState, useEffect, useRef } from "react";
import ProductModal from "./components/productModal";
import ProductTable from "./components/productTable";
import productAPI from "../../api/product.api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactPaginate from "react-paginate";
import { useCallback } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const ManageProduct = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [typeActionModal, setTypeActionModal] = useState();
  const [productToUpdate, setProductToUpdate] = useState();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});
  const [keySearch, setKeySearch] = useState("")
  let page = useRef(1)


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

  const onKeySearchChange = (e) => {
    setKeySearch(e.target.value)
    if(e.target.value) {
      setCurrentPage(1);
    } else {
      setCurrentPage(page.current);
    }
  };

  const getProducts = useCallback(
    async (params = { page: currentPage, limit: 5, key: keySearch }) => {
      let res = await productAPI.getProducts(params);
      setProducts([...res.docs]);
      setPagination(res.pagination);
    },
    [currentPage, keySearch]
  );

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
    page.current = event.selected + 1
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
          <h3 className="">QUẢN LÝ SẢN PHẨM</h3>
          <div className="btn-action">
            <span>
              <input
                type="text"
                onChange={onKeySearchChange}
                placeholder="Tìm kiếm"
              />{" "}
              <AiOutlineSearch className="search" />
            </span>
            <span onClick={(e) => openProductModal("add")}>
              <IoMdAddCircleOutline /> Thêm sản phẩm
            </span>
          </div>

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
        </div>

        <ProductTable
          openProductModal={openProductModal}
          products={products}
          getProducts={getProducts}
          notify={notify}
          currentPage={currentPage}
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
