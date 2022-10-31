// import ProductCard from "../../components/product-card/product-card";
// import { useSelector } from "react-redux";
// import { useState, useEffect } from "react";
// import { getProductsByKey } from "../../redux/apiRequests";
// import { useParams } from "react-router";
// import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer";

// const Search = () => {
//   const [listPs, setListPs] = useState();
//   const { key } = useParams();
//   useEffect(async () => {
//     let list = await getProductsByKey(key);
//     setListPs(list);
//   }, [key]);

//   return (
//     <>
//       <Header />
//       <div className="container drinks-product">
//         <h2 className="text-center">TẤT CẢ KẾT QUẢ VỚI TỪ KHÓA "{key}"</h2>
//         <ul>
//           {listPs?.map((item, index) => (
//             <li
//               key={index}
//               style={{
//                 display: "inline-block",
//                 width: "242px",
//                 margin: "20px 5px",
//               }}
//             >
//               <ProductCard item={item} />
//             </li>
//           ))}
//         </ul>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Search;
