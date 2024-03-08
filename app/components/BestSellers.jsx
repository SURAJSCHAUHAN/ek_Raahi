
import React from 'react'



const BestSellers = () => {
  return (
    <div className='pb-[10vh]'>
        <div className='text-5xl font-{550} text-[#3b3a3a] font-serif flex justify-center items-center py-10 '>
            <h1>Best Sellers</h1>
        </div>
        <div className='flex justify-center items-center'>
            <div className="carousel  h-[80vh] w-[85vw] gap-4">
                    <div className='carousel-item font-serif w-[28%] h-full relative'>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center items-center text-3xl leading-relaxed h-[14vh] w-full fade z-10'>
                            <h2>Party Time</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full'/>
                    </div>
                    <div className='carousel-item font-serif w-[28%] h-full relative'>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center items-center text-3xl leading-relaxed h-[14vh] w-full fade z-10'>
                            <h2>Day Out</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full'/>
                    </div>
                    <div className='carousel-item font-serif w-[28%] h-full relative'>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center items-center text-3xl leading-relaxed h-[14vh] w-full fade z-10'>
                            <h2>Girls Night Out</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full'/>
                    </div>
                    <div className='carousel-item font-serif w-[28%] h-full relative'>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center items-center text-3xl leading-relaxed h-[14vh] w-full fade z-10'>
                            <h2>Airport Look</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full'/>
                    </div>
                    <div className='carousel-item font-serif w-[28%] h-full relative'>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center items-center text-3xl leading-relaxed h-[14vh] w-full fade z-10'>
                            <h2>Kitchen Look</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full'/>
                    </div>
                    <div className='carousel-item font-serif w-[28%] h-full relative'>
                        <div className='absolute bottom-0 text-white flex flex-col justify-center items-center text-3xl leading-relaxed h-[14vh] w-full fade z-10'>
                            <h2>Traditional Look</h2>
                        </div>
                        <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full'/>
                    </div>
                  
            </div>
        </div>
        
    </div>
  )
}

export default BestSellers