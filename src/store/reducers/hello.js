import { SAY_HELLO } from '../actions/hello';

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAY_HELLO:
      return state;
    default:
      return state;
  }
};

export default reducer;
