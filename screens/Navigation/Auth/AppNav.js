import { View,Text, ActivityIndicator } from "react-native";
import React, { useContext, useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { MainNavigation, Auth} from "../HomeStackNav";
import { AuthContext } from "../../../components/Context/AuthContex";

const AppNav = () => {
      const { userToken, isLoading } = useContext(AuthContext)
  const [isLogedIn,setisLogedIn] = useState(false)
  //const [user, setUser] = useState();
 

  if(isLoading) {
    return(
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size={'large'} />
     </View>
    )
  }
  console.log(isLoading)
  
    return(
      <NavigationContainer>
        { userToken !== null  ? <MainNavigation/> : <Auth/> }
      </NavigationContainer>
    )
}

export default AppNav