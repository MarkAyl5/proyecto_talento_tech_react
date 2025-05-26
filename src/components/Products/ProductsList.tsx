import ProductsConnection from "../../Api/ProductsConnection";
import ProductCard from "./ProductCard";

export default function ProductsList() {
    const {products} = ProductsConnection()


    return (

    <div className="px-12 py-8 w-full flex">
        <div className="w-1/5">

        

        </div>

        <div className="grid grid-cols-6 gap-5 w-4/5 ">
            {products.map((item) =>(
                <ProductCard
                image={item.image}
                name={item.name}
                price={item.price}
                />
            ))}
        </div>
    </div>  
  )
}
