import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/rulesActions';
import ExecuteFlowComponent from './ExecuteFlowComponent';


class ExecuteFlowContainer extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="">
        <ExecuteFlowComponent rules={this.props.rules}
          result={this.props.result}
          error={this.props.error}
          executeFlow={this.props.actions.executeFlow}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rules: state.rules.list,
    result: state.result.list,
    error: state.result.error
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
)(ExecuteFlowContainer);
