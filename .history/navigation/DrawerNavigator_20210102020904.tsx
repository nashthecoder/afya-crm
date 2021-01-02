import React from "react";
import { StyleSheet } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";

// import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      {/* <Drawer.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#b8caff',
    justifyContent:'center',
    alignItems:'center',
    paddingTop:50,
  },
  text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#254176'
  }
})

