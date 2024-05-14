import * as React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home';
import ContactsScreen from '../screens/contacts';
import EventsScreen from '../screens/events';
import { useNavigation } from '@react-navigation/native';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '../config/authUtils';
import { StackTypes } from './stack';
import DropDown from '../components/DropDown';

interface UserData {
  'user_name': string;
  'role': string;
}

const Tab = createBottomTabNavigator();

function CustomHeader() {
  const [visible, setVisible] = React.useState(false);
  const [username, setUsername] = React.useState<string>('');
  const navigation = useNavigation<StackTypes>();
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  const closeMenu = () => setVisible(false);

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

  React.useEffect(() => {
    async function fetchUserData() {
      try {
        const token = await getToken();
        if (token) {
          const decoded = jwtDecode<UserData>(token);
          setUsername(decoded['user_name']);

          if (decoded['role'] === 'Admin') {
            setVisible(true);
          }

        } else {
          console.log('Token é nulo');
        }
      } catch (error) {
        console.error("Erro ao obter os dados do usuário:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <Appbar.Header>
      {dropdownVisible && (
        <Pressable style={styles.overlay} onPress={() => setDropdownVisible(false)} />
      )}
      <Image
        style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 5 }}
        source={require('../assets/logo.png')}
      />
      <Appbar.Content title={`Olá, ${username}`} titleStyle={{ textAlign: 'center', fontWeight: 'bold', color: '#413267' }} />
      
      <DropDown
        isVisible={dropdownVisible}
        setIsVisible={setDropdownVisible}
        options={[
          { label: 'Administração', action: handleAdmin },
          { label: 'Perfil', action: handleProfile },
          { label: 'Sair', action: handleLogout },
          { label: 'Fechar', action: closeMenu },
        ]}
      />
    </Appbar.Header>
  );
}

function Routes() {
  return (
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
              style={{ width: 90, height: 90, marginTop: -50 }}
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
  );
}




const styles = StyleSheet.create({

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: 'red',
  },

})


export default Routes;