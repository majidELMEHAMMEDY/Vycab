

import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {MaterialCommunityIcons,FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

let Icon ;
const MenuElement = ({title,icon,onPress,type}) => {
  Icon = type;
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
              <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <Icon
                        name={icon}
                        color="gray"
                        size={30}
                        
                    />
                    
                    <Text style={{marginLeft:15,fontWeight:'bold'}}>{title}</Text>
              </View>
            
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container : {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:30,
    paddingTop:30,
    width:'80%',
    marginLeft:20,
    paddingBottom:10
}
});

export default MenuElement;
