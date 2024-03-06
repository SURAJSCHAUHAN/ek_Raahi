import React from 'react'

const NewArrivals = () => {
  return (
    <div className='flex flex-col justify-center items-center pb-[10vh]'>
        <div className='text-5xl font-{550} text-[#3b3a3a] font-serif flex justify-center items-center py-10 '>
            <h1>New Arrivals</h1>
        </div>
        <div className='h-[82vh] w-[80vw] flex '>
            <div className='w-[28%] h-full border-2 border-white relative'>
                <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-2xl leading-relaxed h-[14vh] w-full fade z-10'>
                    <h2>Sheer Pullover T-Shirt</h2>
                    <h2 className='font-semibold'>$12.89</h2>
                </div>
                <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full'/>
            </div>
            <div className='w-[72%] h-full ml-[1.5vw] grid grid-cols-3 gap-4 content-start'>
                <div className='w-[18vw] h-[40vh] border-2 border-white relative'>
                    <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                        <h2>Sheer Pullover T-Shirt</h2>
                        <h2 className='font-semibold'>$12.89</h2>
                    </div>
                    <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                </div>
                <div className='w-[18vw] h-[40vh] border-2 border-white relative'>
                    <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                        <h2>Sheer Pullover T-Shirt</h2>
                        <h2 className='font-semibold'>$12.89</h2>
                    </div>
                    <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                </div>
                <div className='w-[18vw] h-[40vh] border-2 border-white relative'>
                    <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                        <h2>Sheer Pullover T-Shirt</h2>
                        <h2 className='font-semibold'>$12.89</h2>
                    </div>
                    <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                </div>
                <div className='w-[18vw] h-[40vh] border-2 border-white relative'>
                    <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                        <h2>Sheer Pullover T-Shirt</h2>
                        <h2 className='font-semibold'>$12.89</h2>
                    </div>
                    <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                </div>
                <div className='w-[18vw] h-[40vh] border-2 border-white relative'>
                    <div className='absolute bottom-0 text-white flex flex-col justify-center pl-[2vw] text-xl leading-relaxed h-[12vh] w-full fade z-10'>
                        <h2>Sheer Pullover T-Shirt</h2>
                        <h2 className='font-semibold'>$12.89</h2>
                    </div>
                    <img src={'/cat6.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                </div>
                <div className='w-[18vw] h-[40vh] border-2 border-white relative'>
                    <div className='absolute bottom-0 text-white flex flex-col justify-center items-center text-3xl leading-relaxed h-full w-full fade z-10'>
                        <h2>Explore</h2>
                        <h2>More</h2>
                    </div>
                    <img src={'/cat7.jpg'} alt="cat1" className='object-cover h-full w-full'/>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default NewArrivals