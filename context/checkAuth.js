import { useState, createContext } from "react";

export const AuthenticationContext = createContext()

function AuthenticationProvider(props){
    const [auth ,setAuth] =useState(false)
    function setAuthentication(arg){
        setAuth(arg)
    }
    const value  = {auth ,setAuthentication}
    return(
        <AuthenticationContext.Provider value={value}>
            {props.children}
        </AuthenticationContext.Provider>
    )
}

export default AuthenticationProvider;