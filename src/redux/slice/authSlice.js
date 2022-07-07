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
            state.login.error = true
            state.login.pending = false
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
        }
    }
})

export const {loginStart, loginSuccess, loginFailed, registerStart, registerSuccess, registerFailed} = authSlice.actions
export default authSlice.reducer