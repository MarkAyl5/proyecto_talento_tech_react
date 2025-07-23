import type { Product } from "../../types";
import { useCartContext } from "../../contexts/CartContext";

type AddToCartButtonProps = {
  paddingX: number;
  paddingY: number;
  variant: 'primary' | 'secundary';
  text: string;
  product: Product;
  addToCart?: (product: Product) => void;
};

export default function AddToCartButton({ paddingX, paddingY, variant, text, product, addToCart }: AddToCartButtonProps) {
  const context = useCartContext();
  const variantClasses = variant === 'primary' ? 'bg-strongblue border border-white text-light-white ' : 'border border-black text-black';
  return (
    <div>
      <button
        style={{
          paddingLeft: paddingX,
          paddingRight: paddingX,
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }}
        className={`${variantClasses} flex items-center justify-center cursor-pointer`}
        onClick={() => (addToCart ? addToCart(product) : context.addToCart(product))}
      >
        {text}
      </button>
    </div>
  );
}