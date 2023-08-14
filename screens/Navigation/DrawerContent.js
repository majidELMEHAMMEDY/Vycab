import { View, Text,Image,TouchableOpacity,ScrollView , StyleSheet,Dimensions} from "react-native";
import React, { useState, useCallback, useContext }  from "react";
import {
    DrawerItemList,
  } from "@react-navigation/drawer";
  import {
    SimpleLineIcons,
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    Ionicons,
    Entypo
  } from "@expo/vector-icons";



import User from "../../assets/user.jpg";
import MenuElement from "../../components/Drawer/MenuElement";
import { AuthContext } from "../../components/Context/AuthContex";
const Icon = Entypo;
const  DrawerContent = ({navigation}) => {
const {logout} = useContext(AuthContext)
    return (
        <ScrollView >
        <View style={styles.drawerContainer}>
          <View style={styles.profileContainer}>
            <Image source={User} style={styles.profileImage} />
            <View style={{marginLeft:10}}>
                <Text style={styles.profileName}>Ashfak Sayem</Text>
                <Text style={styles.profileEmail}>AshfakSayem@gmail.com</Text>
            </View>
            
          </View>
          <TouchableOpacity style={styles.button}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>Dashboard</Text>
            </TouchableOpacity>
          <View style={{display:'flex',justifyContent:'space-between',flex:1}}>
              <View style={styles.menuContainer}>
                <MenuElement   title="Vehicle" icon="car-side" onPress={() => navigation.navigate('MyWallet') } type={FontAwesome5}/>
                <MenuElement   title="Home" icon="home" onPress={() => navigation.navigate('Home')} type={Fontisto}/>
                <MenuElement   title="My Wallet" icon="wallet" onPress={() => navigation.navigate('MyWallet') } type={FontAwesome5}/>
                <MenuElement   title="History" icon="history" onPress={() => navigation.navigate('History')} type={FontAwesome5}/>
                <MenuElement   title="Invite a friend" icon="gift" onPress={() => console.log('Marques') } type={Ionicons}/>
                <MenuElement   title="Settings" icon="ios-settings" onPress={() => console.log('Marques') } type={Ionicons}/>
                <MenuElement   title="Logout" icon="log-out" onPress={() => logout()} type={Entypo}/>
               
              </View>
              
          </View>
        </View>
      </ScrollView>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
    },
    drawerContainer: {
      height: Dimensions.get('screen').height,
      display: 'flex',
      justifyContent: 'flex-start',
      
    },
    profileContainer: {
      height: 200,
      width: '100%',
      justifyContent: 'center',
      backgroundColor: '#fff',
      display:'flex',
      flexDirection:"row",
      alignItems:'center'
    },
    profileImage: {
      height: 50,
      width: 50,
      borderRadius: 50,
    },
    profileName: {
      fontSize: 16,
      marginVertical: 6,
      fontWeight: 'bold',
      color: '#111',
    },
    profileEmail: {
      fontSize: 16,
      color: '#111',
    },
    menuContainer: {
     display:'flex'
    },
    logoutContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom: 20,
    },
    logoutButton: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 30,
      width: '80%',
      marginLeft: 20,
    },
    logoutText: {
      marginLeft: 30,
      fontWeight: 'bold',
    },
    button:{
        backgroundColor:'#0087b0',
        width:180,
        height:60,
        alignItems: 'center',
        justifyContent : 'center',
        borderRadius: 15,
        alignSelf :'center',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
  });
  