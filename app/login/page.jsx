'use client'
import React,{useContext, useEffect, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";
import UserContext from '../context/UserContext';

const page = () => {

    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);

    const {setLoggedin,setCustomerToken} = useContext(UserContext);

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
            } )
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