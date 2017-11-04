import React from 'react';
import ResultsComponent from './ResultsComponent';

import './executeFlow.css';

class ExecuteFlowContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  executeFlow(){
    if (this.props.rules.length == 0) {
      return false;
    }
    this.props.executeFlow(this.props.rules, this.obj.value);
  }

  render() {
    return (
      <div className="">
        <div className="row">
          <div className="col-left">
            <label className="form-label"
              htmlFor="obj">Object</label>
          </div>
          <div className="col-right">
            <textarea className="form-control form-textarea"
              type="text"
              name="obj"
              id="obj"
              placeholder="put object here"
              ref={(input) => this.obj = input}/>
          </div>
        </div>
        <div className="row row__btn">
          <button className={'btn btn__execute ' + (this.props.rules.length == 0 ? 'btn-disabled' : '')}
              title="Execute flow"
              disabled={this.props.rules.length == 0 ? 'disabled' : ''}
              onClick={this.executeFlow.bind(this)}>Execute flow</button>
        </div>
        <div className="row">
          <div className="col-left">
            <label className="form-label"
              htmlFor="results">Results</label>
          </div>
          <div className="col-right">
            <ResultsComponent
              error={this.props.error}
              result={this.props.result}/>
          </div>
        </div>

      </div>
    );
  }
}


export default ExecuteFlowContainer;
