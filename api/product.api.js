

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