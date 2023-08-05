import { createStackNavigator } from '@react-navigation/stack';

import Home from "../Home"
import DrawerScreen from "./DrawerNavigation";
import MyWallet from '../MyWallet';
const Stack = createStackNavigator();

export function MainNavigation() {
    return(
      <Stack.Navigator>
          <Stack.Screen name="Home" component={DrawerScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MyWallet" component={MyWallet} options={{ headerShown: false }} />
          
        </Stack.Navigator>
    )
  }
  
  
   
   