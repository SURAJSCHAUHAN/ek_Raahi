// Product Description Page
'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState, useContext } from 'react'
import UserContext from '@/app/context/UserContext';

const ProductDescription = ({id}) => {

    const [products, setProducts] =useState();

    const {accessToken}=useContext(UserContext);


    useEffect(()=>{

        const fetchData=async()=>{
            try {
                const myHeaders = new Headers();
                myHeaders.append("Authorization", `Bearer ${accessToken}`);

                const requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow"
                };
                const response= await fetch(`https://api.us-central1.gcp.commercetools.com/ekraahi-suraj/products/${id}`, requestOptions);
                const result= await response.json();
                console.log(result);
                setProducts(result);
            } catch (error) {
                console.error(error)
            }
        };
        fetchData();
    },[])
  return (
    <div className='h-[100vh]'>
        {products && (
            <div className='flex py-20 px-10 w-full h-[100vh]'>
                <div className='flex w-1/2 h-full border-2 bg-gray-200'>
                    <div className='fl{product.name["en-US"]} ex flex-col gap-3 w-[20%] px-2 pt-3'>
                        {products.masterData.current.masterVariant.images.map(pic=>{
                            return(
                                <img src={pic.url} alt="" className='h-[10vw] w-[10vw] object-cover mt-2'/>
                            )
                        })}
                    </div>
                    <div className='w-[80%]'>
                        <div className='h-[100%] w-[80%]'>
                            <img src={products.masterData.current.masterVariant.images[0].url} alt="" className='h-full w-full object-cover'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 h-full justify-center items-center gap-20'>
                        <div className='flex flex-col justify-center items-center gap-3 py-5 text-3xl text-black font-serif font-semibold'>
                            <h1>{products.masterData.current.name["en-US"]}</h1>
                            <h1 className='text-gray-600 w-full text-left'>${products.masterData.current.masterVariant.prices[0].value.centAmount/100}.00</h1>
                        </div>
                        <button className='bg-gray-400 text-black text-md py-3 w-[10vw] rounded-md'>Add To Cart</button>
                </div>
            </div>
        )}
    </div>
  )
}

export default ProductDescription