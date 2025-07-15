import CardIcon from "../../assets/solar--card-linear.svg"
import ShippingIcon from "../../assets/material-symbols-light--local-shipping-outline.svg"
import LockerIcon from "../../assets/material-symbols-light--lock-outline.svg"
import Benefit from "./Benefit"

export default function BenefitsSection() {
  return (
    <div className="bg-white w-full h-2/5 flex flex-col gap-3 items-center my-10 lg:h-52 md:justify-center lg:gap-30 md:flex-row ">
        <Benefit 
        image={CardIcon}
        title="¡Todos los medios de pago!"
        text="Aceptamos efectivo, tarjeta, transferencia y Mercado Pago."
        />
        <Benefit 
        image={ShippingIcon}
        title="Envíos a TODO el país"
        text="Realizamos envíos todos los días a todo el país."
        />
        <Benefit 
        image={LockerIcon}
        title="Comprá sin miedo"
        text="Tenemos política de devoluciones y reclamos."
        />

    </div>
  )
}
