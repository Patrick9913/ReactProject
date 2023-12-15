import React from 'react'

export const ItemsList = ({id, name, price}) => {

  return (
    <div key={id} className='w-80 min-w-[300px] h-auto rounded-md bg-slate-200 flex flex-col gap-5 items-center'>
        <img className='w-52 mt-5' src="/vite.svg" alt="imagern del producto" />
        <div className='w-full text-center mb-6'>
            <h3>{name}</h3>
            <h5>$ {price}</h5>
            <button className='bg-sky-900 w-32 h-12 mt-3 rounded-lg text-stone-50'>Agregar</button>
        </div>
    </div>
  )
}
