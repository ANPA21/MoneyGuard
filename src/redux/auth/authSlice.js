const { createSlice } = require('@reduxjs/toolkit');
const { register, logIn, logOut } = require('./operations');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
// const handleUserAuthFulfilled = (state, action) => {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = null;
        state.token = null;
        state.isLoggedIn = false;
      })

      .addCase(register.rejected, (state, action) => state)
      // .addCase(register.pending, (state, action) => state)

      .addCase(logIn.pending, (state, action) => state)
      .addCase(logIn.rejected, (state, action) => state)

      .addCase(logOut.pending, (state, action) => state)
      .addCase(logOut.rejected, (state, action) => state),
});

export const authReducer = authSlice.reducer;
