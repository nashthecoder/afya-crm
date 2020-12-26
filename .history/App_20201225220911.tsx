import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AuthFlowNavigator from './navigation/AuthFlowNavigator'
import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import Navigation from './navigation'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <NavigationContainer>
        <AuthFlowNavigator />
        <StatusBar />
      </NavigationContainer>
    )
  }
}
