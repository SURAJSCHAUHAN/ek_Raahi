'use client'
import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import UserContext from '../context/UserContext'

const page = () => {

  const router=useRouter();

    const {loggedin,customertoken}=useContext(UserContext);

    const [userInfo,setUserInfo]=useState({});


    useEffect(()=>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${customertoken}`);

        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };

        fetch("https://api.us-central1.gcp.commercetools.com/ekraahi-suraj/me?", requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            setUserInfo(result);
            setAddresses(result.addresses);
          })
          .catch((error) => console.error(error));
    },[]);

  return (
    <div className='h-[100vh] flex pt-32 px-10'>
        <div className='w-1/3 flex flex-col gap-5 h-full'>
          <h1 className='text-3xl font-semibold text-black'>Your Account</h1>
          {loggedin?(
            <div className='flex flex-col gap-5'>
                <div className='flex  gap-5'>
                    <h1 className='text-xl font-medium text-black'>Name:</h1>
                    <h1 className='text-xl font-medium text-gray-700'>{userInfo.firstName} {userInfo.lastName}</h1>
                </div>
                <div className='flex gap-5'>
                    <h1 className='text-xl font-medium text-black'>Email:</h1>
                    <h1 className='text-xl font-medium text-gray-700'>{userInfo.email}</h1>
                </div>
                {
                  userInfo.isEmailVerified?(
                    ''
                  ):(
                    <div className='flex text-center px-5 py-2 w-[10vw] bg-red-400 text-black'>
                      <button className=' rounded-lg'>Verify Email</button>
                    </div>
                  )}
                
            </div>
          ):(
            <div><h1 className='text-red-500'><Link href={'login'}>Please Login</Link></h1>
              {router.push('login')}
            </div>
          )}
        </div>
        <div className='w-2/3 flex flex-col gap-5 h-full'>
            <div className='w-full h-[50%]'>
              <h1 className='text-3xl font-semibold text-black'>Your Orders</h1>
            </div>
            <div className='w-full h-[50%]'>
              <h1 className='text-3xl font-semibold text-black py-3'>Your Addresses</h1>
              <div className='grid grid-cols-3 justify-center items-center gap-x-3'>
                  {userInfo.addresses && userInfo.addresses.map(address =>{
                    return(
                      <div className=' border-2 border-black rounded-lg text-black p-5' >
                        <h1>{address.apartment}, {address.building}, {address.streetNumber}-{address.streetName}, {address.city}, {address.state}, {address.postalCode} </h1>
                      </div>
                    )
                  })}
              </div>
            </div>
        </div>
    </div>
  )
}

export default page