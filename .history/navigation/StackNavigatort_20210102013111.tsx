import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Reports from "../screens/Reports/ReportsScreen";
import Messages from "../screens/MessagesScreen";
import Calendar from "../screens/Calendar/CalendarScreen";
import Faq from "../screens/Faq/FaqScreen";
import Profile from "../screens/Profile/ProfileScreen";
import AddModule from "../screens/AddModule";
import AddModule from "../screens/AddModule";
import AddModule from "../screens/AddModule";


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#ffffff",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Reports" component={Home} />
      <Stack.Screen name="Messages" component={About} />
      <Stack.Screen name="Calendar" component={Login} />
      <Stack.Screen name="Faq" component={Home} />
      <Stack.Screen name="Profile" component={About} />
      <Stack.Screen name="AddModule" component={Login} />
      <Stack.Screen name="AddModule" component={About} />
      <Stack.Screen name="AddModule" component={Login} />
    </Stack.Navigator>
  );
};


export { MainStackNavigator };
