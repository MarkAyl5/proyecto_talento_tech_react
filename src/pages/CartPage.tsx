import { useCartContext } from "../contexts/CartContext";
import ActionButton from "../components/Global/ActionButton";

export default function CartPage() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, emptyCart, cartTotal, isEmpty } = useCartContext();
  return (
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="font-poppins text-3xl font-bold mb-8">Carrito de compras</h1>
      {isEmpty ? (
        <p className="font-poppins text-xl">No hay productos en el carrito.</p>
      ) : (
        <>
          <ul className="flex flex-col gap-6 mb-8">
            {cart.map(item => (
              <li key={item.id} className="flex items-center gap-6 border-b pb-4">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <p className="font-bold">{item.name}</p>
                  <p>${item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => decreaseQuantity(item.id)} className="px-2">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="px-2">+</button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 font-bold">Eliminar</button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-6">
            <p className="font-poppins text-2xl">Total: ${cartTotal}</p>
            <ActionButton paddingX={16} paddingY={8} variant="secundary" text="Vaciar carrito" onClick={emptyCart} />
          </div>
          <ActionButton paddingX={32} paddingY={12} variant="primary" text="Finalizar compra" onClick={() => alert('¡Gracias por tu compra!')} />
        </>
      )}
    </div>
  );
} 