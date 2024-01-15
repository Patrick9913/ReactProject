import { useState, useContext } from "react"
import { CartContext } from '../../context/CartContext.jsx'
import { db } from '../../firebase/config.js'
import { collection, writeBatch, addDoc, query, where, documentId, getDocs } from "firebase/firestore";
import Swal from "sweetalert2";

export const CheckOut = () => {

    const { cart, totalCart, clearCart } = useContext(CartContext)

    const [ values, setValues ] = useState({
        nombre:"",
        direccion:"",
        email:"",
    })

    const [ orderId, setOrderId ] = useState(null)

    const modificarValorInput = ( entrada ) => {
        setValues({
            ...values,
            [entrada.target.name ]: entrada.target.value,
        })
    }

    const accionEnviar = async ( entrada ) => {

        entrada.preventDefault()

        const orden = {
            cliente: values,
            items: cart,
            total: totalCart(),
            fecha: new Date(),
        }

        const batch = writeBatch(db)
        const ordersRef = collection( db, "orders")
        const productosRef = collection( db, "productos")
        const itemsQuery = query(productosRef, where (documentId(), "in", cart.map(prod => prod.id)))
        const querySnapshot = await getDocs(itemsQuery)

        const outOfStock = []

        querySnapshot.docs.forEach( doc => {
            const item = cart.find(prod => prod.id === doc.id)
            const stock = doc.data().stock

            if ( stock >= item.cantidad ) {
                batch.update ( doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        if ( outOfStock.length === 0) {
            batch.commit()
                .then(() => {
                    addDoc(ordersRef, orden).then( (doc) => {
                        setOrderId(doc.id)
                        clearCart()

                        Swal.fire("Gracias por tu compra")
                    })
                })
        } else {
            Swal.fire("Hay items sin stock")
        }
    }

    if (orderId) {
        return (
            <div className=" container m-auto mt-10">
                <h2 className="text-4xl mt-5 mb-5">Gracias por tu compra</h2>
                <hr />
                <p className="mt-5">tu codigo de compra es: {orderId}</p>
            </div>
        )
    }

    return (
        <div className=" container m-auto mt-10">
            <h2 className=" text-4xl">Checkout</h2>
            <hr />
            <form onSubmit={accionEnviar} className="flex flex-col gap-4 max-w-md mt-4">
                <input 
                    className="border p-2"
                    type="text"
                    placeholder="Nombre"
                    value={values.nombre}
                    onChange={modificarValorInput}
                    name="nombre" 
                />
                <input
                    className="border p-2" 
                    type="text"
                    placeholder="Dirección"
                    value={values.direccion}
                    onChange={modificarValorInput}
                    name="direccion" 
                />
                <input 
                    className="border p-2"
                    type="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={modificarValorInput}
                    name="email" 
                />
                <button type="submit" className="">Enviar</button>
            </form>
        </div>
    )
}