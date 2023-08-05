import {
    DrawerItemList,
    createDrawerNavigator,
  } from "@react-navigation/drawer";
import User from "../../assets/user.jpg";
import Home from "../Home";
import DrawerContent from "./DrawerContent";
import MyWallet from "../MyWallet";

const Drawer = createDrawerNavigator();

export default function DrawerScreen({navigation}) {


    return (
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
         component={MyWallet}
       />
     </Drawer.Navigator>
    )
}