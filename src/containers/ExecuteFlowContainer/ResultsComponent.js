import React from 'react';

class ResultsComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let results = [];

    if (this.props.error) {
      return (
        <div className="status status-failed">{this.props.error}</div>)
    }
    this.props.result.map(item => {
      if (item.result) {
        results.push(<div className="status status-passed" key={item.id}>{item.title} passed</div>);
      } else if (!item.error) {
        results.push(<div className="status status-failed" key={item.id}>{item.title} failed</div>);
      } else {
        results.push(<div className="status status-failed" key={item.id}>{item.title}</div>);
      }
    });
    return results;
  }
}


export default ResultsComponent;
