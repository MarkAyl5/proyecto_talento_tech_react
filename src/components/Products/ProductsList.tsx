import { useState } from "react";
import ProductsConnection from "../../Api/productsConnection";
import ProductCard from "./ProductCard";
import type { Product } from "../../types";
import { useCart } from "../../hooks/useCart";

type ProductsListProps = {
    addToCart: (item: Product) => void
}

export default function ProductsList({addToCart} : ProductsListProps) {
    const {products} = ProductsConnection()

    const showProducts = products
    
    return (

    <div className="py-8 w-full flex gap-4">
        <div className="w-1/5">
            <p className="text-xl font-poppins font-medium border-b">Filtrar por categoria</p>
        

        </div>

        <div className="grid grid-cols-6 gap-5 w-4/5 ">
            {showProducts.map((item) =>(
                <ProductCard
                key={item.id}
                item={item}
                addToCart={addToCart}
                />
            ))}
        </div>
    </div>  
  )
}
