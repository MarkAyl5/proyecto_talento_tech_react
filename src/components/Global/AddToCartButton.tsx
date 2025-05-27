import type { Product } from "../../types"
type AddToCartButtonProps = {
    paddingX: number
    paddingY: number
    variant: 'primary' | 'secundary'
    text: string
    product: Product
    addToCart: (item: Product) => void
}

export default function AddToCartButton({paddingX, paddingY, variant, text, product, addToCart} : AddToCartButtonProps){

    const variantClasses = variant === 'primary' ? 'bg-strongblue border border-white text-light-white ' : 'border border-black text-black'

    

    return(
        <div>
            <button 
            style={{
                paddingLeft:paddingX,
                paddingRight:paddingX,
                paddingTop:paddingY,
                paddingBottom:paddingY
            }}
            className={`${variantClasses} flex items-center justify-center cursor-pointer`}
            onClick={() => addToCart(product)}
            >
            {text}
            
            </button>
        </div>
    )
}