import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import { Header, Container, CartItems, CartTotals, CheckoutSteps, CheckoutNavigation } from 'components';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { add, remove } from 'redux/modules/cart';
import { display as displaySnack } from 'redux/modules/snackbar';

@connect(state => ({ cart: state.cart }), { push, add, remove, displaySnack })
export default class Cart extends Component {
  static propTypes = {
    cart: PropTypes.object,
    add: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    displaySnack: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cart.items.length > nextProps.cart.items.length) {
      this.props.displaySnack('Product was removed from your cart.');
    }
  }

  handleUpdate(item, qty) {
    if (isNaN(qty)) {
      this.props.displaySnack('Given quantity is not valid.');
      return;
    }

    if (qty <= 0 && qty > 999) {
      this.props.displaySnack('Quantity should be between 0 and 999.');
      return;
    }

    this.props.add(item.id, qty, this.props.cart.id);
  }

  handleRemove(item) {
    this.props.remove(item.id, this.props.cart.id);
  }

  render() {
    const { cart, push } = this.props;

    return (
      <div>
        <Helmet title="Cart – Checkout #1" />
        <Header title="Your products" />
        <CheckoutSteps activeIndex={0} />

        <Container>
          {
            (cart.items.length <= 0) ?
              <div>
                <Subheader>You do not have any products in your cart yet!</Subheader>
              </div> :
              <div>
                <CartItems cart={cart} onRemove={item => this.handleRemove(item)} onUpdate={(item, qty) => this.handleUpdate(item, qty)} />
                <Divider style={{ marginTop: '2em' }} />
                <CartTotals cart={cart} />
                <Divider style={{ marginTop: '2em', marginBottom: '2em' }} />
                <CheckoutNavigation activeIndex={0} onNext={() => push('/checkout/shipping')} />
              </div>
          }
        </Container>
      </div>
    );
  }
}
