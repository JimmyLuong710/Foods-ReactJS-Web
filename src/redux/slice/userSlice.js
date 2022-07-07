import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'user',
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
        }
    }
})

export const {getUsersStart, getUsersSuccess, getUsersFailed, getAllProductsStart, getAllProductsSuccess, getAllProductsFailed} = usersSlice.actions
export default usersSlice.reducer
