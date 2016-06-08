import React, { Component } from 'react';
import { isLoaded as isProductsLoaded, load as loadProducts } from 'redux/modules/products';
import { LandingBanner, ProductGrid } from 'components';
import Helmet from 'react-helmet';
import { asyncConnect } from 'redux-async-connect';

@asyncConnect([{
  promise: ({ store: {dispatch, getState} }) => {
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
        <Helmet title="Home"/>
        <LandingBanner />
        <ProductGrid />
      </div>
    );
  }
}
