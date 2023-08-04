import { View, Text, StyleSheet, Switch } from "react-native";
import React from "react";
import {MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header ({navigation,online,setISOnline}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity  onPress={() => navigation.openDrawer()} style={styles.iconContainer}>
        <MaterialCommunityIcons
                name="segment"
                size={30}
                color="#333"
               
              />
        </TouchableOpacity>
        <Text style={styles.TitleText}>$575.50</Text>
        <Switch
          onValueChange={(value) => setISOnline(value)}
          value={online}
        />
       
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      display: 'flex',
      backgroundColor: '#f4f4f4',
      height: 120,
      width:'100%',
      alignItems:'center',
      justifyContent: 'space-between',
      paddingHorizontal:25,
      flexDirection: 'row',
      position: 'absolute',
      top:0,
      zIndex:80
    },
    iconContainer: {
            display:'flex',
            alignItems:'center',
            justifyContent: 'center',
            backgroundColor:"#fff",
            width:40,
            height:40,
            borderRadius:50,
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
        
    },
    TitleText : {
        fontWeight : "bold",
        fontSize : 25
    }
    
  });
