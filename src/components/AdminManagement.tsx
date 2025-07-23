import ActionButton from "./Global/ActionButton";
import ProductsConnection from "../Api/productsConnection";
import { useState } from "react";
import EditIcon from "../assets/mingcute--edit-line.svg"
import TrashCan from "../assets/mynaui--trash.svg"

export default function AdminManagement() {
  
  
    const {products} = ProductsConnection()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEdit = ( ) => {
        setIsModalOpen(true)
    }
    const addNewProduct = () => {

    }
    
    return (
    <div className="px-20 py-12 flex flex-col gap-8">
      <div className="flex justify-between">
        <p className="font-poppins font-black text-3xl">Hoy, Martes 22 de julio</p>
        <button
        className="px-4 py-2 bg-strongblue text-white font-poppins"
        onClick={()=>addNewProduct()}
        >
            Añadir nuevo producto
        </button>
      </div>
      <div className="w-full bg-white   ">
        <table className="[&_th]:py-1 [&_tr]:border border-none w-full [&_th]:font-medium">
            <tr className="bg-gray-200 [&_th]:py-3">
                <th>Producto</th>
                <th>ID</th>
                <th>Categoria</th>
                <th>Stock</th>
                <th>Acciones</th>
            </tr>

        {products.map((product) => (
            <tr>
                <th className="flex gap-4 items-center px-10">
                    <img 
                    src={product.image} 
                    alt="" 
                    className="size-12"
                    />  
                    {product.name}
                    </th>
                <th>#{product.id}</th>
                <th>{product.category.toLocaleUpperCase()}</th>
                <th>{product.stock}</th>
                <th>
                    <button>
                        <img src={EditIcon} alt="" />
                    </button>
                    <button>
                        <img src={TrashCan} alt="" />
                    </button>

                </th>
            </tr>
        ))}

        </table>

      </div>
    </div>
  )
}
