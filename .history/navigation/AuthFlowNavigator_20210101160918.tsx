import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen, { SignupParams } from '../screens/Auth/SignupScreen';
import ModulesScreen from '../screens/Modules/ModulesScreen';

export enum AppScreens {
    Welcome = 'Welcome',
    Login = 'Login',
    Signup = 'Signup',
    Modules = 'Modules',
}
export type AuthStackParamList = {
    Login: undefined;
    Signup: SignupParams;
    Welcome: undefined;
    Modules: undefined;
};
const AuthStack = createStackNavigator<AuthStackParamList>();
const AuthFlowNavigator: React.FunctionComponent = () => {
    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen name={AppScreens.Welcome} component={WelcomeScreen} />
            <AuthStack.Screen name={AppScreens.Login} component={LoginScreen} />
            <AuthStack.Screen name={AppScreens.Signup} component={SignupScreen} />
            <AuthStack.Screen name={AppScreens.Modules} component={ModulesScreen} />
        </AuthStack.Navigator>
    );
};
export default AuthFlowNavigator;