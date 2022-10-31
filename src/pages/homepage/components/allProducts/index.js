import ProductCard from "../../../../components/productCard";
import { useSelector } from "react-redux";

const AllProduct = () => {
  let allProduct = useSelector((state) => state.admin.products.products);
  return (
    <div className="container all-product">
      <h2 className="text-center">TẤT CẢ SẢN PHẨM TẠI NHÀ HÀNG</h2>
      <ul>
        {allProduct?.map((item, index) => (
          <li
            style={{
              display: "inline-block",
              width: "242px",
              margin: "20px 5px",
            }}
          >
            <ProductCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProduct;
