'use client'
import React, { useEffect,useState,useContext } from 'react'
import UserContext from '../context/UserContext';


const TopCategories = () => {

  const [categories,setCategories]=useState([]);
  const {accessToken}=useContext(UserContext);

  useEffect(()=>{
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${accessToken}`);

    const raw = "";

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      // body: raw,
      redirect: "follow"
    };

    fetch("https://api.us-central1.gcp.commercetools.com/ekraahi-suraj/categories", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setCategories(result.results);
      })
      .catch((error) => console.error(error));
  },[]);

  return (
    <div id='topCategories' className='pb-[10vh]'>
        <div className='text-5xl font-{550} text-[#3b3a3a] font-serif flex justify-center items-center py-10 '>
            <h1>Top Categories</h1>
        </div>
        <div className='flex justify-center items-center'>
            <div className="carousel  h-[80vh] w-[72vw]">
                  {categories && categories.map(category=>{
                    return(
                      <div className="carousel-item w-[18vw]  relative hover:scale-105 duration-700" key={category.id}>
                        <div className='absolute w-full h-full fade1 font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                            <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                              <h2>{category.name['en-US']}</h2>
                            </div> 
                        </div>
                        <img src={'/cat1.jpeg'} alt="Burger" className='object-fit'/>
                      </div> 
                    )
                  })}

                  {/* <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade1 w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Ethnic Extravaganza</h2>
                        </div> 
                    </div>
                    <img src={'/formal.jpeg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade1 w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw] '>
                          <h2>Everyday Elegance</h2>
                        </div> 
                    </div>
                    <img src={'/sports.jpeg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade1 w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Light, Camera, Fashion</h2>
                        </div> 
                    </div>
                    <img src={'/ethnic.jpeg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade1 w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Cultural Couture</h2>
                        </div> 
                    </div>
                    <img src={'/outer.jpeg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade1 w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Ethereal Allure</h2>
                        </div> 
                    </div>
                    <img src={'/active.jpeg'} alt="Burger" className='object-cover'/>
                  </div> 

                  <div className="carousel-item w-[18vw] relative hover:scale-105 duration-700">
                    <div className='absolute fade1 w-full h-full font-serif text-white text-3xl hover:bg-transparent duration-700'> 
                        <div className='flex justify-center text-center pt-[10vh] px-[5vw]'>
                          <h2>Global Chic</h2>
                        </div> 
                    </div>
                    <img src={'/cat1.jpeg'} alt="Burger" className='object-cover'/>
                  </div> */}
            </div>
        </div>
        
    </div>
  )
}

export default TopCategories