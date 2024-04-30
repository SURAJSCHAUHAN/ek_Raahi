'use client'
import ProductDescription from '@/components/ProductDescription'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {

  const {id}= useParams();

  return (
    <div>
        <ProductDescription id={id}/>
        {/* {id} */}
    </div>
  )
}

export default page