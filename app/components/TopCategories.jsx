import Image from 'next/image'
import React from 'react'



const TopCategories = () => {
  return (
    <div className='pb-[10vh]'>
        <div className='text-5xl font-{550} text-[#3b3a3a] font-serif flex justify-center items-center py-10 '>
            <h1>Top Categories</h1>
        </div>
        <div className='flex justify-center items-center'>
            <div className="carousel  h-[80vh] w-[72vw]">
                  <div className="carousel-item w-[18vw]  relative hover:scale-105 duration-700 ">
                    <div className='absolute w-full h-full fade font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Trend Tops</h2>
                        </div> 
                    </div>
                    <img src={'/cat1.jpg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Ethnic Extravaganza</h2>
                        </div> 
                    </div>
                    <img src={'/cat2.jpg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw] '>
                          <h2>Everyday Elegance</h2>
                        </div> 
                    </div>
                    <img src={'/cat3.jpg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Light, Camera, Fashion</h2>
                        </div> 
                    </div>
                    <img src={'/cat4.jpg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Cultural Couture</h2>
                        </div> 
                    </div>
                    <img src={'/cat5.jpg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Ethereal Allure</h2>
                        </div> 
                    </div>
                    <img src={'/cat6.jpg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Global Chic</h2>
                        </div> 
                    </div>
                    <img src={'/cat7.jpg'} alt="Burger" className='object-cover'/>
                  </div>
            </div>
        </div>
        
    </div>
  )
}

export default TopCategories