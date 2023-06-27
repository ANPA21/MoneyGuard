const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectUser = state => state.auth.user;

export { selectIsLoggedIn, selectIsRefreshing, selectUser };
