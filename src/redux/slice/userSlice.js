import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    productsInPayMent: [],
    productsInCart: null
  },
  reducers: {
    getPoductsInPayMent: (state, action) => {
      let _data = [...action.payload]
        state.productsInPayMent = _data
    },
    getProductsInCart: (state, action) => {

    }
  },
});

export const {getPoductsInPayMent, getProductsInCart} = userSlice.actions;
export default userSlice.reducer;
