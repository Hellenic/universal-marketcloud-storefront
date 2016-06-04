import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import {reducer as form} from 'redux-form';
import auth from './auth';
import drawer from './drawer';
import products from './products';
import snackbar from './snackbar';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  drawer,
  snackbar,
  form,
  products
});
