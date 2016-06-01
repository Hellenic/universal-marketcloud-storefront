import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

export default class MenuDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggle = () => this.setState({open: !this.state.open});
  close = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.toggle}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.close}>Menu Item</MenuItem>
          <MenuItem onTouchTap={this.close}>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}
