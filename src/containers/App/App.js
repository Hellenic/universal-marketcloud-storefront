import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import { handleRequestClose } from 'redux/modules/snackbar';
import { NavigationBar, Footer } from 'components';
import config from '../../config';
import customTheme from '../../theme/mui-theme';
import { asyncConnect } from 'redux-async-connect';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';
import './App.scss';

// Note! (Temporary) plugin for Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }
    return Promise.all(promises);
  }
}])
@connect(state => ({ snackbar: state.snackbar }), { handleRequestClose })
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    snackbar: PropTypes.object.isRequired,
    handleRequestClose: PropTypes.func.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const { snackbar, handleRequestClose } = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(customTheme)}>
        <div>
          <Helmet {...config.app.head}/>
          <NavigationBar />

          <div>
            {this.props.children}
          </div>

          <Footer />
          <Snackbar open={snackbar.visible} autoHideDuration={snackbar.duration}
            message={snackbar.text} onRequestClose={handleRequestClose} />
        </div>
      </MuiThemeProvider>
    );
  }
}
