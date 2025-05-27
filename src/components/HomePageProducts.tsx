import RightArrow from "../assets/weui--arrow-outlined.svg"
import HomePageProductCard from "./HomePageProductCard"
import ProductsConnection from "../Api/productsConnection"

export default function HomePageProducts() {


  const { products } = ProductsConnection()

  const shortedProducts = products.slice(0,7)

  return (
    <div className="mx-15 mt-7 mb-32 flex flex-col gap-10">

      <div className="flex justify-between [&_p]:font-poppins">
            <p className=" text-3xl "> <span className="font-bold">MEGA</span> ofertas para tu setup  </p>
            <button className="flex items-center justify-center cursor-pointer text-xl font-poppins">
                Mostrar más
                <img src={RightArrow} alt="flecha hacia la derecha" className="size-8"  />
            </button>
      </div>

    <div className="flex justify-between mt-6">

      {shortedProducts.map((product) => (

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
