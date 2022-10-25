

export const getAccounts = async (accessToken, dispatch, axiosJWT, navigate) => {
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
  
  export const updateAccount = async (user, setUser, accessToken, dispatch) => {
    try {
      let res = await Axios.put("/v1/user/update-user", user, {
        headers: {
          token: "Bearer " + accessToken,
        },
      });
    } catch (err) {}
  };
  
  export const deleteAccount = async (userId, accessToken, dispatch, axiosJWT) => {
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
  
  export const addAccount = async (user, accessToken, dispatch, axiosJWT) => {
    let res = await axiosJWT.post("v1/user/add-user", user, {
      headers: {
        token: "Bearer " + accessToken,
      },
    });
    dispatch(addUserSuccess(res.data));
    alert("Them tài khoản thành công!");
  };