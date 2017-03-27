import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

import './App.css';

const Home = (props) => {
  return <h1>Home</h1>;
};

const isActiveFunc  = (match, location) => {
  console.log(match, location);
  return match;
};

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">Home</NavLink>
    <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
    <NavLink isActive={isActiveFunc} replace to="/contact">Contact</NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" component={Home}/>
      <Route path="/about" render={() => <h1>About</h1>}/>
      <Route path="/contact" render={() => <h1>Contact</h1>}/>
    </div>
  </Router>
);

export default App;
