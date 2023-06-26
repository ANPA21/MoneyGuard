const { createSlice } = require('@reduxjs/toolkit');
const { register, login } = require('./operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => state)
      .addCase(register.rejected, (state, action) => state)

      .addCase(login.pending, (state, action) => {})
      .addCase(login.fulfilled, (state, action) => {})
      .addCase(login.rejected, (state, action) => {}),
});

export const authReducer = authSlice.reducer;
