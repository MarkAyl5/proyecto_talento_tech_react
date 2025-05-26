import KalisGamingLogo from "../Global/KalisGamingLogo";
import { Link } from "react-router-dom";
import FooterLinks from "./FooterLinks";
import ActionButton from "../Global/ActionButton";

export default function Footer() {
  return (
    <div className="bg-strongblue flex flex-col px-16 mt-10 w-full h-54 py-6">
      <div className="h-5/6 flex justify-between">
        <KalisGamingLogo/>
        <FooterLinks
        link1="/"
        link2="/"
        link3="/"
        text1="Inicio"
        text2="Productos"
        text3="Contactanos"
        />
        <FooterLinks
        link1="/"
        link2="/"
        link3="/"
        text1="Servicio al cliente"
        text2="Reclamos y devoluciones"
        text3="Mi cuenta"
        />
        <FooterLinks
        link1="/"
        link2="/"
        link3="/"
        text1="Medios de pago"
        text2="Politicas de privacidad"
        text3=""
        />

        <ActionButton
        paddingX={12}
        paddingY={6}
        variant="primary"
        text="Boton de arrepentimiento"
        />

      </div>
    </div>
  )
}
