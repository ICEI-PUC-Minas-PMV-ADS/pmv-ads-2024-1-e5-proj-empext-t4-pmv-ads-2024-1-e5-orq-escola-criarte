import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'


import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import Contacts from '../screens/contacts';
import Events from '../screens/events';


const Tab = createBottomTabNavigator();

function Routes () {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Login"
                component={LoginScreen}
            />
            <Tab.Screen
                name="Contacts"
                component={Contacts}
            />
            <Tab.Screen
                name="Events"
                component={Events}
            />
        </Tab.Navigator>
    )
}

export default Routes;