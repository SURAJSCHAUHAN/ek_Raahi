import UserContext from '@/context/UserContext'
import React, { useContext,useEffect,useState } from 'react'

const AddtoCart = ({productId}) => {

    const [loading,setLoading]=useState(false);
    
    const {customertoken,cartID,cartVersion}=useContext(UserContext);

    useEffect(()=>{
        if(loading){
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${customertoken}`);

            const raw = JSON.stringify({
            "version": {cartVersion},
            "actions": [
                {
                "action": "addLineItem",
                "productId": {productId},
                "variantId": 1,
                "quantity": 1
                }
            ]
            });

            const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
            };

            fetch(`https://api.us-central1.gcp.commercetools.com/ekraahi-suraj/me/carts/${cartID}`, requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
        }
    },[loading])

    const handleSubmit=()=>{
        setLoading(true);
    }


  return (
    <div>
        {/* <button onClick={handleSubmit} className='absolute w-[90%] bottom-0 z-10 px-10 py-3 mb-2 rounded-md bg-slate-200 font-medium text-black invisible group-hover:visible'>Add To Cart</button> */}
        <button onClick={handleSubmit} className='absolute w-[90%] bottom-0 z-10 left-[-10]  py-3 mb-2 rounded-md bg-slate-200 font-medium text-black'>Add To Cart</button>
    </div>
  )
}

export default AddtoCart