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

import DrawerScreen from "./screens/Navigation/DrawerNavigation";
import { MainNavigation } from "./screens/Navigation/HomeStackNav";

import AppNav from "./screens/Navigation/Auth/AppNav";
import { AuthProvider } from "./components/Context/AuthContex";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
   
      
    <AuthProvider>
    <AppNav/>
  </AuthProvider>
   
  );
}
