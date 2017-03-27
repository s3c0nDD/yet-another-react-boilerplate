import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import { Grid, Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">React App Home</Link>
              </Navbar.Brand>
              <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <li role="presentation">
                  <Link to="/about">About</Link>
                </li>
                <li role="presentation">
                  <Link to="/contact">Contact</Link>
                </li>
              </Nav>
            </Navbar.Collapse>
          </Grid>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;