

export const QuantitySelector = ( {cantidad, setCantidad, stock } ) => {

    const accionSumar = () => {
        cantidad < stock && setCantidad ( cantidad + 1 ) 
    }

    const accionRestar = () => {
        cantidad > 1 && setCantidad ( cantidad - 1 )
    }

    return (
        <div className="flex items-center">
            <button onClick={accionRestar} className={"text-stone-50 p-2 w-9 rounded-md " + (cantidad === 1 ? "bg-slate-400 cursor-default" : "bg-sky-900" )}>-</button>
            <span className="mr-3 ml-3">{cantidad}</span>
            <button onClick={accionSumar} className={ "text-stone-50 p-2 w-9 rounded-md " + (cantidad === stock ? "bg-slate-400 cursor-default" : "bg-sky-900")}>+</button>
        </div>
    )
}