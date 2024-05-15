import React, { useState, useEffect } from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, withTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home';
import ContactsScreen from '../screens/contacts';
import EventsScreen from '../screens/events';
import { useNavigation } from '@react-navigation/native';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '../config/authUtils';
import { StackTypes } from './stack';
import DropDown from '../components/DropDown';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface UserData {
  'user_name': string;
  'role': string;
}

const Tab = createBottomTabNavigator();

function Routes() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [username, setUsername] = useState<string>('');
  const navigation = useNavigation<StackTypes>();
  const [role, setRole] = useState<string>('');

  const closeMenu = () => setDropdownVisible(false);

  const handleLogout = () => {
    navigation.navigate('Login');
    closeMenu();
  };

  const handleAdmin = () => {
    navigation.navigate('Admin');
    closeMenu();
  };

  const handleProfile = () => {
    navigation.navigate('Profile');
    closeMenu();
  };

  useEffect(() => {
    async function fetchUserData() {
      try {
        const token = await getToken();
        if (token) {
          const decoded = jwtDecode<UserData>(token);
          setUsername(decoded['user_name']);
          setRole(decoded['role']);

        } else {
          console.log('Token é nulo');
        }
      } catch (error) {
        console.error("Erro ao obter os dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  const options = [
    { label: 'Perfil', action: handleProfile },
    { label: 'Sair', action: handleLogout },
  ];

  if (role === 'Admin') {
    options.unshift({ label: 'Administração', action: handleAdmin });
  }

  const CustomHeader = () => (
    <Appbar.Header>

      <Image
        style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 5 }}
        source={require('../assets/logo.png')}
      />

      <Appbar.Content title={`Olá, ${username}`} titleStyle={{ textAlign: 'center', fontWeight: 'bold', color: '#413267', marginRight: 20 }} />
    
    </Appbar.Header>
  );

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarStyle: { borderTopWidth: 0 },
        }}
      >
        <Tab.Screen
          name="Events"
          component={EventsScreen}
          options={{
            tabBarLabel: 'Eventos',
            tabBarIcon: ({ size }) => <Icon name="calendar" color={"#413267"} size={size} />,
            header: () => <CustomHeader />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ size }) => (
              <Image
                source={require('../assets/logo.png')}
                style={{ width: 80, height: 80, borderWidth: 4, borderColor: 'white', backgroundColor: 'white', borderRadius: 500, marginTop: -30 }}
              />
            ),
            header: () => <CustomHeader />,
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={ContactsScreen}
          options={{
            tabBarLabel: 'Contato',
            tabBarIcon: ({ color, size }) => <Icon name="phone" color={"#413267"} size={size} />,
            header: () => <CustomHeader />,
          }}
        />
      </Tab.Navigator>
      
      {dropdownVisible && (
        <Pressable
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: 'rgba(255, 0, 0, 0)',
            zIndex: 1000,
          }}
          onPress={() => setDropdownVisible(false)}
        />
      )}

      <DropDown
        isVisible={dropdownVisible}
        setIsVisible={setDropdownVisible}
        options={options}
        style={{ zIndex: 2000 }}
      />

    </>
  );
}

export default Routes;
