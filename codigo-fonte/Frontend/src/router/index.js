import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/home';
import Contacts from '../screens/contacts';
import Events from '../screens/events';


const Tab = createBottomTabNavigator();

function Routes () {
    return(
            
            
            <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,                           
            }}
            backBehavior="none"
          >
              <Tab.Screen
                  name="Events"
                  component={Events}
              />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />            
              <Tab.Screen
                  name="Contacts"
                  component={Contacts}
              />
        </Tab.Navigator>
    )
}

export default Routes;