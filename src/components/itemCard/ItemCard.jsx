import React from 'react'
import { Link } from 'react-router-dom'

export const ItemCard = ({item}) => {

  return (
    <div key={item.id} className='w-80 min-w-[300px] h-auto rounded-md bg-slate-200 flex flex-col gap-5 items-center'>
        <img className='w-52 mt-5' src={item.img} alt="imagen del producto" />
        <div className='w-full text-center mb-6'>
            <h3>{item.name}</h3>
            <h5>$ {item.price}</h5>
            <button className='bg-sky-900 w-32 h-12 mt-3 rounded-lg text-stone-50'><Link to={`/item/${item.id}`}>Ver más</Link></button>
        </div>
    </div>
  )
}
