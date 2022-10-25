import { createSlice } from "@reduxjs/toolkit";
import { signIn, signUp, logOut } from "../action/auth.action";

const initialState = {
  account: {
    _id: null,
    avatar: null,
    userName: null,
    email: null,
    accessToken: null,
    refreshToken: null,
  },
  error: null,
  loading: "idle",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reqRefreshToken: (state, action) => {
      state.account.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // SIGN IN
      .addCase(signIn.pending, (state, action) => {
        if (state.loading === "idle") {
          state.loading = "pending";
          state.currentRequestId = action.payload;
        }
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = "idle";
        state.isLoggedIn = true;
        state.account = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.loading = "idle";
        state.error = action.payload;
      })

      // SIGN UP
      .addCase(signUp.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = "idle";
        state.error = null;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.payload;
      })

      // LOG OUT
      .addCase(logOut.pending, (state, action) => {
        state.loading = 'pending'
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = 'idle'
        state.error = null
      })
      .addCase(signUp.rejected, (state, action) => {
        state.loading = 'idle'
        state.isLoggedIn = false
        state.error = action.payload
      });
  },
});

export const { reqRefreshToken } = authSlice.actions;
export default authSlice.reducer;
