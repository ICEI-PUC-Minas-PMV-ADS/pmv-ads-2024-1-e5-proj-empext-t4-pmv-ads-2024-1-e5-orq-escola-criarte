import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native'

import Routes from './index'
import LoginScreen from '../screens/login';
import CadastroScreen from '../screens/cadastro'

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Cadastro" component={CadastroScreen}/>
            <Stack.Screen name="Routes" component={Routes} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;
