import {
  AUTH_INIT,
  AUTH_SET_USER,
  AUTH_GET_USER,
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
} from '../actions/auth';

const initialState = {
  isAuthReady: false,
  isInitialised: false,
  user: null,
  emailSent: false,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return {
        ...state,
        isInitialised: true,
      };
    case AUTH_SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case AUTH_GET_USER:
      return {
        ...state,
        loading: true,
      };
    case AUTH_GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.user,
      };
    case AUTH_GET_USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    case AUTH_SEND_EMAIL_LINK:
      return {
        ...state,
        loading: true,
      };
    case AUTH_SEND_EMAIL_LINK_SUCCESS:
      return {
        ...state,
        loading: false,
        emailSent: true,
      };
    case AUTH_SEND_EMAIL_LINK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case AUTH_CHECK_EMAIL_LINK:
      return {
        ...state,
        loading: true,
      };
    case AUTH_CHECK_EMAIL_LINK_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case AUTH_CHECK_EMAIL_LINK_ERROR:
      return {
        ...state,
        loading: false,
      };
    case AUTH_SIGN_IN:
      return {
        ...state,
        loading: true,
      }
    case AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case AUTH_SIGN_IN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case AUTH_SIGN_OUT:
      return {
        ...state,
        loading: true,
      }
    case AUTH_SIGN_OUT_SUCCESS:
      return {
        ...state,
        loading: false,
        user: null,
      }
    case AUTH_SIGN_OUT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case AUTH_START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case AUTH_STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
