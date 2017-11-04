import * as types from '../constants/actionTypes';

export function clearStatus() {
  return {
    type: types.CLEAR_STATUS
  }
}

export function createRule(rule) {
  rule.passed_id = rule.passed_id !== 'null' ? rule.passed_id : null;
  rule.failed_id = rule.failed_id !== 'null' ? rule.passed_id : null;
  try {
    let f = new Function("return " + rule.body)();
    return {
      type: types.ADD_RULE_SUCCESS,
      rule: rule
    }
  } catch (err){
    return {
      type: types.ADD_RULE_ERR,
      rule: rule
    }
  }

}

export function removeRule(ruleId) {
  return {
    type: types.REMOVE_RULE,
    ruleId: ruleId
  }
}

export function executeFlow(rules, obj) {
  let val = prepareObject(obj);
  let result = [];
  if (!val) {
    return {
      type: types.EXECUTE_FLOW_ERR,
      error: 'Incorrect object'
    }

  } else {
    nextRule(rules[0], rules, val, result);
    return {
      type: types.EXECUTE_FLOW,
      result: result
    }
  }

}

export function prepareObject(obj) {
  try {
    return JSON.parse(obj);
  } catch (err) {
    try {
      return eval('(' + obj + ')');
    } catch (err) {
      return;
    }
  }
}

export function getRule(rules, id) {
  let rule;
  rules.map(item => {
    if (+item.id === +id) {
      rule = item;
    }
  });
  return rule;
}

export function nextRule(rule, rules, obj, result){
  let res = checkRule(rule, obj);
  result.push({
    id: rule.id,
    title: rule.title,
    result: res
  });
  if (res) {
    if (rule.passed_id) {
      execute(rule.passed_id, rules, obj, result);
    }
  } else {
    if (rule.falied_id) {
      execute(rule.falied_id, rules, obj, result);
    }
  }
}

export function execute(id, rules, obj, result) {
  let newRule = getRule(rules, id);
  if (newRule) {
    nextRule(newRule, rules, obj, result);
  } else if (id){
    result.push({
      id: id,
      title: 'No rule with id ' + id,
      error: true,
      result: false
    });
  }
}


export function checkRule(rule, obj) {
  if (!rule) {
    return false;
  }
  try {
    let f = new Function("return " + rule.body)();
    return f(obj);
  } catch (err) {
    return false;
  }
}
