import type {CartItem } from "../types"

type CartItemCardProps = {
    item: CartItem
}

export default function CartItemCard({item} : CartItemCardProps) {
  return (
    <div className="p-3 bg-strongblue flex gap-4">
      <div className="w-1/4 h-full bg-white">
        <img src={item.image} alt="" className="w-full h-full"/>
      </div>
      <div className="w-3/4 bg-white flex flex-col gap-2 [&_p]:font-poppins">
        <div>
            <p>{item.name}</p>
            <button>X</button>
        </div>
        <p>x{item.quantity}</p>
        <p>${item.price}</p>
      </div>
    </div>
  )
}
