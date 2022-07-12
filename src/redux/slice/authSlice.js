import {createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth', 
    initialState: {
       login: {
        user: null,
        pending: false,
        error: false,
        loggedIn: false,
        token: ''
       },
       register: {
        pending: false,
        error: false,
        message: ''
       }
    },
    reducers: {
        loginStart: (state) => {
            state.login.pending = true
        },
        loginSuccess: (state, action) => {
            state.login.pending = false
            state.login.error = false
            state.login.user = action.payload
            state.login.loggedIn = true
        },
        loginFailed: (state) => {
            state.login.user = null
            state.login.error = true
            state.login.pending = false
            state.login.loggedIn = false
        },
        registerStart: (state) => {
            state.register.pending = true
        },
        registerSuccess: (state, action) => {
            state.register.pending = false
            state.register.error = false
            state.register.message = action.payload
        }, 
        registerFailed: (state) => {
            state.register.pending = false
            state.register.error = true
        },
        logoutSuccess: (state) => {
            state.login.loggedIn = false
            state.login.token = ''
            state.login.user = null
        }
    }
})

export const {loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed, logoutSuccess} = authSlice.actions
export default authSlice.reducer