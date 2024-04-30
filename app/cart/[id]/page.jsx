import CartList from '@/components/CartList'
import React,{useContext} from 'react'
import UserContext from '@/context/UserContext'

const page = () => {

    const {customertoken}=useContext(UserContext);

  return (
    <div>
        <CartList/>
    </div>
  )
}

export default page