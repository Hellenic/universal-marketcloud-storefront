import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { display as displaySnack } from 'redux/modules/snackbar';
import IconButton from 'material-ui/IconButton';
import AddShoppingCart from 'material-ui/svg-icons/action/add-shopping-cart';

import { add } from 'redux/modules/cart';
import * as ProductUtils from 'utils/product';

@connect(state => ({ cart: state.cart }), { add, displaySnack })
export default class AddCartButton extends Component {
  static propTypes = {
    cart: PropTypes.object,
    product: PropTypes.object.isRequired,
    add: PropTypes.func.isRequired,
    displaySnack: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    const { cart, displaySnack } = this.props;
    if (!(cart.loading && !nextProps.cart.loading)) {
      return;
    }
    // TODO Make the messages pretty
    if (nextProps.cart.error) {
      console.log('Error', nextProps.cart.error);
      displaySnack('An error occurred. Please try again in a little while!', 3000);
    }
    else {
      console.log('Was', cart.items, 'is now', nextProps.cart.items);
      displaySnack('Product was added to the cart!', 3000);
    }
  }

  handleAdd(product, quantity) {
    const cartId = (this.props.cart.id) ? this.props.cart.id : '';
    this.props.add(product.id, quantity, cartId);
    this.props.displaySnack('Adding product to the cart, please wait...');
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
