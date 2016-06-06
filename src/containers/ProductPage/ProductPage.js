import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Header, ProductDetails } from 'components';
import Helmet from 'react-helmet';

@connect(state => ({ products: state.products.data }))
export default class ProductPage extends Component {
  static propTypes = {
    products: PropTypes.array,
    params: PropTypes.object
  };

  render() {
    const { params, products } = this.props;
    const productId = parseInt(params.productId, 10);
    const product = products.find(product => product.id === productId);

    return (
      <div>
        <Helmet title={product.name} />
        <Header title={product.name} subtitle={product.display_discount_price || product.display_price} />
        <ProductDetails product={product} />
      </div>
    );
  }
}
