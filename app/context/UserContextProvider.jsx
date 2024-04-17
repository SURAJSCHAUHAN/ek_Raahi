'use client'
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [userdata,setUserData]=useState({});
    const [loggedin,setLoggedin]=useState(false);
    const [customertoken,setCustomerToken]=useState('');
    const accessToken='VcP-iPoC2duk_fhqLFxd-U_Y_BicJN5l';

    return(
        <UserContext.Provider value={{accessToken, userdata, setUserData, loggedin, setLoggedin, customertoken, setCustomerToken}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;