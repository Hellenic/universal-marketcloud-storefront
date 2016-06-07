import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import {reducer as form} from 'redux-form';
import auth from './auth';
import blog from './blog';
import cart from './cart';
import register from './register';
import drawer from './drawer';
import products from './products';
import snackbar from './snackbar';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  blog,
  cart,
  drawer,
  snackbar,
  form,
  products,
  register
});
