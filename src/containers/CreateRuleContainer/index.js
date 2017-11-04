import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/rulesActions';
import CreateRuleComponent from './CreateRuleComponent';

import './createRule.css';

class CreateRuleContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <CreateRuleComponent
          addRule={this.props.actions.createRule}
          clearStatus={this.props.actions.clearStatus}
          status={this.props.status}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rules: state.rules.list,
    status: state.rules.status
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
)(CreateRuleContainer);
