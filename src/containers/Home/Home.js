import React, { Component } from 'react';
import { LandingBanner, ProductGrid } from 'components';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home"/>
        <LandingBanner />
        <ProductGrid />
      </div>
    );
  }
}
