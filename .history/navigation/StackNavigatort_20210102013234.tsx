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
      <Stack.Screen name="Reports" component={Reports} />
      <Stack.Screen name="Messages" component={Messages} />
      <Stack.Screen name="Calendar" component={Calendar} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="AddModule" component={AddModule} />
      <Stack.Screen name="AddModule" component={AddModule} />
      <Stack.Screen name="AddModule" component={AddModule} />
    </Stack.Navigator>
  );
};


export { MainStackNavigator };
