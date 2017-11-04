import * as types from '../constants/actionTypes';
import initialState from './initialState';


export default function resultReducer(state = initialState.rules, action) {
  let newState;

  switch (action.type) {
    case types.CLEAR_STATUS:
      newState = Object.assign([], state);
      newState.status = null;
      return newState;

    case types.ADD_RULE_SUCCESS:
      let isEdit = false;
      newState = Object.assign({}, state);
      newState.list.map(item => {
        if (item.id == action.rule.id) {
          isEdit = true;
        }
      });
      if (!isEdit) {
        newState.list.push(action.rule);
        newState.status = 'ok';
      } else {
        newState.status = 'failed';
      }
      return newState;

    case types.ADD_RULE_ERR:
      newState = Object.assign({}, state);
      newState.status = 'failed';
      return newState;
    case types.REMOVE_RULE:
      newState = Object.assign({}, state);
      let selectedNum = 0;
      newState.list.map((item, i) => {
        if (item.id === action.ruleId) {
          selectedNum = i;
        }
      });

      newState.list.splice(selectedNum, 1);
      return newState;


    default:
      return state;
  }
}
