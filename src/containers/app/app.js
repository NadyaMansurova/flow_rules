import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import RulesPage from '../../route/rulesPage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Route exact path="/" component={RulesPage} />
    );
  }
}

export default App;
