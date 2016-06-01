import React from 'react';
// import { IndexLink } from 'react-router';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import MenuDrawer from './MenuDrawer';
// import ActionButtons from './ActionButtons';

import config from '../../config';
import styles from './NavigationBar.scss';

const NavigationBar = () => {
  // const {user, onLogout} = props;

  return (
    <AppBar
      title={<span className={styles.title}>{config.app.title}</span>}
      onTitleTouchTap={() => console.log('onTouch works!')}
      onLeftIconButtonTouchTap={() => console.log('Menu touch!')}
      iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
      iconElementRight={<IconButton><ShoppingCart /></IconButton>}>
      <MenuDrawer />
    </AppBar>
  );
};

NavigationBar.propTypes = {
  user: React.PropTypes.string,
  onLogout: React.PropTypes.func.isRequired
};

export default NavigationBar;
