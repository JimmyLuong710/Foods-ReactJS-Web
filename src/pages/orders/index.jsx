import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import "./index.scss";
import OrderList from "./components/orderedList";
import orderAPI from "../../api/order.api";
import ReactPaginate from "react-paginate";
import { useCallback } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});

  const getOrders = useCallback(async () => {
    let res = await orderAPI.getOrders({ page: currentPage, limit: 5 });
    setOrders([...res.docs]);
    setPagination(res.pagination);
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <>
      <Header />
      <OrderList orders={orders} />

      {orders.length > 0 && (
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
      <Footer />
    </>
  );
};

export default Orders;
