import React, { Component } from 'react';
import './rulesPage.css';
import CreateRuleContainer from '../../containers/CreateRuleContainer';
import ListRulesContainer from '../../containers/ListRulesContainer';
import ExecuteFlowContainer from '../../containers/ExecuteFlowContainer';

import './rulesPage.css';

class RulesPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <ol className="flow__list">
          <li className="flow__li">
            <h2 className="flow__h2">Create flow</h2>
            <div className="flow__block">
              <CreateRuleContainer />
            </div>
          </li>
          <li className="flow__li">
            <h2 className="flow__h2">List of rules</h2>
            <div className="flow__block">
              <div className="panel">
                <ListRulesContainer />
              </div>
            </div>
          </li>
          <li className="flow__li">
            <h2 className="flow__h2">Execute flow</h2>
            <div className="flow__block">
              <ExecuteFlowContainer />
            </div>
          </li>
        </ol>
      </div>
    );
  }
  addRule(list) {
    let rule = {};
    return list.push(rule);
  }
  removeRule() {

  }
  editRule() {

  }
}

export default RulesPage;
