import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";


const ServicesIcon = () => {
  return (
    <div className=' flex justify-evenly mt-[10vh] pb-[10vh]'>
        <div className='flex justify-center items-center text-black text-xl font-semibold w-[18vw] h-[18vh] flex-col'>
            <img src={'/delivery.png'} alt="" className='object-contain w-full h-full'/>
            <h2>24hour Dispatch</h2>
        </div>
        <div className='flex justify-center items-center text-black text-xl font-semibold w-[18vw] h-[18vh] flex-col'>
            <img src={'/return.png'} alt="" className='object-contain w-full h-full'/>
            <h2>Easy Return</h2>
        </div>
        <div className='flex justify-center items-center text-black text-xl font-semibold w-[18vw] h-[18vh] flex-col'>
            <img src={'/cod.png'} alt="" className='object-contain w-full h-full'/>
            <h2>COD Available</h2>
        </div>
    </div>
  )
}

export default ServicesIcon