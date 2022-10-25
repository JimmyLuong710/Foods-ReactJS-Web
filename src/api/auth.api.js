import {Axios, AxiosAuth} from '../services/AxiosService'

const signIn = async (credentials) => {
    let account = await Axios.post('/auth/sign-in', credentials)
    return account
}

const signUp = async (account) => {
    let response = await Axios.post('/auth/sign-up', account)
    return response
}

const logOut = async () => {
    let response = await AxiosAuth.post('/auth/log-out')
    return response
}

const authAPI = {
    signIn, 
    signUp,
    logOut
}

export default authAPI