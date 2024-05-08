'use client'
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider=({children})=>{
    const [userdata,setUserData]=useState({});
    const [loggedin,setLoggedin]=useState(false);
    const [customertoken,setCustomerToken]=useState('');
    const [cartID,setCartID]=useState('');
    const [cartVersion,setCartVersion]=useState();
    const [cartItems,setCartItems]=useState([]);
    const [cartValue,setCartValue]=useState();
    const [cartitemNO,setCartItemNO]=useState(0);
    const accessToken='lExDn6WT13W2BYBIsOcAVlK9pGjY-KUJ';

    return(
        <UserContext.Provider value={{accessToken, userdata, setUserData, loggedin, setLoggedin, customertoken, setCustomerToken,cartID,setCartID,cartVersion,setCartVersion,cartItems,setCartItems,cartValue,setCartValue,cartitemNO,setCartItemNO}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider;