'use client'
import React,{useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import UserContext from '../../context/UserContext';

const page = () => {

    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);

    const {setLoggedin,setCustomerToken,setCartID,setCartVersion,setCartItems,setCartValue,setCartItemNO} = useContext(UserContext);

    const router= useRouter();

    useEffect(()=>{
        if(loading){
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Basic bUUtbXlHbEYzb0pYOWdYRXFNMndUaTBCOmprak9BWVdySS0wdlFaUk1POGlMYXBTT1VTTmpKVlBI");

            const raw = "";

            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            fetch(`https://auth.us-central1.gcp.commercetools.com/oauth/ekraahi-suraj/customers/token?grant_type=password&username=${userName}&password=${password}`, requestOptions)
            .then((response) => {
                if(!response.ok) throw new Error('Network is not ok response.')
                return response.json()
            })
            .then((result) =>{
                console.log(result.access_token);
                toast.success("Successfully Logged In");
                router.push('/');
                setLoggedin(true);
                setCustomerToken(result.access_token);
                return result.access_token;
            } )
            .then((response) =>{
                    const myHeaders = new Headers();
                    myHeaders.append("Content-Type", "application/vnd.api+json");
                    myHeaders.append("Authorization", `Bearer ${response}`);
                    const requestOptions = {
                    method: "GET",
                    headers: myHeaders,
                    redirect: "follow"
                    };
                    fetch("https://api.us-central1.gcp.commercetools.com/ekraahi-suraj/me/active-cart", requestOptions)
                    .then((response) => response.json())
                    .then((response)=>{
                        if(response.statusCode==404){
                            const myHeaders = new Headers();
                            myHeaders.append("Content-Type", "application/json");
                            myHeaders.append("Authorization", `Bearer ${response}`);

                            const raw = JSON.stringify({
                            "currency": "USD"
                            });

                            const requestOptions = {
                            method: "POST",
                            headers: myHeaders,
                            body: raw,
                            redirect: "follow"
                            };

                            fetch("https://api.us-central1.gcp.commercetools.com/ekraahi-suraj/me/carts", requestOptions)
                            .then((response) => response.json())
                            .then((response)=>{
                                setCartID(response.id);
                                setCartVersion(response.version);
                                return response.id;
                            })
                            .catch((error) => console.error(error));
                        }
                        else{
                            setCartID(response.id);
                            setCartVersion(response.version);
                            setCartItems(response.lineItems);
                            setCartValue(response.totalPrice.centAmount/100);
                            setCartItemNO(response.totalLineItemQuantity);
                        }
                    })
                    .catch((error) => console.error(error));
            })
            .catch((error) => {
                console.error(error);
                router.refresh('');
                toast.error("Login Failed");
            })
            .finally(() => setLoading(false));
        }
    },[loading])

    const handleSubmit=()=>{
        setLoading(true);
    }

  return (
    <div className='h-[100vh]'>
        <div className='flex flex-col justify-center items-center h-full gap-10'>
            <input type="email" placeholder='Username' className='px-10 py-3 rounded-md bg-white text-black' onChange={(e)=>setUserName(e.target.value)} />
            <input type="password" placeholder='Password' className='px-10 py-4 rounded-md bg-white text-black' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit} className='px-20 py-2 border-2 rounded-md text-black bg-slate-400'>Login</button>
            <h1 className='text-black text-md font-medium'>New User!  <Link href={'signup'} className='text-red-500'>SignUp</Link> </h1>  
        </div>
    </div>
  )
}

export default page