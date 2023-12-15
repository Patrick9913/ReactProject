import React from 'react';
import { ItemsList } from './ItemsList.jsx';
import { useState, useEffect } from 'react';
import { pedirDatos } from '../../utils/utils.js';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true)

  const {categoryName} = useParams()

  useEffect(() => {
    setloading(true)
    pedirDatos()
      .then ((data) => {
        const items = categoryName ? data.filter ((prod) => prod.category === categoryName) : data;
        setProductos(items)
        setloading(false)
      })
  }, [categoryName])

  return (
    <section className='mt-8 mb-8'>
        <h2 className='text-center text-3xl mb-9'>Productos</h2>
        <div className='justify-center flex flex-wrap gap-7 max-w-full'>
          {
            loading ? <h1>Cargando</h1> : productos.map((item) => {
              return <ItemsList key={item.id} name={item.name} price={item.price}/>
            })
          }
        </div>
    </section>
  )
}
