export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUsername = state => state.auth.getUsername;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
};
export default authSelectors;
