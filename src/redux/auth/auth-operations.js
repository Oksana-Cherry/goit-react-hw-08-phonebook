import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';
// eslint-disable-next-line
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

/*const register = credentials => dispatch => {
  dispatch(authActions.registerRequest());
  axios.post('/users/signup', credentials);
};*/
/*POST @ /users/signup
 * body { name, email, password }*/
const register = credentials => async dispatch => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    console.log(response);

    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerError(error.message));
  }
};
// axsios.post('/');
const login = credentials => async dispatch => {
  dispatch(authActions.loginRequest());
  try {
    const response = await axios.post('/users/login', credentials);
    // console.log(response);

    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await axios.post('/users/logout');

    token.unset();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get('/users/current');

    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};

// eslint-disable-next-line
export default { register, login, logOut, getCurrentUser };