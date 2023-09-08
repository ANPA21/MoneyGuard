import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
const { createSlice } = require('@reduxjs/toolkit');
const { register, logIn, logOut, refreshUser } = require('./operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleRegisterFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogInFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleRefreshUserFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handlePendingRefreshUser = state => {
  state.isRefreshing = true;
};

const handleRejectedRefreshUser = (state, { payload }) => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(logIn.fulfilled, handleLogInFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.pending, handlePendingRefreshUser)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRejectedRefreshUser);
  },
});

const authPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const authReducer = authSlice.reducer;
export const PersistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
