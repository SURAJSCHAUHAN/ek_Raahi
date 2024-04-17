import CartList from '@/app/components/CartList'
import React,{useContext} from 'react'
import UserContext from '@/app/context/UserContext'

const page = () => {

    const {customertoken}=useContext(UserContext);

  return (
    <div>
        <CartList/>
    </div>
  )
}

export default page