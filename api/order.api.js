

export const addOrder = async (accessToken, data, axiosJWT, navigate, type) => {
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