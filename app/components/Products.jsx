'use client'
import React, {useState, useEffect, useContext } from 'react'
import UserContext from '../context/UserContext';
import Link from 'next/link'
const Products = () => {

    const [products,setProducts]=useState([]);
    const {accessToken}=useContext(UserContext);

    useEffect(() =>{
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${accessToken}`);

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch("https:api.us-central1.gcp.commercetools.com/ekraahi-suraj/products", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setProducts(result.results);
        })
        .catch((error) => console.error(error));
    },[]);
  return (
    <div className='flex flex-col w-full h-[100%] pt-28 pb-20 mb-10'>
        <div className='flex justify-center gap-5'>
          <input type="text" placeholder='Enter Category' className='px-5 py-2 border-2 rounded-md'/>
          <button className='px-5 py-2 bg-gray-400 rounded-md text-white'>Filter</button>
        </div>
        <div className='flex justify-center mt-20'>
            <div className='grid grid-cols-5 w-[90vw] gap-y-10 gap-x-10 justify-between'>
              {products.map(product=>{
                return (
                    <Link href={`products/${product.id}`}>
                      <div className='relative group w-[16vw] h-[25vw]  flex justify-center' key={product.id}>
                          <img src={product.masterData.current.masterVariant.images[0].url} alt="" className='w-full h-full object-cover rounded-md' />
                          <div className='absolute top-1 right-2 z-10'>
                              <h1 className='text-xl font-medium text-red-700'>$ {product.masterData.current.masterVariant.prices[0].value.centAmount/100}</h1>
                          </div>
                          <button className='absolute w-[90%] bottom-0 z-10 px-10 py-3 mb-2 rounded-md bg-slate-200 font-medium text-black invisible group-hover:visible'>Add To Cart</button>
                      </div>
                    </Link>
                )
              })}
            </div>    
        </div>
    </div>
  )
}

export default Products