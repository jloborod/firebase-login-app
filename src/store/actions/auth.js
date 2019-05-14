export const AUTH_INIT = 'AUTH/INIT';
export const AUTH_SET_USER = 'AUTH/SET_USER';
export const AUTH_SEND_EMAIL_LINK = 'AUTH/SEND_EMAIL_LINK';
export const AUTH_SEND_EMAIL_LINK_SUCCESS = 'AUTH/SEND_EMAIL_LINK_SUCCESS';
export const AUTH_SEND_EMAIL_LINK_ERROR = 'AUTH/SEND_EMAIL_LINK_ERROR';
export const AUTH_CONFIRM_EMAIL = 'AUTH/CONFIRM_EMAIL';
export const AUTH_CONFIRM_EMAIL_SUCCESS = 'AUTH/CONFIRM_EMAIL_SUCCESS';
export const AUTH_CONFIRM_EMAIL_ERROR = 'AUTH/CONFIRM_EMAIL_ERROR';
export const AUTH_SIGN_IN = 'AUTH/SIGN_IN';
export const AUTH_SIGN_IN_SUCCESS = 'AUTH/SIGN_IN_SUCCESS';
export const AUTH_SIGN_IN_ERROR = 'AUTH/SIGN_IN_ERROR';

export const init = () => ({
  type: AUTH_INIT,
});

export const setUser = (user) => ({
  type: AUTH_SET_USER,
  user,
});

export const sendEmailLink = (email) => ({
  type: AUTH_SEND_EMAIL_LINK,
  email,
});

export const sendEmailLinkSuccess = () => ({
  type: AUTH_SEND_EMAIL_LINK_SUCCESS,
});

export const sendEmailLinkError = () => ({
  type: AUTH_SEND_EMAIL_LINK_ERROR,
});

export const confirmEmail = () => ({
  type: AUTH_CONFIRM_EMAIL,
});

export const confirmEmailSuccess = () => ({
  type: AUTH_CONFIRM_EMAIL_SUCCESS,
});

export const confirmEmailError = () => ({
  type: AUTH_CONFIRM_EMAIL_ERROR,
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
