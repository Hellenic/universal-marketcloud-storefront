import React from 'react';
// import { IndexLink } from 'react-router';

import IconButton from 'material-ui/IconButton';
import ShoppingCart from 'material-ui/svg-icons/action/shopping-cart';

const ActionButtons = () => {
  return (
    <div>
      <IconButton><ShoppingCart /></IconButton>
      <IconButton><ShoppingCart /></IconButton>
      <IconButton><ShoppingCart /></IconButton>
    </div>
  );
};

export default ActionButtons;
