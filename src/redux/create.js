import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import { addLocaleData } from 'react-intl';
import itLocaleData from 'react-intl/locale-data/it';
import createMiddleware from './middleware/clientMiddleware';

const initialState = {};
export default function createStore(history, client, data = initialState) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);
  const engine = createEngine('marketcloud-storefront');
  const persistanceMiddleware = storage.createMiddleware(engine);

  const middleware = [createMiddleware(client), reduxRouterMiddleware, persistanceMiddleware];

  let finalCreateStore;
  if (__DEVELOPMENT__ && __CLIENT__ && __DEVTOOLS__) {
    const { persistState } = require('redux-devtools');
    const DevTools = require('../containers/DevTools/DevTools');
    finalCreateStore = compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
      persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
    )(_createStore);
  }
  else {
    finalCreateStore = applyMiddleware(...middleware)(_createStore);
  }

  const reducer = storage.reducer(require('./modules/reducer'));
  const store = finalCreateStore(reducer, data);

  if (__CLIENT__) {
    // TODO Add some validation e.g. if the store is older than X => discard
    storage.createLoader(engine)(store);
  }

  if (__DEVELOPMENT__ && module.hot) {
    module.hot.accept('./modules/reducer', () => {
      store.replaceReducer(require('./modules/reducer'));
    });
  }

  addLocaleData([
    ...itLocaleData
  ]);

  return store;
}
