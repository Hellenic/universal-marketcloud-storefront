import React, { Component, PropTypes } from 'react';
import styles from './ProductGrid.scss';

export default class ProductGrid extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
  }

  render() {
    const { product } = this.props;
    return (
      <div>
        {!product.price_discount &&
          <span><b>{product.price}</b> &euro;</span>
        }
        {product.price_discount &&
          <span>
            <span className={styles.discountprice}><b>{product.price_discount}</b> &euro;</span>&nbsp;
            <span className={styles.oldprice}><b>{product.price}</b> &euro;</span>
          </span>
        }
      </div>
    );
  }
}
