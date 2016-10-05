/**
 * THIS IS THE ENTRY POINT FOR THE CLIENT, JUST LIKE server.js IS THE ENTRY POINT FOR THE SERVER.
 */
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect } from 'redux-connect';
import { useScroll } from 'react-router-scroll';

import ApiClient from './helpers/ApiClient';
import createStore from './redux/create';
import getRoutes from './routes';

const client = new ApiClient();
const dest = document.getElementById('content');
const store = createStore(browserHistory, client, window.__data); // eslint-disable-line no-underscore-dangle
const history = syncHistoryWithStore(browserHistory, store);

const component = (
  <Router
    render={props => (
      <ReduxAsyncConnect {...props} helpers={{ client }} filter={item => !item.deferred} render={applyRouterMiddleware(useScroll())} />
    )}
    history={history}
  >
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    <IntlProvider>
      {component}
    </IntlProvider>
  </Provider>,
  dest
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!dest || !dest.firstChild || !dest.firstChild.attributes || !dest.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('./containers/DevTools/DevTools');
  ReactDOM.render(
    <Provider store={store} key="provider">
      <IntlProvider>
        <div>
          {component}
          <DevTools />
        </div>
      </IntlProvider>
    </Provider>,
    dest
  );
}
