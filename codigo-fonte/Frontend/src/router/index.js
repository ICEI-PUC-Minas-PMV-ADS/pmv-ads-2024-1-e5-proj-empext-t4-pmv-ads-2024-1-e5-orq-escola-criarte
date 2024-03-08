import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import HomeScreen from '../screens/home';
import ContactsScreen from '../screens/contacts';
import EventsScreen from '../screens/events';
import { Avatar } from 'react-native-paper';

const Tab = createBottomTabNavigator();

function CustomHeader() {
  return (
    <Appbar.Header>
      <Avatar.Image size={40} source={require('../assets/background.jpg')} />      
      <Appbar.Content title="Title" titleStyle={{ textAlign: 'center' }} />
      <Appbar.Action icon="dots-vertical"  />
    </Appbar.Header>
  );
}

function Routes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        style: { borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarLabel: 'Agenda de Eventos',
          tabBarIcon: ({ color, size }) => <Icon name="calendar" color={color} size={size} />,
          header: () => <CustomHeader />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
          header: () => <CustomHeader />,
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, size }) => <Icon name="phone" color={color} size={size} />, // Corrigido para "home"
          header: () => <CustomHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
