import React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './index'
import LoginScreen from '../screens/login';
import CadastroScreen from '../screens/cadastro'
import ProfileScreen from '../screens/profile';
import AdminScreen from '../screens/admin';

type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Routes: undefined;
  Profile: undefined;
  Admin: undefined;
};

export type StackTypes = NativeStackNavigationProp<RootStackParamList>

const Stack = createNativeStackNavigator<RootStackParamList>();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator
        screenOptions={{ headerShown: false }} // Oculta o cabeçalho para todas as telas na pilha
      >
        
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen}/>
            <Stack.Screen name="Routes" component={Routes} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Admin" component={AdminScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
