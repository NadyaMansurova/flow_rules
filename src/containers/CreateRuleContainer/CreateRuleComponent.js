import React from 'react';

class CreateRuleComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
  }

  addRule() {
    if (!this.rule_id.value || !this.rule_body.value ) {
      return;
    }
    this.rule = {
      id: this.rule_id.value,
      title: this.rule_title.value ? this.rule_title.value : this.rule_id.value,
      body: this.rule_body.value,
      passed_id: this.passed_rule_id.value,
      falied_id: this.falied_rule_id.value
    };

    this.props.addRule(this.rule);

    setTimeout(() => {
      if (this.props.status === 'ok') {
        this.rule_id.value = "";
        this.rule_title.value = "";
        this.rule_body.value = "";
        this.passed_rule_id.value = "";
        this.falied_rule_id.value = "";
        this.props.clearStatus();
      }
    }, 100);

  }

  render() {
    this.rule = {};

    return (
      <div className="panel panel-form">
        <div className="">
          <div className="row">
            <div className="col-left">
              <label className="form-label"
                htmlFor="rule_title">Rule title</label>
            </div>
            <div className="col-right">
              <input className="form-control"
                type="text"
                name="rule_title"
                id="rule_title"
                placeholder="rule title"
                ref={(input) => this.rule_title = input}/>
            </div>
          </div>
          <div className="row">
            <div className="col-left">
              <label className="form-label"
                htmlFor="rule_id">Rule id</label>
            </div>
            <div className="col-right">
              <input className="form-control"
                type="text"
                name="rule_id"
                id="rule_id"
                placeholder="rule id"
                ref={(input) => this.rule_id = input}/>
            </div>
          </div>
          <div className="row">
            <div className="col-left">
              <label className="form-label"
                htmlFor="rule_body">Rule body</label>
            </div>
            <div className="col-right">
              <textarea className="form-control form-textarea"
                name="rule_body"
                id="rule_body"
                placeholder="rule body"
                ref={(input) => this.rule_body = input}></textarea>
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
                name="passed_rule_id"
                id="passed_rule_id"
                placeholder="next rule id"
                ref={(input) => this.passed_rule_id = input}/>
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
                name="falied_rule_id"
                id="falied_rule_id"
                placeholder="next rule id"
                ref={(input) => this.falied_rule_id = input}/>
            </div>
          </div>
        </div>
        <div className={this.props.status === 'failed' ? 'row row__btn ' : 'hidden'}>
          <div className="status status-failed">
            Check rule body or id
          </div>
        </div>
        <div className="row row__btn">
          <button className="btn btn__add"
              title="Add new rule"
              onClick={this.addRule.bind(this)}>Add new rule</button>
        </div>

      </div>
    );
  }
}


export default CreateRuleComponent;
