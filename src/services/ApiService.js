import axios from 'axios'

class ApiService {

    const Axios = axios.create({
        baseURL: process.env.REACT_APP_BACK_END_URL,
        // 'https://my-foods-web.herokuapp.com',
        // use withCredentials to allow server save cookie to client when different port between back and front
        withCredentials: true
    })
}