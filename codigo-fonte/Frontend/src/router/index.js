import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, Avatar, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home';
import ContactsScreen from '../screens/contacts';
import EventsScreen from '../screens/events';
import ProfileScreen from '../screens/profile';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function CustomHeader() {
  const [visible, setVisible] = React.useState(false);
  const navigation = useNavigation();

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const handleLogout = () => {
    navigation.navigate('Login');
    closeMenu();
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
    closeMenu();
  };

  return (
    <Appbar.Header>
      <Avatar.Image size={40} source={require('../assets/background.png')} />
      <Appbar.Content title="Title" titleStyle={{ textAlign: 'center' }} />
      <View>
        <Menu
          visible={visible}
          anchor={<Appbar.Action icon="dots-vertical" onPress={openMenu} />}>
          <Menu.Item onPress={handleProfile} title="Perfil" />
          <Menu.Item onPress={handleLogout} title="Sair" />
          <Menu.Item onPress={closeMenu} title="Fechar" />
        </Menu>
      </View>
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
          tabBarLabel: 'Eventos',
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
          tabBarLabel: 'Contato',
          tabBarIcon: ({ color, size }) => <Icon name="phone" color={color} size={size} />,
          header: () => <CustomHeader />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
