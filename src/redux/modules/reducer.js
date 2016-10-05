import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-connect';

import { reducer as form } from 'redux-form';
import { intlReducer } from 'react-intl-redux';
import auth from './auth';
import blog from './blog';
import cart from './cart';
import shipping from './shipping';

import register from './register';
import drawer from './drawer';
import products from './products';
import snackbar from './snackbar';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  intl: intlReducer,
  auth,
  blog,
  cart,
  shipping,
  drawer,
  snackbar,
  form,
  products,
  register
});
