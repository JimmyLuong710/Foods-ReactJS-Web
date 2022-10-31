// import "./manageProduct.scss";
// import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer";
// import { MdDelete } from "react-icons/md";
// import { GiPencil } from "react-icons/gi";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import Modal from "react-modal";
// import { useState } from "react";
// import { getAllProducts } from "../../redux/apiRequests";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addProduct,
//   addProductImg,
//   deleteProduct,
//   updateProduct,
// } from "../../redux/apiRequests";
// import createAxiosJWT from "../../axiosJWT";
// import { loginSuccess, loginFailed } from "../../redux/slice/authSlice";
// import { useNavigate } from "react-router";

// const customStyles = {
//   content: {
//     margin: "auto auto",
//     width: "800px",
//     height: "530px",
//   },
//   overlay: {
//     backgroundColor: "rgba(0,0,0,.5)",
//   },
// };

// const ManageProduct = () => {
//   let loginUser = useSelector(state => state.auth.login.user)
//   let lisTProducts = useSelector((state) => state.admin.products.products);
//   const [selectedFile, setSelectedFile] = useState();
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [typeActionModal, setTypeActionModal] = useState();
//  const dispatch = useDispatch();
//  const navigate = useNavigate()
//   const axiosJWT = createAxiosJWT(loginUser, dispatch, loginSuccess, loginFailed )

//   let [productInfo, setProductInfo] = useState(
//     {
//       productName: "",
//       price: "",
//       type: "",
//       status: "",
//       description: "",
//       image: "",
//       id: 0,
//       index: 0,
//     });

//   function openModalAddProduct() {
//     setTypeActionModal("add-product");
//     setIsOpen(true);
//     setProductInfo(
//       {
//       productName: "",
//       price: "",
//       type: "",
//       status: "",
//       description: "",
//       image: "",
//       id: 0,
//       index: 0
//     }
//   );
//   }

//   function openModalUpdateProduct(item, index) {
//     setTypeActionModal("update-product");
//     setIsOpen(true);
//     setProductInfo(
//       {
//         productName: item.productName,
//         price: item.price,
//         type: item.type,
//         status: item.status,
//         description: item.description,
//         image: item.image,
//         id: item.id,
//         index: index,
//       },
//     );
//   }
//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   const onProductInfoChange = (e, key) => {
//     setProductInfo(
//       {
//         ...productInfo,
//         [key]: e.target.value,
//       }
//     );
//   };
//   const onImageChange = (e) => {
//     setSelectedFile(e.target.files[0]);
//     setProductInfo(
//       {
//         ...productInfo,
//         image: e.target.files[0].name,
//       });
//   };
//   const handleDeleteProduct = (key) => {
//     deleteProduct(key, loginUser.accessToken, dispatch, axiosJWT);
//   };
//   const handleAddNewProduct = async () => {
//     const data = new FormData();
//     data.append("file", selectedFile);
//     let product = productInfo;
//     if(selectedFile)  await addProductImg(loginUser.accessToken, data, axiosJWT)
//     if (typeActionModal === "add-product") {
//       await addProduct(loginUser.accessToken, dispatch, product, axiosJWT);
//       setProductInfo(
//         {
//           productName: "",
//           price: "",
//           type: "",
//           status: "",
//           description: "",
//           image: "",
//           id: 0,
//           index: 0,
//         },
//       );
//     } else {
//       await updateProduct(product, loginUser?.accessToken, dispatch, axiosJWT);
//     }
//   };

//   useEffect(() => {
//     if(!loginUser) {
//       if(!loginUser || loginUser?.role !== 'admin') {
//         navigate('/')
//         return
//       }
//     }
//     getAllProducts(dispatch);
//   }, []);
//   return (
//     <>
//       <Header />
//       <div className="container mt-5 mb-5 management-products">
//         <div className="title">
//           <span onClick={openModalAddProduct}>
//             <IoMdAddCircleOutline /> Thêm sản phẩm
//           </span>
//           <Modal
//             isOpen={modalIsOpen}
//             onRequestClose={closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//           >
//             <h2 className="text-center">
//               {typeActionModal == "add-product"
//                 ? "THÊM SẢN PHẨM MỚI"
//                 : "SỬA ĐỔI SẢN PHẨM"}
//             </h2>
//             <span
//               className="btn-close-modal"
//               onClick={closeModal}
//               style={{
//                 position: "absolute",
//                 fontSize: "25px",
//                 right: "10px",
//                 top: "-5px",
//                 padding: "3px",
//                 cursor: "pointer",
//                 color: "red",
//               }}
//             >
//               x
//             </span>
//             <form>
//               <div className="row">
//                 <div className="col-6 mb-3 mt-3">
//                   <label>Tên sản phẩm</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={productInfo.productName}
//                     onChange={(e) => onProductInfoChange(e, "productName")}
//                   />
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Gía (vnđ): </label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     value={productInfo.price}
//                     onChange={(e) => onProductInfoChange(e, "price")}
//                   />
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Loại sản phẩm: </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={productInfo.type}
//                     onChange={(e) => onProductInfoChange(e, "type")}
//                   />
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Tính trạng: </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={productInfo.status}
//                     onChange={(e) => onProductInfoChange(e, "status")}
//                   />
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Mô tả sản phẩm:</label>
//                   <textarea
//                     rows="4"
//                     cols="47"
//                     value={productInfo.description}
//                     onChange={(e) => onProductInfoChange(e, "description")}
//                   />
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Ảnh sản phẩm:</label>
//                   <input
//                     type="file"
//                     className="form-control"
//                     onChange={(e) => onImageChange(e)}
//                   />
//                 </div>
//               </div>
//             </form>
//             <div className="submit-btn text-end mt-5">
//               <button className="btn btn-primary" onClick={handleAddNewProduct}>
//                 Hoàn tất
//               </button>
//             </div>
//           </Modal>
//           <h3 className="">QUẢN LÝ SẢN PHẨM</h3>
//         </div>

//         <table className="table table-hover text-center">
//           <thead>
//             <tr>
//               <th>Stt</th>
//               <th>Sản phẩm</th>
//               <th>Giá</th>
//               <th>Loại</th>
//               <th>Tính trạng</th>
//               <th>Mô tả</th>
//               <th>Thao tác</th>
//             </tr>
//           </thead>
//           <tbody>
//             {lisTProducts?.map((item, index) => (
//               <tr key={index}>
//                 <td style={{ width: "5%" }}>{index + 1}</td>
//                 <td style={{ width: "25%" }}>
//                   <div className="img-product">
//                     <img src={process.env.REACT_APP_BACK_END_URL + '/' + item.image} />
//                   </div>
//                   <p className="product-name"> {item.productName} </p>
//                 </td>
//                 <td style={{ width: "10%" }}>{item.price}</td>
//                 <td style={{ width: "10%" }}>{item.type}</td>
//                 <td style={{ width: "10%" }}>{item.status} </td>
//                 <td style={{ width: "30%" }}>{item.description}</td>
//                 <td style={{ width: "10%" }}>
//                   {" "}
//                   <GiPencil
//                     className="pencil"
//                     onClick={(e) => openModalUpdateProduct(item, index)}
//                   />
//                   <MdDelete
//                     className="bin"
//                     onClick={(e) => handleDeleteProduct(item.id)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default ManageProduct;
