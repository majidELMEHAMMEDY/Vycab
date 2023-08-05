import { View, Text,StyleSheet,TouchableOpacity,Dimensions } from "react-native";
import React from "react";

import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";


export default function MyWallet({navigation}) {
  return (
    <View style={styles.container}>
        <View  style={styles.titleContainer}>
            <View style={styles.header}>
                 <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="arrow-back" size={30} color='#fff' />
                 </TouchableOpacity>
                 <Text style={styles.titleText}>Wallet</Text>
            </View>
        </View>
        <View style={{display:'flex',alignItems:'center',position:'absolute',top:150,left:15}}>
            <View style={styles.card}>
                  <Text style={[styles.titleText,{color:'#333',fontSize:20}]}>Last 1 Month</Text>
                  <Text style={[styles.titleText,{color:'#0087b0',fontSize:30}]}>$12,491.22</Text>
                  <View style={{borderTopColor:'gray',borderTopWidth:0.5,display:'flex',flexDirection:'row',width:'100%',marginTop:30,justifyContent:'space-between',paddingHorizontal:20}}>
                     <View style={styles.buttomItem}>
                        <MaterialIcons name="repeat" size={24} color='#333' />
                        <Text style={{fontWeight:'bold',marginLeft:5}}>244 Rides</Text>
                     </View>
                     <View style={styles.buttomItem}>
                        <Ionicons name="md-stopwatch-outline" size={24} color='#333' />
                        <Text style={{fontWeight:'bold',marginLeft:5}}>25D 12H</Text>
                     </View>
                  </View>
            </View>

            <View style={[styles.card]}>
                  <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',flex:1}}>
                     <Text style={[styles.titleText,{color:'#333',fontSize:20}]}>Last 1 Month</Text>
                     <View>
                      <Text>.</Text>
                     </View>
                  </View>
                  
            </View>

            {/* <View style={styles.card}>
                  <Text style={[styles.titleText,{color:'#333',fontSize:20}]}>Last 1 Month</Text>
                  <Text style={[styles.titleText,{color:'#0087b0',fontSize:30}]}>$12,491.22</Text>
                  <View style={{borderTopColor:'gray',borderTopWidth:0.5,display:'flex',flexDirection:'row',width:'100%',marginTop:30,justifyContent:'space-between',paddingHorizontal:20}}>
                     <View style={styles.buttomItem}>
                        <MaterialIcons name="repeat" size={24} color='#333' />
                        <Text style={{fontWeight:'bold',marginLeft:5}}>244 Rides</Text>
                     </View>
                     <View style={styles.buttomItem}>
                        <Ionicons name="md-stopwatch-outline" size={24} color='#333' />
                        <Text style={{fontWeight:'bold',marginLeft:5}}>25D 12H</Text>
                     </View>
                  </View>
            </View> */}
        </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      
    },
    titleContainer : {
      backgroundColor : '#0087b0',
      width : '100%',
      height:200,
      display :'flex',
      justifyContent:'center',
      borderBottomEndRadius:50,
      borderBottomLeftRadius:50
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      width:'60%',
      justifyContent:'space-between',
      paddingHorizontal:30
      
    },
     titleText:{
      fontSize:25,
      fontWeight:'bold',
      color:'#fff'
     },
     card:{
       backgroundColor:'#fff',
       shadowColor: '#171717',
       shadowOffset: {width: -2, height: 4},
       shadowOpacity: 0.2,
       shadowRadius: 3,
       borderRadius:30,
       width:Dimensions.get('screen').width-30,
       padding:10,
       display:'flex',
       alignItems:'center',
       marginBottom:25
   
     },
     buttomItem: {
      display:'flex',
      flexDirection:'row',
      alignItems:'center'
    }
})