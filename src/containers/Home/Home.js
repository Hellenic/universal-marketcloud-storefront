import React, { Component } from 'react';
import { asyncConnect } from 'redux-connect';
import { isLoaded as isProductsLoaded, load as loadProducts } from 'redux/modules/products';
import { LandingBanner, ProductFilters, ProductGrid } from 'components';
import Helmet from 'react-helmet';

@asyncConnect([{
  promise: ({ store: { dispatch, getState } }) => { // eslint-disable-line react/prop-types
    const promises = [];
    if (!isProductsLoaded(getState())) {
      promises.push(dispatch(loadProducts()));
    }
    return Promise.all(promises);
  }
}])
export default class Home extends Component {
  render() {
    return (
      <div>
        <Helmet title="Home" />
        <LandingBanner />
        <ProductFilters />
        <ProductGrid />
      </div>
    );
  }
}
