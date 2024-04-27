'use client'
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [userdata,setUserData]=useState({});
    const [loggedin,setLoggedin]=useState(false);
    const [customertoken,setCustomerToken]=useState('');
    const accessToken='jNNg7nba3Qtf7g2W22nz7uEYLOikA0Gq';

    return(
        <UserContext.Provider value={{accessToken, userdata, setUserData, loggedin, setLoggedin, customertoken, setCustomerToken}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;