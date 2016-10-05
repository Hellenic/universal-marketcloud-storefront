import Express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import favicon from 'serve-favicon';
import compression from 'compression';
import proxy from 'express-http-proxy';
import helmet from 'helmet';
import path from 'path';
import PrettyError from 'pretty-error';
import http from 'http';

import { match } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { ReduxAsyncConnect, loadOnServer } from 'redux-connect';
import createHistory from 'react-router/lib/createMemoryHistory';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl-redux';
import config from './config';
import createStore from './redux/create';
import ApiClient from './helpers/ApiClient';
import Html from './helpers/Html';
import getRoutes from './routes';

const pretty = new PrettyError();
const app = new Express();
const server = new http.Server(app);

app.use(helmet());
app.use(compression());
app.use(favicon(path.join(__dirname, '..', 'static', 'favicon.ico')));

app.use(Express.static(path.join(__dirname, '..', 'static')));

// Proxy to API Server
app.use('/api', proxy(config.api.host));

app.use((req, res) => {
  if (__DEVELOPMENT__) {
    // Do not cache webpack stats: the script file would change since
    // hot module replacement is enabled in the development env
    webpackIsomorphicTools.refresh();
  }
  const client = new ApiClient(req);
  const memoryHistory = createHistory(req.originalUrl);
  const store = createStore(memoryHistory, client);
  const history = syncHistoryWithStore(memoryHistory, store);

  function hydrateOnClient() {
    const html = ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store} />);
    res.send(`<!doctype html>\n${html}`);
  }

  if (__DISABLE_SSR__) {
    hydrateOnClient();
    return;
  }

  match({ history, routes: getRoutes(store), location: req.originalUrl }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search);
    }
    else if (error) {
      console.error('ROUTER ERROR:', pretty.render(error));
      res.status(500);
      hydrateOnClient();
    }
    else if (renderProps) {
      loadOnServer({ ...renderProps, store, helpers: { client } }).then(() => {
        const component = (
          <Provider store={store} key="provider">
            <IntlProvider>
              <ReduxAsyncConnect {...renderProps} />
            </IntlProvider>
          </Provider>
        );

        res.status(200);

        global.navigator = { userAgent: req.headers['user-agent'] };
        const html = ReactDOM.renderToString(
          <Html assets={webpackIsomorphicTools.assets()} component={component} store={store} />
        );
        res.send(`<!doctype html>\n${html}`);
      });
    }
    else {
      res.status(404).send('Not found');
    }
  });
});

if (config.port) {
  server.listen(config.port, (err) => {
    if (err) {
      console.error(err);
    }
    console.info('----\n==> ✅  %s is running, talking to API server at %s.', config.app.title, config.api.host);
    console.info('==> 💻  Open http://%s:%s in a browser to view the app.', config.host, config.port);
  });
}
else {
  console.error('==>     ERROR: No PORT environment variable has been specified');
}
