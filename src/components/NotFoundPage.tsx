import { Link } from "react-router-dom";

export default function NotFoundPage(){
    return(

        <div className="flex flex-col justify-center items-center gap-10 w-dvw h-dvh">
            <h1 className="font-poppins text-3xl font-bold">Pagina no encontrada</h1>
            <p className="font-poppins text-lg ">La pagina a la que usted esta queriendo acceder no existe o fue cambiada, vuelva al inicio para seguir navegando</p>
            <Link to={"/"}>
            <button className="p-4 bg-black text-white font-bold rounded-lg">
                Volver al inicio
            </button>
            </Link>
        </div>
    )
}