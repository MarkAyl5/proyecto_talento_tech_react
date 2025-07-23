import { Link, useNavigate } from "react-router-dom";
import ProfileIcon from "../assets/mdi-light--account.svg";
import CartIcon from "../assets/mdi-light--cart.svg";
import KalisGamingLogo from "./Global/KalisGamingLogo";
import { useState } from "react";
import ActionButton from "./Global/ActionButton";
import type { CartItem, Product } from "../types";
import { useAuthContext } from "../contexts/AuthContext";

type NavbarProps = {
  cart: CartItem[];
  removeFromCart: (id: Product["id"]) => void;
  isEmpty: boolean;
  cartTotal: number;
};

export default function Navbar({ cart, removeFromCart, isEmpty, cartTotal }: NavbarProps) {
  const [visible, setVisible] = useState(false);
  const { isAuthenticated, userRole, logout } = useAuthContext();
  const navigate = useNavigate();

  return (
    <div className="bg-strongblue flex items-center w-full h-20 justify-between px-[60px]">
      <div className="flex items-center gap-16">
        <KalisGamingLogo />
        <ul className="md:flex gap-16 [&_li]:text-light-white [&_li]:text-lg [&_li]:font-poppins md:block hidden">
          <Link to={"/products"}>
            <li>Productos</li>
          </Link>
          <Link to={"#contacto"}>
            <li>Contactanos</li>
          </Link>
          {userRole === "admin" && (
            <Link to={"/admin"}>
              <li>Panel administrador</li>
            </Link>
          )}
        </ul>
      </div>
      <input type="text" className="w-[372px] h-10 bg-white font-poppins p-2 text-sm xl:flex items-center gap-2 hidden " placeholder="Lo que necesitás está acá" />
      <div className="flex gap-2 items-center justify-center [&_img]:size-8">
        {isAuthenticated ? (
          <button className="hover:bg-blue-300 flex items-center" onClick={() => { logout(); navigate("/login"); }}>
            <img src={ProfileIcon} alt="logout" />
          </button>
        ) : (
          <button className="hover:bg-blue-300 flex items-center" onClick={() => navigate("/login") }>
            <img src={ProfileIcon} alt="login" />
          </button>
        )}
        <button onClick={() => setVisible(!visible)} className="cursor-pointer">
          <img src={CartIcon} alt="carrito" />
        </button>
        <div className={visible ? 'fixed top-0 left-0 w-full h-full z-50 flex' : 'hidden'}>
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-50"
            onClick={() => setVisible(false)}
          />
          <div
            className="ml-auto h-full w-[550px] bg-light-white relative p-6 flex flex-col  "
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-20 flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <p className="font-poppins text-2xl">Mi carrito</p>
                <button onClick={() => setVisible(false)}>X</button>
              </div>
              <div className="w-full h-[1px] bg-price-blue"></div>
            </div>
            {isEmpty ? (
              <p className="font-poppins text-xl text-center">No hay items en el carrito...</p>
            ) : (
              <div className="flex flex-col gap-3 h-dvh overflow-scroll">
                {cart.map((cartItem) => (
                  <div className="p-3 bg-strongblue flex gap-4 h-32" key={cartItem.id}>
                    <div className="w-1/4 h-full">
                      <img
                        src={cartItem.image}
                        alt=""
                        className="w-full h-full object-fill"
                      />
                    </div>
                    <div className="w-3/4 bg-white flex flex-col [&_p]:font-poppins p-2 gap-1">
                      <div className="flex justify-between">
                        <p className="line-clamp-1">{cartItem.name}</p>
                        <button onClick={() => removeFromCart(cartItem.id)}>X</button>
                      </div>
                      <p className="opacity-80">x{cartItem.quantity}</p>
                      <p>${cartItem.price}</p>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between">
                  <p>Subtotal</p>
                  <p>${cartTotal}</p>
                </div>
                <div className="flex gap-2 flex-col justify-center items-center">
                  <ActionButton
                    paddingX={160}
                    paddingY={8}
                    variant="primary"
                    text="Finalizar compra"
                  />
                  <ActionButton
                    paddingX={180}
                    paddingY={8}
                    variant="secundary"
                    text="Ver carrito"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}