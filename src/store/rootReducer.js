import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import rulesReducer from './rulesReducer';
import resultReducer from './resultReducer';

export default combineReducers({
  routing: routerReducer,
  rules: rulesReducer,
  result: resultReducer
});
