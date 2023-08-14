import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    Dimensions
  } from "react-native";
  import React, { useState, useCallback, useContext } from "react";
  import { PhoneInput, getCountryByCca2 } from 'react-native-international-phone-number';
  
  import { ScrollView } from "react-native-gesture-handler"
  import { AuthContext } from "../../../components/Context/AuthContex";
  
  
  const LoginScreen = ({ navigation }) => {
    const {login}  = useContext(AuthContext)
    const Spacing =10
     
        const [selectedCountry, setSelectedCountry] = useState(getCountryByCca2('MA'));
        const [inputValue, setInputValue] = useState('');

        function handleInputValue(phoneNumber) {
            setInputValue(phoneNumber);
        }

        function handleSelectedCountry(country) {
            setSelectedCountry(country);
        }

    return (
      <View style={{alignItems:'center',flex:1}} >
         <Image source={require('../../../assets/loginBack.jpeg')}/>
         <Image  source={require('../../../assets/logoV.png')} style={{width:100,height:100,position:'absolute',top:150}}/>
         <View style={styles.card}>
            <Text style={{fontWeight:'bold',fontSize:20,alignSelf:'flex-start'}}>Login with your phone number</Text>
            <View style={{backgroundColor:'#109DC1',height:5,width:100,borderRadius:30,marginTop:10,alignSelf:'flex-start'}}></View>
            
            <PhoneInput
                value={inputValue}
                onChangePhoneNumber={handleInputValue}
                selectedCountry={selectedCountry}
                onChangeSelectedCountry={handleSelectedCountry}
                inputStyle={{
                    color: '#333',
                    fontWeight:'bold',
                    fontSize:18
                  }}
                  containerStyle={{
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#F3F3F3',
                    marginVertical: 16,
                    borderLeftWidth:0
                  }}
                  flagContainerStyle={{
                    borderTopLeftRadius: 7,
                    borderBottomLeftRadius: 7,
                    justifyContent: 'center',
                    borderRightWidth:1,
                    borderRightColor:'#F3F3F3'
                    
                  }}
            />
             <TouchableOpacity
          style={{
            padding: 20,
            backgroundColor: '#109DC1',
            marginVertical: 30,
            borderRadius: 10,
            shadowColor: "#333",
            shadowOffset: {
              width: 0,
              height: Spacing,
            },
            shadowOpacity: 0.3,
            shadowRadius: 10,
            width:'90%'
            
          }}
          onPress={()=> {login()}}
        >
          <Text
            style={{
              color: '#fff',
              textAlign: "center",
              fontSize: 16,
              fontWeight:'bold'
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
         </View>
       
         <View
            style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center', position:'absolute',bottom:30}}
        >
            <Text
                style={{color:'gray'}}
            >
                You don't have an account ?
            </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          
        >
          <Text
            style={{
              color: '#333',
              textAlign: "center",
              fontWeight:'bold',
              marginLeft:0
            }}
          >
            sign up
          </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({

    card:{
        backgroundColor:'#fff',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius:10,
        width:'95%',
        display:'flex',
        alignItems:'center',
        marginBottom:25,
        padding:30,
        position:'absolute',
        top: Dimensions.get('screen').height/3
    
      },
  });