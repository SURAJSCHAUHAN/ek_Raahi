import React from 'react'

const SideMenu = () => {
  return (
    <div className='flex flex-col fixed left-0 h-[88%] w-[60px] bg-transparent  mt-[80px] pb-5 items-center justify-around z-10'>
            <button className='text-[#d5d0c3] -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold'>Home</button>    
            <button className='text-[#d5d0c3] -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold' >Top Categories</button>
            <button className='text-[#d5d0c3] -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold'>3d Trial</button>
            <button className='text-[#d5d0c3] -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full hover:bg-[#E6E0D2] hover:text-slate-800 hover:font-semibold'>Best Sellers</button>    
    </div>
  )
}

export default SideMenu