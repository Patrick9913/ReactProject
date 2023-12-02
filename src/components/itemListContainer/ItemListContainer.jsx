import React from 'react'
import { prodList } from '../../Products/product.js'
import { ItemsList } from './ItemsList.jsx'


export const ItemListContainer = ({title}) => {
  return (
    <section className=' mt-9'>
        <h2 className='text-center text-3xl mb-9'>{title}</h2>
        <div className='flex justify-around'>
          {prodList.map((item) => {
            return <ItemsList id={item.id} name={item.name} price={item.price}/>
          })}
        </div>
    </section>
  )
}
