import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/rulesActions';
import RuleComponent from './RuleComponent';

import './listRules.css';

class ListRulesContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let rules = [];
    this.props.rules.list.map(item => {
      rules.push(<RuleComponent
                    removeRule={this.props.actions.removeRule}
                    key={item.id}
                    showInfo={false}
                    rule={item}/>);
    });
    return rules;
  }

}

function mapStateToProps(state) {
  return {
    rules: state.rules
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListRulesContainer);
