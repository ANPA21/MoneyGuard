const { createSlice } = require('@reduxjs/toolkit');
const { register, logIn, logOut, refreshUser } = require('./operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const registerFulfilledReducer = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const logInFulfilledReducer = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const logOutFulfilledReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshUserFulfilledReducer = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const pendingRefreshUserReducer = state => {
  state.isRefreshing = true;
};

const rejectedRefreshUserReducer = (state, { payload }) => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, registerFulfilledReducer)
      .addCase(logIn.fulfilled, logInFulfilledReducer)
      .addCase(logOut.fulfilled, logOutFulfilledReducer)
      .addCase(refreshUser.pending, pendingRefreshUserReducer)
      .addCase(refreshUser.fulfilled, refreshUserFulfilledReducer)
      .addCase(refreshUser.rejected, rejectedRefreshUserReducer);
  },
});

export const authReducer = authSlice.reducer;
