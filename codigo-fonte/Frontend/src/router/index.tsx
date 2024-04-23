import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Appbar, Avatar, Menu } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/home';
import ContactsScreen from '../screens/contacts';
import EventsScreen from '../screens/events';
import ProfileScreen from '../screens/profile';
import { useNavigation } from '@react-navigation/native';
import { jwtDecode } from 'jwt-decode';
import { getToken } from '../config/authUtils';
import { StackTypes } from './stack';

interface UserData {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
}

const Tab = createBottomTabNavigator();

function CustomHeader() {
  const [visible, setVisible] = React.useState(false);
  const [username, setUsername] = React.useState<string>('');
  const navigation = useNavigation<StackTypes>();

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

  React.useEffect(() => {
    async function fetchUserData() {
      try {
        const token = await getToken();
        if (token) {
          const decoded = jwtDecode<UserData>(token);
          setUsername(decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name']);
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
      <Image
        style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 5 }}
        source={require('../assets/avatar.png')}
      />
      <Appbar.Content title={`Olá, ${username}`} titleStyle={{ textAlign: 'center', fontWeight: 'bold', color: '#413267' }} />
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

export default Routes;
