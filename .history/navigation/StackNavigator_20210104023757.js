import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import Messages from "../screens/Messages";
import Login from "../screens/Login";
import Reports from '../screens/Reports';
import Calendar from '../screens/Calendar';
import AddModule from '../screens/AddModule';
import ReportAttachments from '../screens/ReportAttachments';
import ReportFinancial from '../screens/ReportFinancial';
import ReportNarrative from '../screens/ReportNarrative';



const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#b8caff",
  },
  headerTintColor: "#f1f1e5",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="AddModule" component={AddModule} />
      <Stack.Screen name="ReportAttachments" component={ReportAttachments} />
      <Stack.Screen name="ReportFinancial" component={ReportFinancial} />
      <Stack.Screen name="ReportNarrative" component={ReportNarrative} />

      
    </Stack.Navigator>
  );
};

const MessageStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Messages" component={Messages} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, MessageStackNavigator };
