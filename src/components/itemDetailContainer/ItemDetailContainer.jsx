import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../itemDetail/ItemDetail"
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
    const [loading, setloading] = useState (true)
    const [item, setItem] = useState (null)

    const { itemId } = useParams() 

    useEffect (() => {
        setloading(true)
        const prodsRef = doc( db, 'productos', itemId)


        getDoc(prodsRef)
            .then ((docSnapShot) => {
                const doc = {
                    ...docSnapShot.data(),
                    id: docSnapShot.id
                }
                setItem(doc)
            })
            .finally(() => setloading(false))
    }, [itemId])

    return (
        <>
            {
                loading ? (
                    <h1 className=" mt-8 text-center">Cargando</h1>
                ) : (
                    <ItemDetail item={item} />
                )}
        </>
    )
}