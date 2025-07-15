import { useParams, useLocation } from 'react-router-dom';
import type { Product } from '../types';
import Navbar from './Navbar';
import ActionButton from './Global/ActionButton';

type ProductoParams = {
id: string; 
};

type LocationState = {
product: Product;
};

export default function DetailedProduct() {
  const { id } = useParams<ProductoParams>();
  const location = useLocation();
  
  const state = location.state as LocationState | undefined;
  const product = state?.product;

  const DISCOUNT = 10;

  if (!product) {
    return <p>No se encontró producto</p>;
  }

  const saving = product.price / DISCOUNT;
  const payments = product.price / 12
  const isStockLow = product.stock < 20


  return (
    <div>
        <main className="flex gap-6">
            <div className='flex-1/2'>
                <img src={product.image} alt={product.name} />
            </div>
            <div className='flex flex-col gap-2 flex-1/2'>
                <div>
                    <p>Ahorras ${saving}</p>
                </div>
                <p className=''>
                    {product.name}
                </p>
                <div className='flex flex-col gap-2'>
                    <p className='line-through'>{product.price}</p>
                    <p className='text-price-blue'>{product.price - saving}</p>
                    <p>o hasta 12 cuotas sin interes de <span className='text-price-blue'> ${payments}</span></p>
                </div>
                <div className='flex justify-center items-center'>
                    <ActionButton
                    paddingY={8}
                    paddingX={20}
                    variant='primary'
                    text='Agregar al carrito'
                    />
                </div>
                {isStockLow ? (
                    <div className='w-3/5 bg-low-stock'>
                        <img src="" alt="low stock icon" />
                        <div>
                            <p>
                                Stock bajo
                            </p>
                            <p>
                                Este producto esta por agotarse!
                            </p>
                        </div>
                    </div>
                ) : ""}
            </div>
        </main>
        
        <div>
            <p>Descricion</p>
            <p>{product.description}</p>

        </div>
    </div>
  )
}