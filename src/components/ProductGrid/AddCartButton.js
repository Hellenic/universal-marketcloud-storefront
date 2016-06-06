import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

import { add } from 'redux/modules/cart';
import * as ProductUtils from 'utils/product';
// import styles from './ProductGrid.scss';

@connect(() => ({}), { add })
export default class AddCartButton extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    add: PropTypes.func.isRequired
  }

  render() {
    const { product, add } = this.props;
    const hasStock = ProductUtils.hasStock(product);
    const tooltip = hasStock ? `Add one ${product.name} to cart.` : `${product.name} is out of stock`;

    return (
      <IconButton disabled={!hasStock}
        onTouchTap={() => add(product.id)}
        tooltip={<span>{tooltip}</span>} tooltipPosition="top-left">
        <AddShoppingCart color="white" />
      </IconButton>
    );
  }
}
