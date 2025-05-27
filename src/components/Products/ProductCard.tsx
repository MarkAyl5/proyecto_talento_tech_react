import type { Product } from "../../types"
import ActionButton from "../Global/ActionButton"
import AddToCartButton from "../Global/AddToCartButton"

type ProductCardProps = {
    item: Product
    addToCart: (item: Product) => void
}

export default function ProductCard({item, addToCart} : ProductCardProps) {
  return (
    <div className="border-[0.5px] border-price-blue w-48 h-[340px] flex flex-col justify-between shadow-xl px-2 py-3 [&_p]:font-poppins">

        <img src={item.image} alt="" className="h-36 ww-full"/>

        <div className="flex flex-col h-1/3 ">
            <p className="line-clamp-2">{item.name}</p>

            <div className="[&_p]:text-md flex gap-2 h-1/2">
                <p className="text-price-blue">${item.price}</p>
                <p className="opacity-40 line-through "> ${item.price + item.price * 0.1}</p>
            </div>
        </div>

        <div className="space-y-1">

            <ActionButton
            paddingX={12}
            paddingY={4}
            variant="primary"
            text="Mostrar más"
            />
            <AddToCartButton
            paddingX={12}
            paddingY={4}
            variant="secundary"
            text="Agregar al carrito"
            product={item}
            addToCart={addToCart}
            />
        </div>

    </div>
  )
}
