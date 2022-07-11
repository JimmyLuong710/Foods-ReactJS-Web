import Axios from "../axios";
import {
  loginStart,
  loginSuccess,
  loginFailed,
  registerStart,
  registerSuccess,
  registerFailed,
  logoutSuccess
} from "./slice/authSlice";
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailed,
  addUserSuccess,
  getAllProductsStart,
  deleteUserSuccess,
  getAllProductsSuccess,
  getAllProductsFailed,
  deleteProductSuccess,
  updateProductSuccess,
  addProductSuccess,
} from "./slice/adminSlice";


export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    let res = await Axios.post("v1/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
    alert(err.response?.data);
  }
};

export const registerUser = async (user, dispatch, navigate, setUserInfo) => {
  dispatch(registerStart());
  try {
    let res = await Axios.post("v1/auth/register", user);
    dispatch(registerSuccess(res.data));
    if(window.confirm("Tạo tài khoản thành công!\n Chuyển đến đăng nhập?")) {
      navigate('/login')
    } else {
      setUserInfo({
        userName: "",
        email: "",
        phone: "",
        password: "",
        cfPassword: ""
      })
    }
  } catch (err) {
    dispatch(registerFailed());
    alert(err.response.data);
  }
};

export const logoutUser = async (accessToken, axiosJWT,dispatch, navigate) => {
  try {
    await axiosJWT.delete('/v1/auth/log-out', {
      headers: {
        token: "Bearer " + accessToken,
      }
    })
    dispatch(logoutSuccess())
    navigate('/')
  } catch(err) {
    console.log(err);
    alert(err.response?.data)
  }
}

export const getAllUsers = async (accessToken, dispatch, axiosJWT, navigate) => {
  getUsersStart();
  try {
    const res = await axiosJWT.get("/v1/user/get-all-user", {
      headers: {
        token: "Bearer " + accessToken,
      },
    });
    navigate('/manage-user')
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailed());
    navigate('/')
  }
};

export const updateUser = async (user, setUser, accessToken, dispatch) => {
  try {
    let res = await Axios.put("/v1/user/update-user", user, {
      headers: {
        token: "Bearer " + accessToken,
      },
    });
  } catch (err) {}
};

export const deleteUser = async (userId, accessToken, dispatch, axiosJWT) => {
  try {
    let res = await axiosJWT.delete(`/v1/user/delete-user/${userId}`, {
      headers: {
        token: "Bearer " + accessToken,
      },
    });
    dispatch(deleteUserSuccess(userId));
    alert(res.data);
  } catch (err) {
    console.log(err);
    alert(err.response?.data);
  }
};

export const addUser = async (user, accessToken, dispatch, axiosJWT) => {
  let res = await axiosJWT.post("v1/user/add-user", user, {
    headers: {
      token: "Bearer " + accessToken,
    },
  });
  dispatch(addUserSuccess(res.data));
  alert("Them tài khoản thành công!");
};

export const getAllProducts = async (dispatch) => {
  getAllProductsStart();
  try {
    const res = await Axios.get("/v1/user/get-all-product");
    dispatch(getAllProductsSuccess(res.data));
  } catch (err) {
    dispatch(getAllProductsFailed());
  }
};

export const addProductImg = async (accessToken, data, axiosJWT) => {
  try {
    let res = await axiosJWT.post("/v1/user/add-product-img", data, {
      headers: {
        token: "Bearer " + accessToken,
      },
    });
  } catch (err) {
    alert(err.response.data);
  }
};
export const addProduct = async (accessToken, dispatch, product, axiosJWT) => {
  try {
    let res = await axiosJWT.post("/v1/user/add-product", product, {
      headers: {
        token: "Bearer " + accessToken,
      },
    });
    dispatch(addProductSuccess(res.data));
    alert("them san pham thanh cong");
  } catch (err) {
    alert(err.response.data);
  }
};

export const deleteProduct = async (
  productId,
  accessToken,
  dispatch,
  axiosJWT
) => {
  try {
    let res = await axiosJWT.delete(`/v1/user/delete-product/${productId}`, {
      headers: {
        token: "Bearer " + accessToken,
      },
    });
    dispatch(deleteProductSuccess(productId));
    alert(res.data);
  } catch (err) {
    console.log(err);
    alert(err.response?.data);
  }
};

export const updateProduct = async (
  product,
  accessToken,
  dispatch,
  axiosJWT
) => {
  try {
    let res = await axiosJWT.put(
      `/v1/user/update-product/${product.id}`,
      product,
      {
        headers: {
          token: "Bearer " + accessToken,
        },
      }
    );
    let data = {
      data: res.data,
      index: product.index,
    };
    dispatch(updateProductSuccess(data));
    alert("cap nhat thanh cong");
  } catch (err) {
    console.log(err);
    alert(err.response?.data);
  }
};

export const getOneProduct = async (id) => {
  try {
    let data = await Axios.get(`/v1/user/get-one-product/${id}`);
    return data.data;
  } catch (err) {
    alert(err.response.data);
  }
};

export const getProductsByKey = async (key) => {
  try {
    let res = await Axios.get(`/v1/user/get-product-by-key/${key}`);
    return res.data;
  } catch (err) {
    alert(err.response.data);
  }
};

export const addToCart = async (accessToken, addition, axiosJWT, navigate) => {
  try {
    await axiosJWT.post("/v1/user/add-to-cart", addition, {
      headers: {
        token: "Bearer " + accessToken
      }
    });
    alert('Them vao gio thanh cong')
  } catch (err) {
    console.log(err);
     alert(err.response?.data);
     navigate('/')
  }
};

export const getProductsInCart = async (accessToken,userId, axiosJWT) => {
  try {
    let res = await axiosJWT.get(`/v1/user/get-product-in-cart/${userId}`, {
        headers: {
          token: "Bearer " + accessToken
        }
      })
      return res.data
  } catch (err) {
    console.log(err);
    alert(err.response?.data);
  }
};

export const updateProductInCart = async (accessToken, addition, axiosJWT) => {
    try {
        await axiosJWT.put("/v1/user/update-product-in-cart", addition, {
          headers: {
            token: "Bearer " + accessToken
          }
        });
      } catch (err) {
        console.log(err);
        alert(err.response?.data);
      }
}

export const deleteProductInCart = async (accessToken, addition, axiosJWT, navigate) => {
    try {
        await axiosJWT.delete(`/v1/user/delete-product-in-cart?userId=${addition.userId}&productId=${addition.productId}`, {
          headers: {
            token: "Bearer " + accessToken
          }
        });
      } catch (err) {
        console.log(err);
        alert(err.response?.data);
        navigate('/')
      }
}

export const payProducts = async (accessToken, data, axiosJWT, navigate, type) => {
  try {
    await axiosJWT.post(`/v1/user/payment`, data, {
      headers: {
        token: "Bearer " + accessToken
      }
    });
    if(type === 'cart') {
      // DELETE ALL PRODDUCTS IN CART OF USER
      await axiosJWT.delete(`/v1/user/delete-all-in-cart`, {
        headers: {
          token: "Bearer " + accessToken
        }
      });
    }
    if(window.confirm('Đơn đang chờ duyệt\n Mua tiếp?')) {
      navigate('/')
    } else {
      navigate('/')
    }
  } catch (err) {
    console.log(err);
    alert(err.response?.data);
    // navigate('/')
  }
}

export const getProductsInHistory = async (accessToken, axiosJWT) => {
  try {
    let res = await axiosJWT.get(`/v1/user/get-products-in-history`, {
      headers: {
        token: "Bearer " + accessToken
      }
    });
    return res.data
  } catch (err) {
    console.log(err);
    alert(err.response?.data);
  }
}

export const getProductsInHandleOrdered = async (accessToken, axiosJWT) => {
  try {
    let res = await axiosJWT.get(`/v1/user/get-products-in-handle-ordered`, {
      headers: {
        token: "Bearer " + accessToken
      }
    });
    return res.data
  } catch (err) {
    console.log(err);
    alert(err.response?.data);
    // navigate('/')
  }
}

export const handleOrdered = async (accessToken,data, axiosJWT) => {
  try {
    await axiosJWT.put(`/v1/user/handle-ordered`, data, {
      headers: {
        token: "Bearer " + accessToken
      }
    });
    alert('Xử lý thành công!')
  } catch (err) {
    console.log(err);
    alert(err.response?.data);
  }
}
