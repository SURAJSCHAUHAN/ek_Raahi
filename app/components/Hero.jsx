'use client'
import React,{useState} from 'react'
import { motion } from 'framer-motion';

const Hero = () => {
      const [clicked,setClicked]=useState(false);

      const handleClicked=()=>{
            setClicked(!clicked);
      }

  return (
    <div className='relative'>
      <div className='h-screen w-full flex text-[#E6E0D2] text-5xl font-semibold items-center justify-between bg-[#1E1E1E]'>
            <div className='pl-32 w-2/5 leading-normal mt-32'>
                  <p>Discover Your Signature Look at Ek<span className='text-red-600'>Raahi</span> </p>
                  <p>Unleash Your Western Side</p>
            </div>
            <div className='pr-14 pl-24 w-2/5 leading-normal mt-36'>
                  <p>Fashion Forward, Always: Shop Western Trends with Ek<span className='text-red-600'>Raahi</span></p>
            </div>
      </div>
      {/* <div onClick={handleClicked} className={`absolute top-0  h-screen w-3/5 flex flex-col justify-center items-center bg-cover text-white  ${!clicked ? 'rounded-r-[40px] left-0 bg-[url("/image1.jpg")]': 'rounded-l-[40px] right-0 bg-[url("/image1.jpg")]' }`}>
            <motion.div animate={{}}></motion.div>
            <div className={`flex flex-col justify-center items-center header h-full w-full ${!clicked?'rounded-r-[40px]':'rounded-l-[40px]'}`}>
                  <h1 className='text-6xl font-semibold leading-normal'>FLAT 50% OFF</h1>
                  <h1 className='text-4xl font-semibold leading-normal'>ON 1ST ORDER</h1>
            </div>
      </div> */}
      <div onClick={handleClicked} className={`absolute top-0  h-screen w-3/5 flex flex-col justify-center items-center bg-cover text-white left-0 ${!clicked ? 'rounded-r-[40px]  bg-[url("/image3.jpg")] transform -translate-x-2 duration-1000': 'rounded-l-[40px] bg-[url("/image2.jpg")] transform translate-x-[66.5%] duration-1000' }`}>
            <div className={`flex flex-col justify-center items-center fade h-full w-full ${!clicked?'rounded-r-[40px]':'rounded-l-[40px]'}`}>
                  <h1 className='text-6xl font-semibold leading-normal'>FLAT 50% OFF</h1>
                  <h1 className='text-4xl font-semibold leading-normal'>ON 1ST ORDER</h1>
            </div>
      </div>
    </div>
  )
}

export default Hero