import axios from "axios";
import jwt_decode from "jwt-decode";
import Axios from "./axios";

const createAxiosJWT = (user, dispatch, statusUser) => {
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
        let res = await Axios.post("/v1/auth/refresh");
        let newUser = {
          ...user,
          accessToken: res.data,
        };
        dispatch(statusUser(newUser));
        console.log(res.data)
        config.headers["token"] = "Bearer " + res.data;
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
