'use client'
import Link from 'next/link';
import React,{useState,useEffect, useContext} from 'react'
import { FaBagShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { IoIosLogIn } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from 'next/navigation';
import UserContext from '../context/UserContext';

const Navbar = () => {

  const router=useRouter();
  const {loggedin} = useContext(UserContext);

  return (
    <nav className=' flex header fixed top-0 h-20 w-full justify-between z-10'>
      <div className='font-serif flex items-center text-white text-3xl  pl-10 font-semi-bold cursor-pointer' onClick={(e)=>router.push('/')}>MAXIM<span className='text-red-600'>FASHION</span></div>
        <div className='flex items-center pr-10'>
                {loggedin?(
                    <div className='flex space-x-10'>
                        <div className='relative'>
                          <FaBagShopping size={30} color='white'/>
                          <div className='absolute -top-1 -right-2 rounded-full w-4 h-4 text-sm p-3 flex justify-center items-center bg-[#e1e1e1]'>5</div>
                        </div>
                        <Link href={'userdetail'}><FaUserLarge size={30} color='white'/></Link>
                        <IoIosLogOut size={30} color='white'/>
                    </div>
                ):(
                  <div className='flex space-x-10'>
                      <Link href={'login'}><IoIosLogIn size={30} color='white'/></Link>
                  </div>
                )}
        </div>
    </nav>
  )
}

export default Navbar