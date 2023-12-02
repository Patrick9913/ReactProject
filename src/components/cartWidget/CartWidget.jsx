import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi"


export const CartWidget = () => {
  return (
    <div className='relative'>
      <PiShoppingCartLight className='text-2xl'/>
      <span className=' bg-red-700 text-stone-50 rounded-full absolute bottom-3 w-6 h-6 text-center'>13</span>
    </div>
  )
}


