import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import About from "../screens/About";
import Faq from "../screens/Faq";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Modules" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="FAQ" component={Faq} />
      <Drawer.Screen name="Logout" component={Login} /> 
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
