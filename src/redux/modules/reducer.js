import { combineReducers } from 'redux';
// import multireducer from 'multireducer';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import {reducer as form} from 'redux-form';
import auth from './auth';
import products from './products';

export default combineReducers({
  routing: routerReducer,
  reduxAsyncConnect,
  auth,
  form,
  products
});
