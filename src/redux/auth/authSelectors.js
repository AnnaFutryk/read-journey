const selectUser = (state) => state.auth.user;
const selectUserName = (state) => state.auth.user.name;
const selectAvatarURL = (state) => state.auth.user.avatarURL;
const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
const selectToken = (state) => state.auth.token;

const selectUserAuth = (state) => state.auth.user.userAuth;

const authSelectors = {
  selectUser,
  selectUserName,
  selectAvatarURL,
  selectToken,
  selectIsLoggedIn,
  selectUserAuth,
};

export default authSelectors;
