import React from 'react'

export const Products = () => {

    const prodList = [
        {id: 1, name: 'Mesa', price: 35000},
        {id: 2, name: 'Mueble', price: 25000},
        {id: 3, name: 'Escritorio', price: 45000},
        {id: 4, name: 'Mesita', price: 18000}
    ]

  return (
    <section className='flex justify-around items-center'>
        {prodList.map((product) => (
            <div key={product.id} className=' w-80 h-auto rounded-md bg-slate-200 flex flex-col items-center'>
                <img className='w-52 mb-5' src="/vite.svg" alt="imagern del producto" />
                <div className='w-full text-center'>
                    <h3>{product.name}</h3>
                    <h5>$ {product.price}</h5>
                    <button className='bg-sky-900 w-32 h-12 rounded-lg text-stone-50'>Agregar</button>
                </div>
            </div>
        ))}
    </section>
  )
}
