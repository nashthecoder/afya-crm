import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModulesScreen from '../screens/Reports/ModulesScreen';
import MessagesScreen from '../screens/MessagesScreen';
import { BottomTabParamList, ModulesParamList, MessagesParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Reports"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Modules"
        component={ReportsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-document" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-mail" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ModulesStack = createStackNavigator<ModulesParamList>();

function ModulesNavigator() {
  return (
    <ModulesStack.Navigator>
      <ModulesStack.Screen
        name="ModulesScreen"
        component={ModulesScreen}
        options={{ headerTitle: 'Modules' }}
      />
    </ModulesStack.Navigator>
  );
}

const MessagesStack = createStackNavigator<MessagesParamList>();

function MessagesNavigator() {
  return (
    <MessagesStack.Navigator>
      <MessagesStack.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{ headerTitle: 'Messages' }}
      />
    </MessagesStack.Navigator>
  );
}
