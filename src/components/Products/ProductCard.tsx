import ActionButton from "../Global/ActionButton"

type ProductCardProps = {
    image: string
    name:string
    price: number
}

export default function ProductCard({image, name, price} : ProductCardProps) {
  return (
    <div className="border-[0.5px] border-price-blue w-48 h-[340px] flex flex-col justify-between shadow-xl px-2 py-3 [&_p]:font-poppins">

        <img src={image} alt="" className="h-36 ww-full"/>

        <div className="flex flex-col h-1/3 ">
            <p className="">{name.slice(0,40)}</p>

            <div className="[&_p]:text-md flex gap-2 h-1/2">
                <p className="text-price-blue">${price}</p>
                <p className="opacity-40 line-through "> ${price + price * 0.1}</p>
            </div>
        </div>

        <div className="space-y-1">

            <ActionButton
            paddingX={12}
            paddingY={4}
            variant="primary"
            text="Mostrar más"
            />
            <ActionButton
            paddingX={12}
            paddingY={4}
            variant="secundary"
            text="Añadir al carrito"
            />
        </div>

    </div>
  )
}
