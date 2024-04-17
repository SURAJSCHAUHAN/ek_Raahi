'use client'
import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";

const page = () => {

    const [email,setEmail]=useState('');
    const [firstname,setFirstName]=useState('');
    const [lastname,setLastName]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(false);

    const router= useRouter();

    useEffect(()=>{
        if(loading){
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer IOOwSkZyfnz_kZCJSz908zyYJKOYlbcQ");

            const raw = JSON.stringify({
            "email": email,
            "firstName": firstname,
            "lastName": lastname,
            "password": password
            });

            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            fetch("https://api.us-central1.gcp.commercetools.com/ekraahi-suraj/customers", requestOptions)
            .then((response) => response.text())
            .then((result) =>{
                console.log(result);
                toast.success("Successfully Created");
                router.push('/login');
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }
    },[loading])

    const handleSubmit=()=>{
        setLoading(true);
    }
  return (
    <div className='h-[100vh]'>
        <div className='flex flex-col justify-center items-center h-full gap-10'>
            <div className='flex gap-5'>
                <input type="text" placeholder='First Name' className='px-10 py-3 rounded-md bg-white text-black' onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" placeholder='Last Name' className='px-10 py-3 rounded-md bg-white text-black' onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <input type="email" placeholder='Email' className='px-10 py-4 rounded-md bg-white text-black' onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Password' className='px-10 py-4 rounded-md bg-white text-black' onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit} className='px-20 py-2 border-2 rounded-md text-black bg-slate-400'>Register</button>
            <h1 className='text-black text-md font-medium'>Existing User!  <Link href={'login'} className='text-red-500'>Login Here</Link> </h1>  
        </div>
    </div>
  )
}

export default page