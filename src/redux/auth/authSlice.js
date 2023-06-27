import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const { createSlice } = require('@reduxjs/toolkit');
const { register, logIn, logOut, refresh } = require('./operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const handleUserAuthFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, handleUserAuthFulfilled)
      .addCase(register.fulfilled, handleUserAuthFulfilled)
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(register.rejected, (state, action) => state)
      .addCase(register.pending, (state, action) => state)

      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.rejected, (state, action) => state)

      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.rejected, (state, action) => state)

      .addCase(refresh.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refresh.rejected, (state, action) => {
        state.isRefreshing = false;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      }),
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const authReducer = authSlice.reducer;
export const persistedAuthReducer = persistReducer(persistConfig, authReducer);
