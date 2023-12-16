import { useEffect, useState } from "react"
import { pedirDatos } from "../../utils/utils"
import { useParams } from "react-router-dom"
import { ItemDetail } from "../itemDetail/ItemDetail"


export const ItemDetailContainer = () => {
    const [loading, setLoading] = useState (true)
    const [item, setItem] = useState (null)

    const { itemId } = useParams() 

    console.log(item)
    console.log(itemId)

    useEffect (() => {
        setLoading(true)
        pedirDatos()
            .then(data => {
                setItem(data.find(prod => prod.id === Number(itemId)))
            })
            .finally(() => setLoading(false))
    }, [])

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