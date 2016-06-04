import React from 'react';
// import { IndexLink } from 'react-router';

import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Person from 'material-ui/svg-icons/social/person';
import Favorite from 'material-ui/svg-icons/action/favorite';
import theme from '../../theme/mui-theme';

const ActionButtons = () => {
  return (
    <div>
      <IconButton><Person color={theme.palette.accent2Color} /></IconButton>
      <IconButton><Favorite color={theme.palette.accent2Color} /></IconButton>
      <IconButton><ShoppingCart color={theme.palette.accent2Color} /></IconButton>
    </div>
  );
};

export default ActionButtons;
