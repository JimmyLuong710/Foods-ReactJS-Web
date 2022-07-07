import axios from 'axios'

const Axios = axios.create({
    baseURL: 'http://localhost:8000',
    // use withCredentials to allow server save cookie to client when different port between back and front
    withCredentials: true
})

export default Axios