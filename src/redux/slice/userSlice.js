import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    productsInPayMent: [],
    productsInCart: [],
    productsInHistory: []
  },
  reducers: {
    getPoductsInPayMent: (state, action) => {
      let _data = [...action.payload]
        state.productsInPayMent = _data
    },
    getProductsInCart: (state, action) => {

    },
    getProductsInHistory: (state, action) => {
      state.getProductsInHistory = action.payload
    }
  },
});

export const {getPoductsInPayMent, getProductsInCart} = userSlice.actions;
export default userSlice.reducer;
