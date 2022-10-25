

export const logIn = async (user, dispatch, navigate) => {
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
  
  export const signUp = async (user, dispatch, navigate, setUserInfo) => {
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
  
  export const logOut = async (accessToken, axiosJWT,dispatch, navigate) => {
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

  export const refreshToken = async () => {
    
  }