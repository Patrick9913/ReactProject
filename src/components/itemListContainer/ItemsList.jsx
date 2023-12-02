import React from 'react'

export const ItemsList = ({id, name, price}) => {

  return (
    <div key={id} className=' w-80 h-auto rounded-md bg-slate-200 flex flex-col items-center'>
        <img className='w-52 mb-5' src="/vite.svg" alt="imagern del producto" />
        <div className='w-full text-center'>
            <h3>{name}</h3>
            <h5>$ {price}</h5>
            <button className='bg-sky-900 w-32 h-12 rounded-lg text-stone-50'>Agregar</button>
        </div>
    </div>
  )
}
