import React, { useContext } from 'react'
import { PiShoppingCartLight } from "react-icons/pi"
import { CartContext } from '../../context/CartContext'


export const CartWidget = () => {

  const { itemsInCart } = useContext(CartContext)

  return (
    <div className=' flex'>
      <PiShoppingCartLight className='text-2xl'/>
      <span className='text-stone-50'>{itemsInCart()}</span>
    </div>
  )
}


