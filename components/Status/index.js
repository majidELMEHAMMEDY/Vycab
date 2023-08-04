import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {MaterialCommunityIcons, Feather } from "@expo/vector-icons";
function Online  ()  {

  return (
    <View style={styles.container}>
    <View style={styles.iconContainer}>
     <Feather
             name="moon"
             size={50}
             color="#333"
            
           />
     </View>
     <View style={styles.titleContainer}>
       <Text style={styles.TitleText}>You are Online!</Text>
       <Text style={{marginLeft:15}}>You can now accept Jobs</Text>
     </View>
 </View>
  )
}
function Offline () {
  return (
  <View style={[styles.container,{backgroundColor:'orange'}]}>
    <View style={styles.iconContainer}>
    <Feather
            name="moon"
            size={50}
            color="#333"
            
          />
    </View>
    <View style={styles.titleContainer}>
      <Text style={styles.TitleText}>You are offline!</Text>
      <Text style={{marginLeft:15}}>Go online to start accepting Jobs</Text>
    </View>
  </View>
)
}
export default function Status({online}) {
  const [isOn,setIsOn] = useState(false);
  useEffect(() => {
      setIsOn(online)
  })
  let backgroundcolor;
 
  return (
     <>
        {isOn ? <Online/> : <Offline/>}
     </>
  );
}



const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: 'green',
      height: 80,
      width:'100%',
      alignItems:'center',
      paddingHorizontal:25,
      flexDirection: 'row',
      position: 'absolute',
      top:90,
      zIndex:80
    },
    iconContainer: {
            display:'flex',
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor:"#fff",
            width:60,
            height:60,
            borderRadius:50,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
        
    },
    TitleText : {
        fontWeight : "bold",
        fontSize : 20,
    },
    titleContainer:{
      marginLeft:10
    }
    
  });
