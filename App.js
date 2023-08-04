import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import User from "./assets/user.jpg";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import DrawerContent from "./components/Drawer/DrawerContent";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
      <Drawer.Navigator
         drawerContent={(props) => <DrawerContent {...props} />}
        
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
         
          
        }}
        screenOptions={{headerShown:false}}
      >
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: "Home",
            title: "Home",
            drawerIcon: () => (
              <SimpleLineIcons name="home" size={20} color="#808080" />
            ),
          }}
          component={Home}
        />
        <Drawer.Screen
          name="Contact"
          options={{
            drawerLabel: "Contact",
            title: "Contact",
            drawerIcon: () => (
              <MaterialCommunityIcons
                name="message-alert-outline"
                size={20}
                color="#808080"
              />
            ),
          }}
          component={Contact}
        />
      </Drawer.Navigator>
    </NavigationContainer>
   
  );
}
