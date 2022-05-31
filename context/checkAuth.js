import { useState, createContext } from "react";

export const AuthenticationContext = createContext()

function AuthenticationProvider(props){
    const [auth ,setAuth] =useState(true)
    function setAuthentication(){
        setAuth(true)
    }
    const value  = {auth ,setAuthentication}
    return(
        <AuthenticationContext.Provider value={value}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider;