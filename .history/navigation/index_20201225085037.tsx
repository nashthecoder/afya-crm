import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import WelcomeScreen from "../../screens/WelcomeScreen";
import LoginScreen from "../../screens/Auth/LoginScreen";
import SignupScreen, { SignupParams } from "@/screens/Auth/SignupScreen";

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export enum AppScreens {
  Welcome = "Welcome",
  Login = "Login",
  Signup = "Signup"
}

export type AuthStackParamList = {
  Login : undefined;
  Signup: SignupParams;
  Welcome: undefined;
};

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthFlowNavigator: React.FunctionComponent = () => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name={AppScreens.Welcome} component={WelcomeScreen} />
      <AuthStack.Screen name={AppScreens.Login} component={LoginScreen} />
      <AuthStack.Screen name={AppScreens.Signup} component={SignupScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthFlowNavigator;
