import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri"

const Footer = () => {
  return (
    <div className='relative flex flex-col  items-center justify-between font-serif bg-[#1E1E1E] h-[95vh]'>
        <div className='flex justify-between w-[80vw] mt-[15vh]'>
            <div className='flex flex-col justify-center cursor-pointer  text-[#d5d0c3] text-xl  w-[18vw] h-[40vh]'>
                <h2>SHOP</h2>
                <h2>New Arrivals</h2>
                <h2>Tops</h2>
                <h2>Flats & Flatsform</h2>
                <h2>T-Shirts</h2>
                <h2>Trousers</h2>
                <h2>Matching Sets</h2>
                <h2>Best Selling</h2>
            </div>
            <div className='flex flex-col gap-5 justify-center items-center text-[#d5d0c3] text-4xl  w-[18vw] h-[20vh] pt-[10vh]'>
                <h2>MAXIM<span className='text-red-600'>FASHION</span></h2>
                <div className='flex gap-5 text-5xl text-black cursor-pointer'>
                    <FaInstagram className='hover:text-[#d5d0c3]'/>
                    <FaTwitter className='hover:text-[#d5d0c3]'/>
                    <FaFacebook className='hover:text-[#d5d0c3]'/>
                    <RiTwitterXLine className='hover:text-[#d5d0c3]'/>
                </div>
            </div>
            <div className='flex flex-col justify-center items-end text-[#d5d0c3] cursor-pointer text-xl  w-[18vw] h-[18vh] pt-[10vh]'>
                <h2 className='text-2xl'>SUPPORT</h2>
                <h2>Exchange</h2>
                <h2>Exchange Policy</h2>
                <h2>Privacy Policy</h2>
                <h2>F&Q</h2>
            </div>
        </div>
        <div className=' flex justify-center items-center text-2xl text-[#d5d0c3] font-semibold font-mono w-full h-[10vh]'>
           <h2>@2024 #maiSurajhoon Pvt. Ltd. All Right Reserved</h2>
        </div>

        <div className='absolute bottom-1 right-2 text-red-600 text-xl'><h1>#maiSurajhoon</h1></div>
        
    </div>
  )
}

export default Footer