import Axios from "../axios";
import { loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed } from "./slice/authSlice";
import { getUsersStart, getUsersSuccess, getUsersFailed, getAllProductsStart, getAllProductsSuccess, getAllProductsFailed } from "./slice/userSlice";

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        let res = await Axios.post('v1/auth/login', user)
        dispatch(loginSuccess(res.data))   
        navigate('/') 
    } catch(err) {
        dispatch(loginFailed())
        alert(err.response.data)
    }
}

export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart())
    try {
        let res = await Axios.post('v1/auth/register', user)
        dispatch(registerSuccess(res.data))
        alert('Tạo tài khoản thành công!')
    } catch(err) {
        dispatch(registerFailed())
        alert(err.response.data)
    }
}

export const getAllUsers = async (accessToken, dispatch) => {
    getUsersStart()
    try {
       const res = await Axios.get('/v1/user/get-all-user', {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(getUsersSuccess(res.data))
    } catch(err) {
        dispatch(getUsersFailed())
    }
}

export const updateUser = async (user, setUser, accessToken, dispatch) => {
    try {
       let res = await Axios.post('/v1/user/update-user', user)
    } catch(err) {
       
    }
}
export const getAllProducts = async (accessToken, dispatch) => {
    getAllProductsStart()
    try {
       const res = await Axios.get('/v1/user/get-all-product', {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })
        dispatch(getAllProductsSuccess(res.data))
    } catch(err) {
        dispatch(getAllProductsFailed())
    }
}

export const addProduct = async (accessToken, product) => {
    try {
        let res = await Axios.post('/v1/user/add-product', product)
        alert(res.data)
    } catch(err) {
        alert(err.response.data)
    }
}


