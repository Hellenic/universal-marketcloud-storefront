import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import createMiddleware from 'redux/middleware/clientMiddleware';
import { routerMiddleware } from 'react-router-redux';
import configureStore from 'redux-mock-store';
import ApiClient from 'helpers/ApiClient';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const client = new ApiClient();
const middlewares = [createMiddleware(client), routerMiddleware(history)];
const mockStore = configureStore(middlewares);

const TestWrapper = (props) => {
  const store = mockStore(props.store);

  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Provider store={store} key="provider">
        {props.children}
      </Provider>
    </MuiThemeProvider>
  );
};

TestWrapper.propTypes = {
  store: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
};

export default TestWrapper;
