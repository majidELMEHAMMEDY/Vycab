import React from "react";
import { View, Text, StyleSheet,Dimensions } from "react-native";

import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const History = [
    {
        date: '14/06/2023',
        time : '14:24 AM',
        price : '100$'
    },
    {
        date: '14/06/2023',
        time : '14:24 AM',
        price : '100$'
    },
    {
        date: '14/06/2023',
        time : '14:24 AM',
        price : '100$'
    }, {
        date: '14/06/2023',
        time : '14:24 AM',
        price : '100$'
    },
    {
        date: '14/06/2023',
        time : '14:24 AM',
        price : '100$'
    },
]


export default function WithrawHestory() {
    return ( 
        <View style={styles.card}>
                    <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'95%',marginTop:10}}>
                        <Text style={[styles.titleText,{color:'#333',fontSize:20}]}>Withdrawal History</Text>
                        <TouchableOpacity style ={{backgroundColor:'#e1ecf0',height:40,width:100,borderRadius:15,justifyContent:'center',alignItems:'center'}}>
                             <Text style={[styles.titleText,{color:'#0087b0',fontSize:18}]}>View All</Text>
                        </TouchableOpacity>
                    </View>
                   
                  

                   {
                     History.map((item) => {
                        return (
                            <View style={{borderBottomColor:'gray',borderBottomWidth:0.5,display:'flex',flexDirection:'row',width:'100%',paddingBottom:15,justifyContent:'space-between',paddingHorizontal:20,marginTop:10}}>
                                <View style={{width:20,height:20,backgroundColor:'#0087b0',borderRadius:5}}></View>
                                <Text style={{fontSize:18}}>{item.date} {item.time}</Text>
                                <Text style={{fontWeight:'bold',fontSize:20,color:'green'}}>{item.price}</Text>
                            </View>
                        )
                     })
                   }

                 
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
         marginBottom:25,
         paddingBottom:30
     
       },
       buttomItem: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
      },
      headerContainer :{
        display:'flex',

      },
      button :{

      }
})