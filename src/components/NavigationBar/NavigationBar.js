import React from 'react';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import config from '../../config';
import styles from './NavigationBar.scss';

const NavigationBar = (props) => {
  const {user, onLogout} = props;
  
  return (
    <Navbar fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <IndexLink to="/" activeStyle={{color: '#33e0ff'}}>
            <div className={styles.brand} />
            <span>{config.app.title}</span>
          </IndexLink>
        </Navbar.Brand>
        <Navbar.Toggle/>
      </Navbar.Header>

      <Navbar.Collapse eventKey={0}>
        <Nav navbar>
          {user &&
            <LinkContainer to="/chat">
              <NavItem eventKey={1}>Chat</NavItem>
            </LinkContainer>
          }

          <LinkContainer to="/widgets">
            <NavItem eventKey={2}>Widgets</NavItem>
          </LinkContainer>
          <LinkContainer to="/survey">
            <NavItem eventKey={3}>Survey</NavItem>
          </LinkContainer>
          <LinkContainer to="/about">
            <NavItem eventKey={4}>About Us</NavItem>
          </LinkContainer>

          {!user &&
            <LinkContainer to="/login">
              <NavItem eventKey={5}>Login</NavItem>
            </LinkContainer>
          }
          {user &&
            <LinkContainer to="/logout">
              <NavItem eventKey={6} className="logout-link" onClick={onLogout}>
                Logout
              </NavItem>
            </LinkContainer>
          }
        </Nav>
        {user &&
          <p className={'navbar-text'}>Logged in as <strong>{user.name}</strong>.</p>
        }
        <Nav navbar pullRight>
          <NavItem eventKey={1} target="_blank" title="View on Github" href="https://github.com/hellenic/universal-marketcloud-storefront">
            <i className="fa fa-github"/>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavigationBar.propTypes = {
  user: React.PropTypes.string,
  onLogout: React.PropTypes.func.isRequired
};

export default NavigationBar;
