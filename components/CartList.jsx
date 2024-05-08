'use client'
import UserContext from '../context/UserContext';
import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";

const CartList = () => {

  const {cartItems,cartValue}=useContext(UserContext);

  return (
    <div className='flex flex-col relative items-center h-[90vh] w-70'>
        <div className='mt-20'>
          <h2 className='font-serif text-3xl text-black'>Your Cart</h2>
        </div>
        <div className='flex flex-col mt-10 gap-5'>
          {cartItems.map(item=>{
            return(
              <div className='flex w-[30vw]'>
                <div className='w-20 h-30'>
                  <img src={item.variant.images[0].url} alt="" className='w-full h-full object-fit'/>
                </div>
                <div className='flex flex-col justify-center items-center w-full text-gray-800'>
                  <h1>{item.name['en-US']}</h1>
                  <p>{item.variant.attributes[0].name}: {item.variant.attributes[0].value} </p>
                  <div className='flex gap-10'>
                      <p>$ {item.price.value.centAmount/100}</p>
                      <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <div className='flex items-center'>
                    <MdDelete size={20} className='text-black'/>
                </div>
              </div>
            )
          })}
        </div>
        <div className=' flex absolute items-center right-5 bottom-5 gap-10 text-black '>
            <h1 className='font-semibold'>Total: ${cartValue}</h1>
            <button className='py-4 px-10 bg-red-700 font-semibold rounded-md'>CheckOUT</button>
        </div>
    </div>
  )
}

export default CartList