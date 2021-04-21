import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('auth/registerRequest');
const registerSuccess = createAction('auth/registerRequest');
const registerError = createAction('auth/registerRequest');

const loginRequest = createAction('auth/loginRequest');
const loginSuccess = createAction('auth/loginRequest');
const loginError = createAction('auth/loginRequest');

const logoutRequest = createAction('auth/logoutRequest');
const logoutSuccess = createAction('auth/logoutRequest');
const logoutError = createAction('auth/logoutRequest');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserRequest');
const getCurrentUserError = createAction('auth/getCurrentUserRequest');

/*const authActions = {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
export default authActions;*/

// eslint-disable-next-line
export default {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
};
