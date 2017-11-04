import * as types from '../constants/actionTypes';
import initialState from './initialState';


export default function rulesReducer(state = initialState.result, action) {
  let newState;

  switch (action.type) {
    case types.EXECUTE_FLOW:
      newState = Object.assign({}, state);
      newState.list = action.result;
      newState.error = null;
      return newState;

    case types.EXECUTE_FLOW_ERR:
      newState = Object.assign({}, state);
      newState.error = action.error;
      return newState;

    default:
      return state;
  }
}
