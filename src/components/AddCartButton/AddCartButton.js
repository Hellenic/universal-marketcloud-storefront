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
    displaySnack: PropTypes.func.isRequired,
    color: PropTypes.string
  }

  componentWillReceiveProps(nextProps) {
    const { cart, displaySnack } = this.props;
    if (!(cart.loading && !nextProps.cart.loading)) {
      return;
    }
    if (nextProps.cart.error.message) {
      displaySnack('An error occurred. Please try again in a little while!', 3000);
    }
    else {
      const addedProducts = nextProps.cart.items.filter(item => (
        !cart.items.some(oldItem => item.id === oldItem.id && item.quantity === oldItem.quantity)
      ));
      displaySnack(this.constructMessage(addedProducts), 4000);
    }
  }
  // TODO Make this beautiful.
  constructMessage(addedProducts) {
    if (addedProducts.length === 1) {
      return `${addedProducts[0].name} was added to the cart!`;
    }
    else if (addedProducts.length > 1) {
      return `${addedProducts.length} products were added to the cart!`;
    }
    console.error('Something odd happened while adding to cart!', this.props.cart, addedProducts);
    return 'Nothing was added to your cart. Something odd must have happened...';
  }

  handleAdd(product, quantity) {
    const cartId = (this.props.cart.id) ? this.props.cart.id : '';
    this.props.add(product.id, quantity, cartId);
    this.props.displaySnack('Adding product to the cart, please wait...');
  }

  render() {
    const { product, color } = this.props;
    const hasStock = ProductUtils.hasStock(product);
    const tooltip = hasStock ? `Add one ${product.name} to cart.` : `${product.name} is out of stock`;

    return (
      <IconButton
        disabled={!hasStock}
        onTouchTap={() => this.handleAdd(product, 1)}
        tooltip={<span>{tooltip}</span>} tooltipPosition="top-left"
      >
        <AddShoppingCart color={color || 'white'} />
      </IconButton>
    );
  }
}
