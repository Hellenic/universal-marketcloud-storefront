import React from 'react';
// import { IndexLink } from 'react-router';

import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';
import Person from 'material-ui/svg-icons/social/person';
import Favorite from 'material-ui/svg-icons/action/favorite';
import {indigo50} from 'material-ui/styles/colors';

const ActionButtons = () => {
  return (
    <div>
      <IconButton><Person color={indigo50} /></IconButton>
      <IconButton><Favorite color={indigo50} /></IconButton>
      <IconButton><ShoppingCart color={indigo50} /></IconButton>
    </div>
  );
};

export default ActionButtons;
