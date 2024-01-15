import React from 'react';
import { ItemCard } from '../itemCard/ItemCard.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const ItemListContainer = ({title}) => {

  const [productos, setProductos] = useState([]);
  const [loading, setloading] = useState(true)

  const {categoryName} = useParams()

  useEffect(() => {
    setloading(true)
    const prodsRef = collection( db, 'productos')
    const docsRef = categoryName
                         ? query( prodsRef, where ('category', '==', categoryName))
                         : prodsRef

        getDocs(docsRef)
            .then ((querySnapShot) => {
                const docs = querySnapShot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProductos(docs)
            })
            .finally(() => setloading(false))

  }, [categoryName])

  return (
    <section className='mt-8 mb-8'>
        <h2 className='text-center text-3xl mb-9'>{title}</h2>
        <div className='justify-center flex flex-wrap gap-7 max-w-full'>
          {
            loading ? <h1>Cargando</h1> : productos.map((item) => {
              return <ItemCard item={item}/>
            })
          }
        </div>
    </section>
  )
}
