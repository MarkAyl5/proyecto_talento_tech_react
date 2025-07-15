import KalisGamingLogo from "../Global/KalisGamingLogo";
import FooterLinks from "./FooterLinks";
import ActionButton from "../Global/ActionButton";

export default function Footer() {
  return (
    <div className="bg-strongblue px-4 mt-10 w-full lg:h-54 py-6 lg:px-16">

      <div className="flex flex-col gap-4 items-center lg:justify-between lg:h-5/6 lg:flex-row">
        <KalisGamingLogo/>
        <FooterLinks
        link1="/"
        link2="/products"
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
