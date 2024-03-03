import {NavigationContainer} from '@react-navigation/native';
import Header from './src/components/Header';
import Routes from './src/router'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import Contacts from './src/screens/contacts';
import Events from './src/screens/events';
import MyStack from './src/router/stack';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <MyStack/>
  );
}



export default MainStack;