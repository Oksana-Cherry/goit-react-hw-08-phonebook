const getIsAuthenticated = state => state.auth.token;

const getUserName = state => state.auth.user.name;

// eslint-disable-next-line
export default {
  getIsAuthenticated,
  getUserName,
};
