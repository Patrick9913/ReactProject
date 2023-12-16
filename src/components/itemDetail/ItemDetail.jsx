

export const ItemDetail = ({item}) => {
    return (
        <article className="container flex gap-4  m-auto mt-32">
            <div>
                <img className=' w-80 min-w-[208px] bg-slate-200 p-4' src={item.img} alt="imagen de logo" />
            </div>
            <div className=" flex flex-col gap-3">
                <h2 className="text-2xl">{item.name}</h2>
                <p className=" max-w-xs">{item.description}</p>
                <h2 className=" text-2xl">$ {item.price}</h2>
                <button className='bg-sky-900 w-32 p-3  mt-3 rounded-lg text-stone-50'>Comprar</button>
            </div>
        </article>
    )
}