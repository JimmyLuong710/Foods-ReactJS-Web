


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
