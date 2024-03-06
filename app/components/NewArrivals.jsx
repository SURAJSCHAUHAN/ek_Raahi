import React from 'react'

const NewArrivals = () => {
  return (
    <div className='flex flex-col justify-center items-center pb-[10vh]'>
        <div className='text-5xl font-{550} text-[#3b3a3a] font-serif flex justify-center items-center py-10 '>
            <h1>New Arrivals</h1>
        </div>
        <div className='h-[82vh] w-[80vw] border-2 border-black'>
            <div className='w-[22vw] h-full bg-black'>
                <img src={'/cat2.jpg'} alt="" className='object-cover'/>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default NewArrivals