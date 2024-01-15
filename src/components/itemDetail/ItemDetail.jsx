import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { QuantitySelector } from "./QuantitySelector"
import { Link } from "react-router-dom"


export const ItemDetail = ({item}) => {

    const [ cantidad, setCantidad] = useState( 1 )

    const { addToCart, isInCart } = useContext (CartContext)

    const accionAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad,
        }
        addToCart(itemToCart)
    } 

    return (
        <article className="container flex gap-4  m-auto mt-32">
            <div>
                <img className=' w-80 min-w-[208px]' src={item.img} alt="imagen de logo" />
            </div>
            <div className=" flex flex-col gap-3">
                <h2 className="text-2xl">{item.name}</h2>
                <p className=" max-w-xs">{item.description}</p>
                <h2 className=" text-2xl">$ {item.price}</h2>
                {
                    isInCart(item.id)
                        ? <button className='border border-black w-48 p-3  mt-3 hover:bg-black hover:text-stone-50 ease-in duration-150'><Link to="/cart">Ir al Carro</Link></button>
                        : 
                        <>
                            <QuantitySelector
                            cantidad={cantidad}
                            setCantidad={setCantidad}
                            stock={item.stock} 
                            />  
                            <button onClick={accionAgregar} className='border border-black w-48 p-3 mt-3 hover:bg-black hover:text-stone-50 ease-in duration-150'>Agregar al carrito</button>
                        </>
                }
            </div>
        </article>
    )
}