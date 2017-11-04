import * as rulesActions from './rulesActions';

const rules = [
  {
    id: 1,
    title: 'Rule 1',
    body: `function(obj) {
      return !!obj;
    }`,
    passed_id: 2,
    falied_id: null
  },
  {
    id: 2,
    title: 'Rule 2',
    body: `function(obj) {
      return obj.hasOwnProperty('id');
    }`,
    passed_id: 3,
    falied_id: 4
  },
  {
    id: 3,
    title: 'Rule 3',
    body: `function(obj) {
      return obj.hasOwnProperty('ti1tle');
    }`,
    passed_id: null,
    falied_id: null
  },
  {
    id: 4,
    title: 'Rule 4',
    body: `function(obj) { return obj.hasOwnProperty('ma'); }`,
    passed_id: null,
    falied_id: null
  }
];

describe('rulesActions', () => {
  it('null-string in next rules id parses as null', () => {
    let rule = {
      id: 1,
      title: 'Rule 1',
      body: `function(obj) {
        return !!obj;
      }`,
      passed_id:'null',
      falied_id: null
    };
    let res = rulesActions.createRule(rule).rule;
    expect(res.passed_id).toBeNull();
  });

  it('if this is rule with id, return this rule', () => {
    let resRule = {
      id: 4,
      title: 'Rule 4',
      body: `function(obj) { return obj.hasOwnProperty('ma'); }`,
      passed_id: null,
      falied_id: null
    };
    expect(rulesActions.getRule(rules, 4)).toEqual(resRule);
  });

  it('if this is no rule with id, return error to result array', () => {
    let result = [];
    rulesActions.execute('id', rules, {}, result);
    expect(result[0].error).toBeDefined();
  });

  it('if object incorrect return error', () => {
    let obj = "kjlkj%sajkvbfansm";
    expect(rulesActions.prepareObject(obj)).toBeFalsy();
  });

  it('if object correct json, return json-object', () => {
    let obj = '{"ma": "ma"}';
    let resObj = JSON.parse(obj);
    expect(rulesActions.prepareObject(obj)).toEqual(resObj);
  });

  it('if object correct obj, return js-object', () => {
    let obj = '{ma: "ma"}';
    let resObj = {ma: "ma"};
    expect(rulesActions.prepareObject(obj)).toEqual(resObj);
  });
});
