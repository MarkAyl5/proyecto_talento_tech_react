import { useParams } from 'react-router-dom';
import type { Product } from '../types';
import ActionButton from './Global/ActionButton';
import { useCartContext } from '../contexts/CartContext';
import ProductsConnection from '../Api/productsConnection';
import { useMemo } from 'react';

export default function DetailedProduct() {
  const { id } = useParams<{ id: string }>();
  const { products } = ProductsConnection();
  const { addToCart } = useCartContext();

  const product = useMemo(() => products.find((p) => p.id === id), [products, id]);
  const DISCOUNT = 10;

  if (!product) {
    return <p className="font-poppins text-xl text-center mt-10">No se encontró producto</p>;
  }

  const saving = product.price / DISCOUNT;
  const payments = product.price / 12;
  const isStockLow = product.stock < 20;

  return (
    <div className="max-w-5xl mx-auto my-10 bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex flex-col items-center justify-center">
        <img src={product.image} alt={product.name} className="w-80 h-80 object-contain rounded-lg border mb-4" />
        {isStockLow && (
          <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded font-poppins text-sm mb-2">¡Stock bajo!</div>
        )}
      </div>
      <div className="flex-1 flex flex-col gap-4 justify-between">
        <div>
          <h2 className="font-poppins text-3xl font-bold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4 font-poppins">{product.description}</p>
          <div className="flex flex-col gap-2 mb-4">
            <span className="line-through text-gray-400 font-poppins">${product.price}</span>
            <span className="text-price-blue text-2xl font-bold font-poppins">${product.price - saving}</span>
            <span className="text-sm font-poppins">o hasta 12 cuotas sin interés de <span className="text-price-blue">${payments.toFixed(2)}</span></span>
            <span className="text-green-700 font-poppins">Ahorras ${saving}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-poppins text-xs">Categoría: {product.category}</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded font-poppins text-xs">Stock: {product.stock}</span>
          </div>
          <ActionButton
            paddingY={12}
            paddingX={32}
            variant='primary'
            text='Agregar al carrito'
            onClick={() => addToCart(product)}
          />
        </div>
        <div className="mt-8">
          <h3 className="font-poppins text-xl font-semibold mb-2">Reseñas</h3>
          {product.reviews && product.reviews.length > 0 ? (
            <ul className="flex flex-col gap-4">
              {product.reviews.map((review, idx) => (
                <li key={idx} className="bg-gray-50 border rounded p-4 flex flex-col gap-1">
                  <span className="font-bold text-blue-900 font-poppins">{review.reviewerName}</span>
                  <span className="text-yellow-500 font-poppins">Valoración: {review.valuation} / 5</span>
                  <span className="font-poppins">{review.reviewText}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 font-poppins">Este producto aún no tiene reseñas.</p>
          )}
        </div>
      </div>
    </div>
  );
}