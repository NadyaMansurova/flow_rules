export default {
  rules: {
    list: [
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
          return obj.hasOwnProperty('title');
        }`,
        passed_id: null,
        falied_id: null
      },
      {
        id: 4,
        title: 'Rule 4',
        body: `function(obj) {
          return obj.hasOwnProperty('ma');
        }`,
        passed_id: null,
        falied_id: null
      }
    ],
    status: null
  },
  result: {
    list: [],
    error: null
  }
};
