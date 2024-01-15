

export const QuantitySelector = ( {cantidad, setCantidad, stock } ) => {

    const accionSumar = () => {
        cantidad < stock && setCantidad ( cantidad + 1 ) 
    }

    const accionRestar = () => {
        cantidad > 1 && setCantidad ( cantidad - 1 )
    }

    return (
        <div className="flex items-center">
            <button onClick={accionRestar} className={"border flex justify-center border-black px-4 py-2 w-9 hover:bg-black hover:text-stone-50 ease-in duration-150" + (cantidad === 1 ? " cursor-default bg-gray-700 text-stone-50" : "" )}>-</button>
            <span className="mr-3 ml-3">{cantidad}</span>
            <button onClick={accionSumar} className={ "border flex justify-center border-black px-4 py-2 w-9 hover:bg-black hover:text-stone-50 ease-in duration-150" + (cantidad === stock ? " cursor-default bg-gray-700 text-stone-50" : "")}>+</button>
        </div>
    )
}