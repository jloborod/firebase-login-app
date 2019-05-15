export const AUTH_INIT = 'AUTH/INIT';
export const AUTH_SET_USER = 'AUTH/SET_USER';
export const AUTH_NO_USER_FOUND = 'AUTH/NO_USER_FOUND';
export const AUTH_GET_USER = 'AUTH/GET_USER';
export const AUTH_GET_USER_SUCCESS = 'AUTH/GET_USER_SUCCESS';
export const AUTH_GET_USER_ERROR = 'AUTH/GET_USER_ERROR';
export const AUTH_SEND_EMAIL_LINK = 'AUTH/SEND_EMAIL_LINK';
export const AUTH_SEND_EMAIL_LINK_SUCCESS = 'AUTH/SEND_EMAIL_LINK_SUCCESS';
export const AUTH_SEND_EMAIL_LINK_ERROR = 'AUTH/SEND_EMAIL_LINK_ERROR';
export const AUTH_CHECK_EMAIL_LINK = 'AUTH/CHECK_EMAIL_LINK';
export const AUTH_CHECK_EMAIL_LINK_SUCCESS = 'AUTH/CHECK_EMAIL_LINK_SUCCESS';
export const AUTH_CHECK_EMAIL_LINK_ERROR = 'AUTH/CHECK_EMAIL_LINK_ERROR';
export const AUTH_SIGN_IN = 'AUTH/SIGN_IN';
export const AUTH_SIGN_IN_SUCCESS = 'AUTH/SIGN_IN_SUCCESS';
export const AUTH_SIGN_IN_ERROR = 'AUTH/SIGN_IN_ERROR';
export const AUTH_SIGN_OUT = 'AUTH/SIGN_OUT';
export const AUTH_SIGN_OUT_SUCCESS = 'AUTH/SIGN_OUT_SUCCESS';
export const AUTH_SIGN_OUT_ERROR = 'AUTH/SIGN_OUT_ERROR';
export const AUTH_START_LOADING = 'AUTH/START_LOADING';
export const AUTH_STOP_LOADING = 'AUTH/STOP_LOADING';

export const init = () => ({
  type: AUTH_INIT,
});

export const setUser = (user) => ({
  type: AUTH_SET_USER,
  user,
});

export const noUserFound = () => ({
  type: AUTH_NO_USER_FOUND,
});

export const getUser = () => ({
  type: AUTH_GET_USER,
});

export const getUserSuccess = user => ({
  type: AUTH_GET_USER_SUCCESS,
  user,
});

export const getUserError = () => ({
  type: AUTH_GET_USER_ERROR,
});

export const sendEmailLink = email => ({
  type: AUTH_SEND_EMAIL_LINK,
  email,
});

export const sendEmailLinkSuccess = () => ({
  type: AUTH_SEND_EMAIL_LINK_SUCCESS,
});

export const sendEmailLinkError = () => ({
  type: AUTH_SEND_EMAIL_LINK_ERROR,
});

export const checkEmailLink = () => ({
  type: AUTH_CHECK_EMAIL_LINK,
});

export const checkEmailLinkSuccess = () => ({
  type: AUTH_CHECK_EMAIL_LINK_SUCCESS,
});

export const checkEmailLinkError = (error) => ({
  type: AUTH_CHECK_EMAIL_LINK_ERROR,
  error,
});

export const signIn = (email, link) => ({
  type: AUTH_SIGN_IN,
  email,
  link,
});

export const signInSuccess = () => ({
  type: AUTH_SIGN_IN_SUCCESS,
});

export const signInError = () => ({
  type: AUTH_SIGN_IN_ERROR,
});

export const signOut = () => ({
  type: AUTH_SIGN_OUT,
});

export const signOutSuccess = () => ({
  type: AUTH_SIGN_OUT_SUCCESS,
});

export const signOutError = () => ({
  type: AUTH_SIGN_OUT_ERROR,
});

export const setLoading = loading =>
  loading
    ? {
        type: AUTH_START_LOADING,
      }
    : {
        type: AUTH_STOP_LOADING,
      };

export default {
  AUTH_INIT,
  AUTH_SET_USER,
  AUTH_NO_USER_FOUND,
  AUTH_GET_USER_SUCCESS,
  AUTH_GET_USER_ERROR,
  AUTH_SEND_EMAIL_LINK,
  AUTH_SEND_EMAIL_LINK_SUCCESS,
  AUTH_SEND_EMAIL_LINK_ERROR,
  AUTH_CHECK_EMAIL_LINK,
  AUTH_CHECK_EMAIL_LINK_SUCCESS,
  AUTH_CHECK_EMAIL_LINK_ERROR,
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_OUT,
  AUTH_SIGN_OUT_SUCCESS,
  AUTH_SIGN_OUT_ERROR,
  AUTH_START_LOADING,
  AUTH_STOP_LOADING,
  init,
  setUser,
  noUserFound,
  getUser,
  getUserSuccess,
  getUserError,
  sendEmailLink,
  sendEmailLinkSuccess,
  sendEmailLinkError,
  checkEmailLink,
  checkEmailLinkSuccess,
  checkEmailLinkError,
  signIn,
  signInSuccess,
  signInError,
  signOut,
  signOutSuccess,
  signOutError,
  setLoading,
};
