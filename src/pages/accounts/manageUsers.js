// import "./manageUsers.scss";
// import { IoMdAddCircleOutline } from "react-icons/io";
// import Header from "../../components/header/header";
// import Footer from "../../components/footer/footer";
// import { MdDelete } from "react-icons/md";
// import { GiPencil } from "react-icons/gi";
// import Modal from "react-modal";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router";
// import { useEffect } from "react";
// import { getAllUsers, addUser, deleteUser } from "../../redux/apiRequests";
// import createAxiosJWT from "../../axiosJWT";
// import { loginSuccess, loginFailed } from "../../redux/slice/authSlice";

// const customStyles = {
//   content: {
//     margin: "auto auto",
//     width: "800px",
//     height: "460px",
//   },
//   overlay: {
//     backgroundColor: 'rgba(0,0,0,.5)'
//   }
// };

// const ManageUsers = () => {
//   let loginUser = useSelector(state => state.auth.login.user)
//   let listUsers = useSelector(state => state.admin.users.users)
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const dispatch = useDispatch()
//   let navigate = useNavigate()
//   let axiosJWT = createAxiosJWT(loginUser, dispatch,loginSuccess, loginFailed)

//   let [userInfo, setUserInfo] = useState({
//     userName: "",
//     email: "",
//     phone: "",
//     password: "",
//     cfPassword: "",
//   });
//   let [message, setMessage] = useState({
//     userName: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   let user = {
//     userName: userInfo.userName,
//     email: userInfo.email,
//     phone: userInfo.phone,
//     password: userInfo.password
//   }
//   const onUserInfoChange = (e, key) => {
//     setUserInfo({
//       ...userInfo,
//       [key]: e.target.value,
//     })
//   }

//   function openModal() {
//     setIsOpen(true);
//   }

//   const closeModal = () => {
//     setIsOpen(false)
//   }
//   const handleAddUser = async () => {
//     let userNameM = userInfo.userName
//       ? ""
//       : "Tên người dùng không được để trống";
//     let emailM = userInfo.email ? "" : "Email không được để trống";
//     let phoneM = userInfo.phone ? "" : "Số điện không được để trống";
//     let passwordM = userInfo.password ? "" : "Mật không được để trống";

//     if(userInfo.userName.includes(' ') && !userNameM) 
//       userNameM = "Tên đăng nhập không được chứa khoảng trống"
//     if (!userInfo.email.endsWith("@gmail.com") && !emailM)
//       emailM = "Địa chỉ email không hợp lệ";
//     if (!phoneM && (userInfo.phone[0] != "0" || !userInfo.phone.match(/^-?\d+$/) || userInfo.phone.length !== 10 ))
//       phoneM = "số điện thoại không hợp lệ";
//     if (userInfo.password.length <= 5 && !passwordM) {
//       passwordM = "Mật khẩu phải dài hơn 5 ký tự";
//     } else if (userInfo.password !== userInfo.cfPassword) {
//       passwordM = "Mật khẩu bạn nhập không trùng nhau";
//     }
//     if (!userNameM && !emailM && !phoneM && !passwordM) {
//       try {
//       await addUser(user, loginUser.accessToken,dispatch, axiosJWT)
//       setUserInfo({
//         userName: '',
//         email: '',
//         phone: '',
//         password: '',
//         cfPassword: ''
//       })
//       } catch(err) {
//         alert(err.response.data)
//       }
//     }

//     setMessage({
//       userName: userNameM,
//       email: emailM,
//       phone: phoneM,
//       password: passwordM,
//     });
//   };
  
//   const handleDeleteUser = (item) => {
//     if(item.role === 'admin') alert('không thể xóa admin')
//     else  deleteUser(item.id, loginUser.accessToken, dispatch, axiosJWT)
//   };
  
//   useEffect(() => {
//     if(!loginUser) {
//       navigate('/')
//       return
//     }
//     getAllUsers(loginUser?.accessToken ,dispatch, axiosJWT, navigate)
//   }, []);

//   return (
//     <>
//       <Header />
//       <div className="container mt-5 mb-5 management-users">
//         <div className="title">
//           <span onClick={openModal}>
//             <IoMdAddCircleOutline /> Thêm người dùng
//           </span>
//           <Modal
//             isOpen={modalIsOpen}
//             onRequestClose={closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//           >
//             <h2 className="text-center">THÊM NGƯỜI DÙNG MỚI</h2>
//             <span className='btn-close-modal'
//              onClick={closeModal}
//             style={{
//               position: 'absolute',
//               fontSize: '25px',
//               right: '10px',
//               top: '-5px',
//               padding: '3px',
//               cursor: 'pointer',
//               color: 'red'
//             }}>x</span>

//             <form className="adduser-form">
//               <div className="row">
//                 <div className="col-6 mb-3 mt-3">
//                  <label>Tên đăng nhập:</label>
//                   <input type="text" className="form-control" 
//                   value={userInfo.userName}
//                   onChange={(e) => onUserInfoChange(e,'userName')}
//                   />
//                    <p className="message"> {message.userName}</p>
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Mật khẩu:</label>
//                   <input type="password" className="form-control"
//                    value={userInfo.password}
//                    onChange={(e) => onUserInfoChange(e,'password')}
//                   />
//                   <p className="message"> {message.password}</p>
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Email:</label>
//                   <input type="text" className="form-control"
//                   value={userInfo.email}
//                   onChange={(e) => onUserInfoChange(e,'email')}
//                   />
//                   <p className="message"> {message.email}</p>
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Nhập lại mật khẩu: </label>
//                   <input type="password" className="form-control" 
//                    value={userInfo.cfPassword}
//                    onChange={(e) => onUserInfoChange(e,'cfPassword')}
//                   />
//                 </div>
//                 <div className="col-6 mt-3 mb-3">
//                   <label>Số điện Thoại:</label>
//                   <input type="text" className="form-control"
//                    value={userInfo.phone}
//                    onChange={(e) => onUserInfoChange(e,'phone')}
//                     />
//                     <p className="message"> {message.phone}</p>
//                 </div>
//               </div>
//             </form>
//             <div className="submit-btn text-end mt-5">
//                 <button className="btn btn-primary" onClick={() => handleAddUser()}>
//                   Hoàn tất
//                 </button>
//               </div>
//           </Modal>

//           <h3 className="">QUẢN LÝ TÀI KHOẢN NGƯỜI DÙNG</h3>
//         </div>

//         <table className="table table-hover text-center">
//           <thead>
//             <tr>
//               <th>Stt</th>
//               <th>Tên đăng nhập</th>
//               <th>Email</th>
//               <th>Số điện thoại</th>
//               <th>Vai trò</th>
//               <th>Thao tác</th>
//             </tr>
//           </thead>
//           <tbody>
//             {listUsers?.map((item, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{item.userName}</td>
//                 <td>{item.email}</td>
//                 <td>{item.phone}</td>
//                 <td>{item.role}</td>
//                 <td>
//                   {" "}
//                   <MdDelete
//                     className="bin"
//                     onClick={(e) => handleDeleteUser(item)}
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

// export default ManageUsers;
