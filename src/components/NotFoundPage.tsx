import { Link } from "react-router-dom";
import ActionButton from "./Global/ActionButton";

export default function NotFoundPage(){
    return(

        <div className="flex flex-col justify-center items-center gap-10 w-dvw h-dvh">
            <h1 className="font-poppins text-3xl font-bold">Pagina no encontrada</h1>
            <p className="font-poppins text-lg ">La pagina a la que usted esta queriendo acceder no existe o fue cambiada, vuelva al inicio para seguir navegando</p>
            <Link to={"/"}>
                <ActionButton
                paddingX={16}
                paddingY={12}
                variant="primary"
                text="Volver al inicio"
                />
            </Link>
        </div>
    )
}