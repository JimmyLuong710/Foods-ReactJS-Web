import Header from "../../components/header";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import OrderList from "./components/orderedList";
import orderAPI from "../../api/order.api";
import ReactPaginate from "react-paginate";
import { useCallback } from "react";


const OrdersPending = ({ notify }) => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({});

  const getOrders = useCallback(async () => {
    let res = await orderAPI.getOrderPending({page: currentPage});
    setOrders([...res.docs]);
    setPagination(res.pagination)
  }, [currentPage]);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected + 1);
  };

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  return (
    <div>
      <Header />
      <OrderList orders={orders} getOrders={getOrders} notify={notify} />
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
    </div>
  );
};

export default OrdersPending;
