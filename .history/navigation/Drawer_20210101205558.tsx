import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from '../screens/SideBar';

export default class Drawer extends Component {
  closeDrawer () => {
    this.drawer._root.close()
  };

  drawerContent = () => {
    return (
      <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
        <Text>Close</Text>
      </TouchableOpacity>
    );
  };