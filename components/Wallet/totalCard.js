import React from "react";
import { View, Text, StyleSheet,Dimensions } from "react-native";

import {Ionicons, MaterialIcons} from "@expo/vector-icons";


export default function TotalCard() {
    return ( 
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
    )
}

const styles = StyleSheet.create({
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
         width:Dimensions.get('screen').width-10,
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