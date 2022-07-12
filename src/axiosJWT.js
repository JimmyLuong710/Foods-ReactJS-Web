import axios from "axios";
import jwt_decode from "jwt-decode";
import Axios from "./axios";

const createAxiosJWT = (user, dispatch, loginSuccess, loginFailed) => {
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    // use withCredentials to allow server save cookie to client when different port between back and front
    withCredentials: true,
  });
  instance.interceptors.request.use(
    async (config) => {
      let accessToken = user.accessToken;
      let date = new Date();
      let decodeToken = jwt_decode(accessToken);
      if (decodeToken?.exp < date.getTime() / 1000) {
        try {
        let res = await Axios.post("/v1/auth/refresh");
        let newUser = {
          ...user,
          accessToken: res.data,
        };
        dispatch(loginSuccess(newUser));
        config.headers["token"] = "Bearer " + res.data;
      }catch(err) {
        alert(err.response?.data)
        dispatch(loginFailed())
      }
      }
      return config;
    },
    (error) => {
      Promise.reject(error);
    }
  );

  return instance;
};

export default createAxiosJWT;
