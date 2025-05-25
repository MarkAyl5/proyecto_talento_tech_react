import { useEffect, useState } from "react"
import type { Product } from "../types"

export default function ProductsConnection(){

    const [products, setProducts] = useState<Product[]>([])


    useEffect(()=>{
        fetch("https://68268799397e48c91316632f.mockapi.io/products")
        .then(res => res.json())
        .then(data => setProducts(data))
        .catch(err => console.error(err)
        )
    }, [])
    
}