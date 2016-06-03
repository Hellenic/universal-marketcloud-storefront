import React, { Component } from 'react';
import { Link } from 'react-router';
import { LandingBanner } from 'components';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home"/>
        <LandingBanner />

        <div className="container">
          <p>
            Here is a link to another page <Link to="/survey">Survey page</Link>
          </p>
        </div>
      </div>
    );
  }
}
