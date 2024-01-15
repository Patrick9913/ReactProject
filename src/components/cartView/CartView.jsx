import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";

export const CartView = () => {


    const { cart, totalCart, clearCart, deleteItem } = useContext(CartContext);

    return (
        <section className="container m-auto mt-8">
            <h2 className="mt-8 mb-8 text-2xl">Tu compra</h2>
            <hr />
            <ul className=" overflow-scroll h-[500px]">
                {cart.map((item) => (
                    <li key={item.id} className="flex my-8 gap-5">
                        <img src={item.img} alt="imagen del producto" className="w-32" />
                        <div>
                            <p>{item.name}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>$: {item.price * item.cantidad}</p>
                            <button className=" mt-5" onClick={() => deleteItem(item.id)}><LuTrash className="text-xl" /></button>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
            <div className=" flex items-center gap-8">
                <h4 className=" mt-8 text-2xl">TOTAL: $ {totalCart()}</h4>
                <button className=" text-xl font-thin mt-8 border border-black w-60 p-4 hover:bg-black hover:text-stone-50 ease-in duration-150" onClick={clearCart}>Vaciar Carro</button>
                <button className=" text-xl font-thin mt-8 border border-black w-60 p-4 hover:bg-black hover:text-stone-50 ease-in duration-150"><Link to="/checkOut">Terminar Compra</Link></button>
            </div>
        </section>
    )
}