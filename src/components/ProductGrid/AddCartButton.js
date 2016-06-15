import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

import { add } from 'redux/modules/cart';
import * as ProductUtils from 'utils/product';

@connect(state => ({ cart: state.cart }), { add })
export default class AddCartButton extends Component {
  static propTypes = {
    cart: PropTypes.object,
    product: PropTypes.object.isRequired,
    add: PropTypes.func.isRequired
  }

  handleAdd(product, quantity) {
    const cartId = (this.props.cart.id) ? this.props.cart.id : '';
    this.props.add(product.id, quantity, cartId);
  }

  render() {
    const { product } = this.props;
    const hasStock = ProductUtils.hasStock(product);
    const tooltip = hasStock ? `Add one ${product.name} to cart.` : `${product.name} is out of stock`;

    return (
      <IconButton disabled={!hasStock}
        onTouchTap={() => this.handleAdd(product, 1)}
        tooltip={<span>{tooltip}</span>} tooltipPosition="top-left">
        <AddShoppingCart color="white" />
      </IconButton>
    );
  }
}
