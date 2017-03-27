import React, { Component } from 'react';

import logo from './logo.svg';
import './style.css';

import { Jumbotron, Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Jumbotron>
          <div className="Home-header">
            <h1>Welcome to</h1>
            <h3>"Yet Another React Boilerplate" by <a href="https://github.com/s3c0nDD">s3c0nDD</a></h3>
          </div>
          <img src={logo} className="Home-logo" alt="logo"/>
          <p className="Home-buttons">
            <Button
              bsStyle="success"
              bsSize="large"
              href="http://react-bootstrap.github.io/components.html"
              target="_blank">
              View React Bootstrap Docs
            </Button>
            <Button
              bsStyle="success"
              bsSize="large"
              href="https://facebook.github.io/react/docs"
              target="_blank">
              View React Docs
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;