import { combineReducers } from 'redux';

import user from './user';
import favorites from './favorites';

export default combineReducers({
  favorites,
  user,
});
