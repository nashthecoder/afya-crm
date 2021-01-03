import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator, MessageStackNavigator } from './StackNavigator';
import Modules from "../screens/Modules"

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Modules" component={Modules} />
      <Tab.Screen name="Messages" component={MessageStackNavigator} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator