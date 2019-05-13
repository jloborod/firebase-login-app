import { AUTH_INIT } from '../actions/auth';

const initialState = {
  init: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_INIT:
      return {
        init: true,
      };
    default:
      return state;
  }
};

export default reducer;
