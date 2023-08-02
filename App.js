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
// import Backups from "./screens/Backups";
// import Categories from "./screens/Categories";
import Contact from "./screens/Contact";
// import Customize from "./screens/Customize";
// import GetPremium from "./screens/GetPremium";
import Home from "./screens/Home";
// import RateApp from "./screens/RateApp";
// import Settings from "./screens/Settings";
// import Timer from "./screens/Timer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          return (
            <View>
              <View
                style={{
                  height: 200,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderBottomColor: "#f4f4f4",
                  borderBottomWidth: 1,
                }}
              >
                <Image
                  source={User}
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 65,
                  }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    marginVertical: 6,
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  Isabella Joanna
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    color: "#111",
                  }}
                >
                  Product Manager
                </Text>
              </View>
              <DrawerItemList {...props} />
            </View>
          );
        }}
        screenOptions={{
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          drawerLabelStyle: {
            color: "#111",
          },
        }}
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
