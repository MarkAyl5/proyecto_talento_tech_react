import { Link } from "react-router-dom"
import ProfileIcon from "../assets/mdi-light--account.svg"
import CartIcon from "../assets/mdi-light--cart.svg"
import KalisGamingLogo from "./Global/KalisGamingLogo"

export default function Navbar() {
    return(
        <div className="bg-strongblue flex items-center w-full h-20 justify-between px-[60px] ">

           <div className="flex items-center gap-16">
                    <KalisGamingLogo/>
                
                    <ul className="flex gap-16 [&_li]:text-light-white [&_li]:text-lg [&_li]:font-poppins">
                        <Link to={"/products"}>
                            <li>Productos</li>
                        </Link>
                        <Link to={"#"}>
                            <li>Contactanos</li>
                        </Link>
                    </ul>
                    

            </div>

            <div className="flex gap-6">
                <input type="text" className="w-[372px] h-10 bg-white font-poppins p-2 text-sm flex items-center gap-2" placeholder="Lo que necesitás está acá"/>
                <div className="flex gap-2 items-center justify-center [&_img]:size-8">
                    <Link to="">
                        <button className="hover:bg-blue-300 flex items-center">
                            <img src={ProfileIcon} alt="" />
                        </button>
                    </Link>
                        <button>
                            <img src={CartIcon} alt="" />
                        </button>
                </div>
            </div>


        </div>
    )
}