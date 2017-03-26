import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {
  render() {
    const pStyle = {
        textAlign: 'center'
    };
    return (
        <div>
            <Navbar inverse fixedTop>
                <Grid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">React App</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Grid>
            </Navbar>
            <Jumbotron>
                <Grid>
                    <h1>Welcome to React</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p style={pStyle}>
                        <Button
                            bsStyle="success"
                            bsSize="large"
                            href="http://react-bootstrap.github.io/components.html"
                            target="_blank">
                            View React Bootstrap Docs
                        </Button>
                    </p>
                </Grid>
            </Jumbotron>
        </div>
    );
  }
}

export default App;
