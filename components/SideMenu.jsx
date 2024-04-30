'use client'
import React from 'react'

const SideMenu = () => {

  const handleScroll = (e) => {
    const element = document.getElementById(e);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='flex flex-col fixed left-0 h-[88%] w-[60px] bg-transparent  mt-[80px] pb-5 items-center justify-around z-10'>
            <button onClick={(e)=>handleScroll("hero")} className='text-[#d5d0c3] -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold'>Home</button>    
            <button onClick={()=>handleScroll("topCategories")} className='text-[#d5d0c3] -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold' >Top Categories</button>
            <button onClick={()=>handleScroll("newArrivals")} className='text-[#d5d0c3] -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold'>New Arrivals</button>
            <button onClick={()=>handleScroll("bestsellers")} className='text-[#d5d0c3] -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold'>Best Sellers</button>    
    </div>
  )
}

export default SideMenu