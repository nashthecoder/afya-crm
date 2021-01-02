import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator} from './StackNavigator'
import ModulesScreenContainer from '../screens/Modules/ModulesScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ModulesScreen" component={ModulesScreen} />
      {/* <Tab.Screen name="Contact" component={ContactStackNavigator} /> */}
    </Tab.Navigator>
  );
}

export default BottomTabNavigator