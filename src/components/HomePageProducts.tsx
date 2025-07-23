import RightArrow from "../assets/weui--arrow-outlined.svg";
import HomePageProductCard from "./HomePageProductCard";
import ProductsConnection from "../Api/productsConnection";
import { Link, useNavigate } from "react-router-dom";

export default function HomePageProducts() {
  const { products } = ProductsConnection();
  const navigate = useNavigate();
  return (
    <div className="mx-4 lg:mx-15 mt-7 mb-32 flex flex-col gap-10">
      <div className="flex justify-between [&_p]:font-poppins">
        <p className=" text-md lg:text-3xl "> <span className="font-bold">MEGA</span> ofertas para tu setup </p>
        <button className="flex items-center justify-center cursor-pointer font-poppins text-xs lg:text-xl">
          <Link to={"/products"}>
            Mostrar más
          </Link>
          <img src={RightArrow} alt="flecha hacia la derecha" className="size-6 lg:size-8" />
        </button>
      </div>
      <div className=" gap-3 flex-col flex items-center md:grid md:grid-cols-3  lg:flex lg:flex-row lg:justify-between lg:mt-6">
        {products.slice(0, 9).map((product) => (
          <HomePageProductCard
            key={product.id}
            name={product.name.substring(0, 40)}
            image={product.image}
            price={product.price}
            onClick={() => navigate(`/producto/${product.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
