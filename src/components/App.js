import React, { Component } from 'react';
import { UserContainer } from '../containers/user-container';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={UserContainer} />
      </Router>
    );
  }
}

export default App;
