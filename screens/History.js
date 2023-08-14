
import { View, Text,StyleSheet,TouchableOpacity,Dimensions, } from "react-native";
import React from "react";
import {Ionicons, MaterialIcons,AntDesign} from "@expo/vector-icons";
import { ScrollView,FlatList } from "react-native-gesture-handler";

import HistoryCard from "../components/Wallet/HistoryCard";

const Trips = [
    {
        start :'State Park',
        finish : 'Cenima Park',
        Starttime : '7:44',
        finishTime :'7:50',
        name :'Michael Bracewell',
        price : 9.05
    },
    {
        start :'State Park',
        finish : 'Cenima Park',
        Starttime : '7:44',
        finishTime :'7:50',
        name :'Michael Bracewell',
        price : 9.05
    },
    {
        start :'State Park',
        finish : 'Cenima Park',
        Starttime : '7:44',
        finishTime :'7:50',
        name :'Michael Bracewell',
        price : 9.05
    },

]
export default function History({navigation}) {
    
        return (
            <View style={styles.container}>
                <View  style={styles.titleContainer}>
                    <View style={styles.header}>
                         <TouchableOpacity style={styles.cancelContainer} onPress={() => navigation.goBack()}>
                          <AntDesign name="close" size={30} color='#333'  />
                         </TouchableOpacity>
                         <Text style={styles.titleText}>Trip History</Text>
                    </View>
                </View>
                <View style={styles.BodyContainer}>
                     <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',width:'95%',marginBottom:30}}>
                        <Text style={[styles.titleText,{color:'#333',fontSize:20}]}>History</Text>
                        <TouchableOpacity style ={{backgroundColor:'#333',height:40,width:100,borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                             <Text style={[styles.titleText,{color:'#fff',fontSize:14}]}>This Month</Text>
                        </TouchableOpacity>
                    </View>
                
                   <FlatList 
                    data={Trips}
                    style={{
                        flex:1,
                        width:Dimensions.get("window").width,
                        height:"100%",
                        paddingLeft:20
                      }}
                      contentContainerStyle = {{
                        display:'flex',
                      }}
                    renderItem={({item}) => (
                        <HistoryCard 
                        start={item.start}
                         finish={item.finish} 
                         Starttime={item.Starttime} 
                         finishTime ={item.finishTime}  
                         name= {item.name} 
                         price= {item.price} />
                
                    ) }
                  />

                   
                </View>
            </View>
          );
    
}






const styles = StyleSheet.create({
    container: { 
      display:'flex',
    },
    titleContainer : {
      backgroundColor : '#0087b0',
      width : '100%',
      height:200,
      display :'flex',
      justifyContent:'center',

    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      width:'80%',
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
    },
    BodyContainer : {
        display:'flex',
        alignItems:'center',
        position:'absolute',
        top:150,
        borderTopRightRadius:50,
        borderTopLeftRadius:50,
        backgroundColor:'#fff',
        paddingTop:40,
        width:'100%',
        paddingHorizontal:20

    },
    cancelContainer : {
        backgroundColor:'#fff',
         width:50,height:50 ,
         borderRadius:50,
         justifyContent:'center',
         alignItems:'center'
        }
})