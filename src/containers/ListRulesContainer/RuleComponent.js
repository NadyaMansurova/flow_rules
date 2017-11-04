import React from 'react';

class RuleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    }
  }

  removeRule(){
    this.props.removeRule(this.props.rule.id);
  }

  toggleRule() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    const { rule } = this.props;

    return (
      <div>
      <div className="rule" onClick={this.toggleRule.bind(this)}>
        <span className="rule__title">{rule.title}</span>
        <button
            title="Remove rule"
            className="remove__button"
            onClick={this.removeRule.bind(this)}>x</button>

      </div>
      <div className={'rule__info ' + (this.state.isHidden ? 'hidden' : '')}>
        <button
          title="Hide info"
          className="hide__button"
          onClick={this.toggleRule.bind(this, true)}>&#9650;</button>

        <div className="row">
          <div className="col-left">
              <label className="form-label">Rule id</label>
          </div>
          <div className="col-right">
              <input className="form-control"
                disabled="disabled"
                type="text"
                placeholder="rule id"
                value={rule.id}/>
          </div>
        </div>

        <div className="row">
          <div className="col-left">
            <label className="form-label"
              htmlFor="rule_body">Rule body</label>
          </div>
          <div className="col-right">
            <textarea className="form-control form-textarea"
              placeholder="rule body"
              disabled="disabled"
              value={rule.body}></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <label className="form-label"
              htmlFor="passed_rule_id">If rule passed</label>
          </div>
          <div className="col-right">
            <input className="form-control"
              type="text"
              disabled="disabled"
              value={rule.passed_id || 'null'}
              placeholder="next rule id"/>
          </div>
        </div>
        <div className="row">
          <div className="col-left">
            <label className="form-label"
              htmlFor="falied_rule_id">If rule failed</label>
          </div>
          <div className="col-right">
            <input className="form-control"
              type="text"
              placeholder="next rule id"
              disabled="disabled"
              value={rule.failed_id || 'null'}/>
          </div>
        </div>

      </div>
      </div>
    );
  }
}


export default RuleComponent;
