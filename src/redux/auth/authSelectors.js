const selectUserName = (state) => state.auth.name;
const selectAvatarURL = (state) => state.auth.avatarURL;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectIsRefreshing = (state) => state.auth.isRefreshing;
const selectToken = (state) => state.auth.token;

const authSelectors = {
  selectUserName,
  selectAvatarURL,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
};

export default authSelectors;
