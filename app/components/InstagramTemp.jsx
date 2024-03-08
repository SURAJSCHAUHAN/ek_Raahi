import React from 'react'
import { SlCamera } from "react-icons/sl";
import { PiTelevisionSimple } from "react-icons/pi";
import { FiSend } from "react-icons/fi";
import { FaRegCircle } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { PiHeartFill } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";
import { FaBookmark } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CgAddR } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";

function InstagramTemp() {
  return (
    <div className='flex flex-col bg-[#d5d0c3] h-[500px] w-[350px] rounded-2xl gap-0.25'>
        <div className='flex px-[5%] mt-[5%] justify-between'>
            <div className='flex gap-3'>
                <SlCamera size={28} color='black'/>
                <img src={'/instagram.png'} alt="instagram" height={35} width={80} />
            </div>
            <div className='flex gap-3'>
                <PiTelevisionSimple size={28} color='black'/>
                <FiSend size={28} color='black'/>
            </div>
        </div>
        <div className='flex px-[5%] mt-[5%] justify-between'>
            <FaRegCircle size={28} className='text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'/>
            <CiMenuKebab size={25} color='black'/>
        </div>
        <div className='mt-[2%] h-[60%] w-[90%] mx-4 border-2 rounded-sm'>
            <img src={'/cat6.jpg'} alt="" className='object-cover w-full h-full '/>
        </div>
        <div className='flex px-[5%] mt-[5%] justify-between'>
            <div className='flex gap-3'>
                <PiHeartFill size={28} color='red'/>
                <TbMessageCircle size={28} color='black'/>
                <FiSend size={28} color='black'/>
            </div>
            <div>
                <FaBookmark size={28} color='black'/>
            </div>
        </div>
        <div className='flex px-[5%] mt-[5%] justify-between'>
            <MdHomeFilled size={28} color='black'/>
            <IoSearch size={28} color='black'/>
            <CgAddR size={28} color='black'/>
            <FaRegHeart size={28} color='black'/>
            <FiUser size={28} color='black'/>
        </div>
    </div>
  )
}

export default InstagramTemp