import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MyStack from './src/router/stack';
import AppbarHeader from 'react-native-paper/lib/typescript/components/Appbar/AppbarHeader';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <MyStack/>
  );
}

export default MainStack;