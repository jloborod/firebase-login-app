import { combineReducers } from 'redux';

import auth from './auth';
import hello from './hello';

export default combineReducers({
  auth,
  hello,
});