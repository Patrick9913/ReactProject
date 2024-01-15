import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({item}) => {

  return (
    <div key={item.id} className='w-80 min-w-[300px] h-auto border border-black flex flex-col gap-5 items-center'>
        <img className='w-52 mt-5' src={item.img} alt="imagen del producto" />
        <div className='w-full text-center mb-6'>
            <h3>{item.name}</h3>
            <h5>$ {item.price}</h5>
            <Link to={`/item/${item.id}`}><button className='border w-36 mt-5 border-black p-2 hover:bg-black hover:text-stone-50 ease-in duration-150'>Ver más</button></Link>
        </div>
    </div>
  )
}
