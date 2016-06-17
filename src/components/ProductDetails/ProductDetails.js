import React, { Component, PropTypes } from 'react';
import { Container, AddCartButton } from 'components';
// import styles from './ProductDetails.scss';

export default class ProductDetails extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const { product } = this.props;
    return (
      <Container>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        {product.display_price_discount ? (
          <span>{product.display_price_discount} <del>{product.display_price}</del></span>
        ) : (<span>{product.display_price}</span>)}
        {product.manufacturer ? (
          <p>Manufacturer: {product.manufacturer}</p>
        ) : null}
        <p>
          <AddCartButton product={product} color="green" />
        </p>
        <img src={product.images[0]} alt={product.name} />
      </Container>
    );
  }
}
