import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Navigation from './components/Navigation/index';
import Home from './components/Home/index';

class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={() => (<div><br/><br/><h1>About</h1></div>)}/>
            <Route path="/contact" render={() => (<div><br/><br/><h1>Contact</h1></div>)}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default Routes;
