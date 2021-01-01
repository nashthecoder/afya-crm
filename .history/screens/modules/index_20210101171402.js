import React, { Component } from "react";
import ModulesScreen from "./ModulesScreen.tsx";
import MainScreenNavigator from "../ChatScreen/index.js";
import Profile from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.tsx";
import { DrawerNavigator } from "react-navigation";
const ModulesScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default ModulesScreenRouter;