import {
  AUTH_INIT,
  AUTH_SET_USER,
  AUTH_SEND_EMAIL_LINK_SUCCESS,
  AUTH_SEND_EMAIL_LINK_ERROR,
  AUTH_CONFIRM_EMAIL,
  AUTH_CONFIRM_EMAIL_SUCCESS,
  AUTH_CONFIRM_EMAIL_ERROR,
  AUTH_SIGN_IN,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_IN_ERROR,
} from '../actions/auth';

const initialState = {
  init: false,
  user: null,
  emailSent: false,
  confirm: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return {
        ...state,
        init: true,
      };
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case AUTH_SEND_EMAIL_LINK_SUCCESS:
      return {
        ...state,
        emailSent: true,
      };
    case AUTH_SEND_EMAIL_LINK_ERROR:
      return {
        ...state,
        emailSent: false,
      };
    case AUTH_CONFIRM_EMAIL:
      return {
        ...state,
        emailSent: true,
        confirm: true,
      };
    default:
      return state;
  }
};

export default reducer;
