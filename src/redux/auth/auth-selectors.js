export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getIsFetchingCurrent = state => state.auth.isFetchingUser;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsFetchingCurrent,
};
export default authSelectors;
