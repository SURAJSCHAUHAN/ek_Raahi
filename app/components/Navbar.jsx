import React from 'react'
import { GoSearch } from "react-icons/go";
import { FaBagShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";


const Navbar = () => {
  return (
    <nav className=' flex header fixed top-0 h-20 w-full justify-between z-10'>
      <div className='font-serif flex items-center text-white text-3xl  pl-10 font-semi-bold'>Ek<span className='text-red-600'>Raahi</span></div>
        <div className='flex items-center pr-10'>
                <div className='flex space-x-10'>
                    <GoSearch size={30} color='white'/>
                    <div className='relative'>
                      <FaBagShopping size={30} color='white'/>
                      <div className='absolute top-0 right-0 rounded-full w-4 h-4 p-2 flex justify-center items-center bg-[#e1e1e1]'>5</div>
                    </div>
                    <FaUserLarge size={30} color='white'/>
                </div>
        </div>
    </nav>
  )
}

export default Navbar