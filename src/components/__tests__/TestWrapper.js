import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createStore from 'redux/create';
import ApiClient from 'helpers/ApiClient';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const TestWrapper = (props) => {
  const client = new ApiClient();
  const store = createStore(browserHistory, client, props.store);

  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Provider store={store} key="provider">
        {props.children}
      </Provider>
    </MuiThemeProvider>
  );
};

TestWrapper.propTypes = {
  store: PropTypes.object
};

export default TestWrapper;
