import {
  SAY_HELLO,
} from '../actions';

const initialState = {
  init: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return {
        init: true,
      };
    default:
      return state;
  }
};

export default reducer;