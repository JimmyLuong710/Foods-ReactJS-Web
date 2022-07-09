import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
       users: {
        users: null,
        pending: false,
        error: false
       },
        products: {
            products: null,
            pending: false,
            error: false
        }
    },
    reducers: {
        getUsersStart: (state) => {
            state.pending = true
        },
        getUsersSuccess: (state, action) => {
            state.pending = false
            state.error = false
            state.users.users = action.payload
        },
        getUsersFailed: (state) => {
            state.pending = false
            state.error = true
        },
        addUserSuccess: (state, action) => {
            let _users = state.users.users
            _users.push(action.payload)
            state.users.users = _users
        },
        deleteUserSuccess: (state, action) => {
            let _users = state.users.users.filter(u => u.id !== action.payload)
            state.users.users = _users
        },

        getAllProductsStart: (state) => {
            state.pending = true
        },
        getAllProductsSuccess: (state, action) => {
            state.pending = false
            state.error = false
            state.products.products = action.payload
        },
        getAllProductsFailed: (state) => {
            state.pending = false
            state.error = true
        },
        deleteProductSuccess: (state, action) => {
            let _products = state.products.products.filter(p => p.id !== action.payload)
            state.products.products = _products
        },
        addProductSuccess: (state, action) => {
            let _products = state.products.products
            _products.push(action.payload)
            state.products.products = _products
        },
        updateProductSuccess: (state, action) => {
            let _products = state.products.products
            _products[action.payload.index] = action.payload.data
            state.products.products = _products
        }
    }
})

export const {getUsersStart, getUsersSuccess, getUsersFailed, addUserSuccess, deleteUserSuccess,
    getAllProductsStart, getAllProductsSuccess, getAllProductsFailed, deleteProductSuccess, updateProductSuccess, addProductSuccess} = adminSlice.actions
export default adminSlice.reducer
