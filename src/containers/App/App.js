import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { isLoaded as isProductsLoaded, load as loadProducts } from 'redux/modules/products';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import { NavigationBar, Footer } from 'components';
import { push } from 'react-router-redux';
import config from '../../config';
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
    if (!isProductsLoaded(getState())) {
      promises.push(dispatch(loadProducts()));
    }

    return Promise.all(promises);
  }
}])
@connect(state => ({user: state.auth.user}), {pushState: push})
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };
  state = {
    open: false,
    toastText: ''
  }

  componentWillReceiveProps(nextProps) {
    // Login in progress
    if (!this.props.user && nextProps.user) {
      this.setState({ open: true, toastText: 'You have signed in!' });
      this.props.pushState('/loginSuccess');
    }
    // Logging out
    else if (this.props.user && !nextProps.user) {
      this.setState({ open: true, toastText: 'You have signed out!' });
      this.props.pushState('/');
    }
  }
  handleRequestClose = () => this.setState({open: false});

  render() {
    // TODO Should the above user logic be in Navigation where the buttons are?
    // const {user} = this.props;

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Helmet {...config.app.head}/>
          <NavigationBar />

          <div>
            {this.props.children}
          </div>

          <Footer />
          <Snackbar open={this.state.open} autoHideDuration={3000}
            message={this.state.toastText} onRequestClose={this.handleRequestClose} />
        </div>
      </MuiThemeProvider>
    );
  }
}
