import React from "react";
import { View, Text, StyleSheet,Dimensions } from "react-native";

import {Ionicons, MaterialIcons, Entypo, FontAwesome} from "@expo/vector-icons";


export default function HistoryCard({start,finish,Starttime,finishTime,name,price}) {
    return ( 
        <View style={styles.card}>
                  <View style={styles.topContent}>
                     <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                         <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <FontAwesome name="dot-circle-o" size={30} color="#0087b0" />
                            <Text style ={{fontWeight:'bold',fontSize:'16',marginLeft:10}}> {start}</Text>
                         </View>
                        <Text>{Starttime} AM</Text>
                     </View>

                     <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between', alignItems:'center'}}>
                         <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                            <Ionicons name="location-sharp"  size={30} color="#F22B4D" />
                            <Text style ={{fontWeight:'bold',fontSize:'16',marginLeft:10}}> {finish}</Text>
                         </View>
                        <Text>{finishTime} AM</Text>
                     </View>
                  </View>
                  <View style={styles.ButtomContent}>
                     <View style={styles.buttomItem}>
                        <View style={{width:40,height:40,backgroundColor:'gray',borderRadius:50}}></View>
                        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:5}}>{name}</Text>
                     </View>
                     <View style={{width:60}}>
                        
                         <Text style={{marginLeft:5,color:'gray'}}>Price</Text>
                        <Text style={{fontSize:18,marginLeft:5}}>{price}$</Text>
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
         width:'95%',
         display:'flex',
         alignItems:'center',
         marginBottom:25,
     
       },
       buttomItem: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
      },
      topContent : {
        backgroundColor:'#e6e8e7',
        height:150,
        display:'flex',
        width:'100%',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        padding:20,
        justifyContent:'space-between'
    },
    ButtomContent : {
    borderTopColor:'gray',
    borderTopWidth:0.5,
    display:'flex',
    flexDirection:'row',
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:20,
    height:80
    }
})



