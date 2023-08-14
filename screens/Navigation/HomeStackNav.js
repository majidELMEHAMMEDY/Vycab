import { createStackNavigator } from '@react-navigation/stack';

import Home from "../Home"
import DrawerScreen from "./DrawerNavigation";
import MyWallet from '../MyWallet';
import History from '../History';
import LoginScreen from './Auth/Login';
import SignUp from './Auth/Signup';

const Stack = createStackNavigator();

export function MainNavigation() {
    return(
      <Stack.Navigator>
          <Stack.Screen name="Home" component={DrawerScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MyWallet" component={MyWallet} options={{ headerShown: false }} />
          <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
          
        </Stack.Navigator>
    )
  }

  export const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            title: 'Register', //Set Header Title
            headerStyle: {
              backgroundColor: '#307ecc', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
            headerShown: false
          }}
        />
      </Stack.Navigator>
    );
  };
  
  
   
   