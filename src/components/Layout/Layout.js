import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  render() {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer />
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className={classes.Content}>{props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
