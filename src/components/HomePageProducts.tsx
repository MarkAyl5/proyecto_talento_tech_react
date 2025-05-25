import RightArrow from "../assets/weui--arrow-outlined.svg"
import HomePageProductCard from "./HomePageProductCard"
import type { Product } from "../types"
import { useState, useEffect } from "react"

export default function HomePageProducts() {

  const [products, setProducts] = useState<Product[]>([])
  
  
      useEffect(()=>{
          fetch("https://68268799397e48c91316632f.mockapi.io/products")
          .then(res => res.json())
          .then(data => setProducts(data.slice(0,8)))
          .catch(err => console.error(err)
          )
      }, [])


  return (
    <div className="mx-15 mt-7 mb-24 flex flex-col gap-10">

      <div className="flex justify-between [&_p]:font-poppins">
            <p className=" text-3xl "> <span className="font-bold">MEGA</span> ofertas para tu setup  </p>
            <button className="flex items-center justify-center cursor-pointer text-xl font-poppins">
                Mostrar más
                <img src={RightArrow} alt="flecha hacia la derecha" className="size-8"  />
            </button>
      </div>

    <div className="flex justify-between">

      {products.map((product) => (

        <HomePageProductCard
        name={product.name.substring(0, 40)}
        image={product.image}
        price={product.price}
        />
      ))}

    
      

    </div>

    </div>
  )
}
