import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './index';
import LoginScreen from '../screens/login';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }} // Oculta o cabeçalho para todas as telas na pilha
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Routes" component={Routes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
