import { Link } from "react-router-dom"
import ArrowIcon from "../../assets/weui--arrow-outlined.svg"

export default function SectionTitle() {
  return (
    <div className="p-3 [&_p]:font-poppins flex flex-col gap-3 my-4">

      <div className="flex gap-1  [&_p]:text-sm items-center ">
        <Link to={"/"}><p>Inicio</p></Link>
        <img src={ArrowIcon} alt="" />
        <Link to={"/products"} className="text-price-blue"><p>Productos</p></Link>
      </div>

      <div>
        <p className=" font-medium text-3xl">Todos nuestros productos</p>
      </div>
    </div>
  )
}
