import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    Home,
    About,
    Blog,
    ProductPage,
    Contact,
    FAQ,
    NotFound,
    Login,
    Register,
    Account,
    Cart,
    Shipping,
    Payment,
    Confirmation
  } from 'containers';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    const { auth: { user } } = store.getState();
    if (!user) {
      // oops, not logged in, so can't be here!
      replace('/');
    }
    cb();
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      {/* Home (main) route */}
      <IndexRoute component={Home} />

      {/* Routes requiring login */}
      <Route onEnter={requireLogin}>
        <Route path="account" component={Account} />
      </Route>

      {/* Routes */}
      <Route path="about" component={About} />
      <Route path="blog" component={Blog}>
        <Route path="/blog/:postId" component={Blog} />
      </Route>
      <Route path="cart" component={Cart} />
      <Route path="checkout">
        <Route path="/checkout/shipping" component={Shipping} />
        <Route path="/checkout/payment" component={Payment} />
        <Route path="/checkout/confirmation" component={Confirmation} />
      </Route>
      <Route path="contact" component={Contact} />
      <Route path="faq" component={FAQ} />
      <Route path="login" component={Login} />
      <Route path="/product/:productId*" component={ProductPage} />
      <Route path="register" component={Register} />

      {/* Catch all route */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
