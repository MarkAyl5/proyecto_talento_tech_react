import type { Product } from "../../types"
import ActionButton from "../Global/ActionButton"
import AddToCartButton from "../Global/AddToCartButton"
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
    item: Product,
    addToCart: (product: Product) => void
}

export default function ProductCard({item, addToCart} : ProductCardProps) {
  const navigate = useNavigate();
  return (
    <div className="border-[0.5px] border-price-blue w-48 h-[340px] flex flex-col justify-between shadow-xl px-2 py-3 [&_p]:font-poppins" onClick={() => navigate(`/producto/${item.id}`)} style={{ cursor: 'pointer' }}>
        <img src={item.image} alt={item.name} className="h-36 w-full"/>
        <div className="flex flex-col gap-5 h-1/3">
            <p className="h-1/2">{item.name}</p>
            <div className="flex gap-2 [&_p]:text-md h-1/2">
                <p className="text-price-blue">${item.price}</p>
                <p className="opacity-40 line-through">${item.price + item.price * 0.1}</p>
            </div>
        </div>
        <AddToCartButton
            paddingX={16}
            paddingY={8}
            variant="primary"
            text="Agregar al carrito"
            product={item}
            addToCart={addToCart}
        />
    </div>
  )
}
