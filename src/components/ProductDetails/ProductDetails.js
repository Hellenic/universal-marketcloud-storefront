import React, { Component, PropTypes } from 'react';
import styles from './ProductDetails.scss';

export default class ProductDetails extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  };

  render() {
    const { product } = this.props;
    
    return (
      <div className={styles.container}>
        <img src={product.images[0]} />
      </div>
    );
  }
}
