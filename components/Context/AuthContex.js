import React, { createContext, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [userToken, setUserToken] = useState(null);
    const [test,setTest] = useState('blq')
    

    const login = () => {
        setIsLoading(true)
        setUserToken('blablabla');
        AsyncStorage.setItem('userToken','blablabla');
        setIsLoading(false);
    }
    const logout = () => {
        setIsLoading(false);
        setUserToken(null);
        AsyncStorage.removeItem('userToken')
        setIsLoading(false);
        console.log('clicked logout')
    }

    const isLoggedIn = async () => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);

        }catch(e) {
            console.log(`isLogged in erro ${e}`)
        }
    }

    useEffect(()=>{
        isLoggedIn();

        AsyncStorage.removeItem('userToken')
    },[])
    return (
        <AuthContext.Provider value={{login,logout, isLoading, userToken,test}}>
            {children}
        </AuthContext.Provider>
    )
}