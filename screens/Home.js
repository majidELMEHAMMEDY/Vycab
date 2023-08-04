
import React, {useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Button,Dimensions, Image,Text } from 'react-native';
import * as Location from 'expo-location';
import {MaterialCommunityIcons,FontAwesome5, Entypo,SimpleLineIcons} from "@expo/vector-icons";


import Header from '../components/Header/Header';
import Status from '../components/Status';
import User from "../assets/user.jpg";
export default function Home({navigation}) {
  const [mapRegion, setMapRegion] = useState({
    latitude: 48.858093,
    longitude: 48.858093,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
   
  })

  const [isOnline, setISOnline] = useState(false)
  const userLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if(status !== 'granted'){
      //setError
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true})
    setMapRegion({
      latitude : location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    })
  }

  useEffect(() => {
    userLocation();
  },[])
  return (
    <View style={styles.container}>
      <Header online={isOnline} setISOnline={setISOnline} navigation={navigation}/>
      <Status online={isOnline}/>
      <MapView style={styles.map}
        region={mapRegion}
      >
          <Marker  coordinate={mapRegion} title='Marker'/>
      </MapView>
      <View style={styles.buttomContainer}>
        <View style={styles.topGroup}>
            <View style={styles.leftGroup}>
                <Image source={User} style={styles.profileImage} />
                <View style={{marginLeft:10}}>
                   <Text style={{fontWeight:'bold',fontSize:16}}>Ashfak</Text>
                   <Text style={{fontWeight:'bold',fontSize:16}}>Sayem</Text>
                   <Text style={{fontSize:10,color:'gray'}}>Basic Level</Text>
                </View>
            </View>
            <View style={styles.rightGroup}>
                   <Text style={{fontWeight:'bold',fontSize:18}}>$575.50</Text>
                   <Text style={{fontSize:10,color:'gray'}}>Eaarned</Text>
            </View>
        </View>
        <View style={styles.buttomGroup}>
              <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <Entypo
                    name="stopwatch"
                    size={40}
                    color="#fff"
                  />
                  <Text style={{fontWeight:'bold',fontSize:18,marginTop:5}}>10.2</Text>
                  <Text>Hours Online</Text>
              </View>

              <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <SimpleLineIcons
                    name="speedometer"
                    size={40}
                    color="#fff"
                  />
                  <Text style={{fontWeight:'bold',fontSize:18,marginTop:5}}>30.5 KM</Text>
                  <Text>Distance Travelled</Text>
              </View>

              <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <FontAwesome5
                    name="clipboard-list"
                    size={40}
                    color="#fff"
                  />
                  <Text style={{fontWeight:'bold',fontSize:18,marginTop:5}}>20</Text>
                  <Text>Total Jobs</Text>
              </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height-100,
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 50,
  },
  buttomContainer: {
    display:'flex',
    height:400,
    width:Dimensions.get('screen').width,
    
  },
  leftGroup : {
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
  rightGroup : {
    display:'flex',
    alignItems:'center',
  },
  topGroup : {
    display:'flex',
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingHorizontal:30,
    paddingTop:30
  },
  buttomGroup:{
    backgroundColor:'#0087b0',
    borderRadius:20,
    width:'90%',
    height:100,
    alignSelf: 'center',
    marginTop:30,
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center'
  }
});









