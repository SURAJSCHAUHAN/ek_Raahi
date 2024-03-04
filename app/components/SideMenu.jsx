import React from 'react'

const SideMenu = () => {
  return (
    <div className='flex flex-col fixed left-0 h-[88%] w-[60px] bg-transparent  mt-[80px] pb-5 items-center justify-around z-10'>
            <button className='text-slate-800 -rotate-90  text-[18px] text-nowrap flex justify-center px-5 py-2 rounded-full bg-[#E6E0D2]'>Home</button>    
            <button className='text-[#E6E0D2] -rotate-90  text-[18px] text-nowrap flex justify-center' >Top Categories</button>
            <button className='text-[#E6E0D2] -rotate-90  text-[18px] text-nowrap flex justify-center'>3d Trial</button>
            <button className='text-[#E6E0D2] -rotate-90  text-[18px] text-nowrap flex justify-center'>Best Sellers</button>    
    </div>
  )
}

export default SideMenu