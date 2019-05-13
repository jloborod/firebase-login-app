import { AUTH_INIT, AUTH_SET_USER } from '../actions/auth';

const initialState = {
  init: false,
  user: null,
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
      }
    default:
      return state;
  }
};

export default reducer;
