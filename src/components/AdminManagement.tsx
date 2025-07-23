import ActionButton from "./Global/ActionButton";
import { useProductsContext } from "../contexts/ProductsContext";
import { useState } from "react";
import EditIcon from "../assets/mingcute--edit-line.svg";
import TrashCan from "../assets/mynaui--trash.svg";

const API_URL = "https://68268799397e48c91316632f.mockapi.io/products";
const CATEGORIES = [
  "processor",
  "graphics_card",
  "motherboard",
  "ram memory",
  "hdd memory",
  "ssd memory",
  "power supply"
];

export default function AdminManagement() {
  const { products, setProducts } = useProductsContext();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [form, setForm] = useState({ name: "", image: "", description: "", price: "", category: CATEGORIES[0], stock: "" });
  const [alert, setAlert] = useState<string | null>(null);

  // CRUD
  async function handleAddProduct(e: React.FormEvent) {
    e.preventDefault();
    const newProduct = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
      reviews: [],
    };
    const res = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(newProduct) });
    const data = await res.json();
    setProducts(prev => [...prev, data]);
    setIsAddModalOpen(false);
    setForm({ name: "", image: "", description: "", price: "", category: CATEGORIES[0], stock: "" });
    setAlert("Producto agregado exitosamente");
    setTimeout(() => setAlert(null), 1800);
  }

  function openEditModal(product: any) {
    setSelectedProduct(product);
    setForm({ ...product, price: String(product.price), stock: String(product.stock) });
    setIsEditModalOpen(true);
  }

  async function handleEditProduct(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedProduct) return;
    const updatedProduct = { ...form, price: Number(form.price), stock: Number(form.stock) };
    const res = await fetch(`${API_URL}/${selectedProduct.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(updatedProduct) });
    const data = await res.json();
    setProducts(prev => prev.map(p => p.id === data.id ? data : p));
    setIsEditModalOpen(false);
    setSelectedProduct(null);
    setAlert("Producto editado exitosamente");
    setTimeout(() => setAlert(null), 1800);
  }

  function openDeleteModal(product: any) {
    setSelectedProduct(product);
    setIsDeleteModalOpen(true);
  }

  async function handleDeleteProduct() {
    if (!selectedProduct) return;
    await fetch(`${API_URL}/${selectedProduct.id}`, { method: "DELETE" });
    setProducts(prev => prev.filter(p => p.id !== selectedProduct.id));
    setIsDeleteModalOpen(false);
    setSelectedProduct(null);
    setAlert("Producto eliminado exitosamente");
    setTimeout(() => setAlert(null), 1800);
  }

  return (
    <div className="px-20 py-12 flex flex-col gap-8">
      <div className="flex justify-between">
        <p className="font-poppins font-black text-3xl">Panel de administración</p>
        <button className="px-4 py-2 bg-strongblue text-white font-poppins" onClick={() => setIsAddModalOpen(true)}>
          Añadir nuevo producto
        </button>
      </div>
      {alert && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded shadow-lg font-poppins z-50 transition-all">{alert}</div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead>
            <tr className="bg-strongblue text-white">
              <th className="p-2 text-center">Imagen</th>
              <th className="p-2 text-center">Nombre</th>
              <th className="p-2 text-center">Precio</th>
              <th className="p-2 text-center">Stock</th>
              <th className="p-2 text-center">Categoría</th>
              <th className="p-2 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="border-b text-center align-middle">
                <td className="p-2 align-middle flex justify-center items-center"><img src={product.image} alt={product.name} className="w-16 h-16 object-cover mx-auto" /></td>
                <td className="p-2 align-middle">{product.name}</td>
                <td className="p-2 align-middle">${product.price}</td>
                <td className="p-2 align-middle">{product.stock}</td>
                <td className="p-2 align-middle">{product.category}</td>
                <td className="p-2 align-middle flex gap-2 justify-center items-center">
                  <button onClick={() => openEditModal(product)}><img src={EditIcon} alt="Editar" /></button>
                  <button onClick={() => openDeleteModal(product)}><img src={TrashCan} alt="Eliminar" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal Agregar */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form className="bg-white p-8 rounded flex flex-col gap-4 min-w-[350px] shadow-lg" onSubmit={handleAddProduct}>
            <h2 className="font-bold text-xl mb-2">Agregar producto</h2>
            <label className="flex flex-col gap-1">
              Nombre
              <input required className="border p-2" placeholder="Nombre" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Imagen (URL o string)
              <input required className="border p-2" placeholder="Imagen (URL o string)" value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Descripción
              <input required className="border p-2" placeholder="Descripción" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Precio
              <input required className="border p-2" placeholder="Precio" type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Categoría
              <select required className="border p-2" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-1">
              Stock
              <input required className="border p-2" placeholder="Stock" type="number" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} />
            </label>
            <div className="flex gap-2 mt-2">
              <ActionButton paddingX={12} paddingY={6} variant="primary" text="Agregar" />
              <ActionButton paddingX={12} paddingY={6} variant="secundary" text="Cancelar" onClick={() => setIsAddModalOpen(false)} />
            </div>
          </form>
        </div>
      )}
      {/* Modal Editar */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form className="bg-white p-8 rounded flex flex-col gap-4 min-w-[350px] shadow-lg" onSubmit={handleEditProduct}>
            <h2 className="font-bold text-xl mb-2">Editar producto</h2>
            <label className="flex flex-col gap-1">
              Nombre
              <input required className="border p-2" placeholder="Nombre" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Imagen (URL o string)
              <input required className="border p-2" placeholder="Imagen (URL o string)" value={form.image} onChange={e => setForm(f => ({ ...f, image: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Descripción
              <input required className="border p-2" placeholder="Descripción" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Precio
              <input required className="border p-2" placeholder="Precio" type="number" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
            </label>
            <label className="flex flex-col gap-1">
              Categoría
              <select required className="border p-2" value={form.category} onChange={e => setForm(f => ({ ...f, category: e.target.value }))}>
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-1">
              Stock
              <input required className="border p-2" placeholder="Stock" type="number" value={form.stock} onChange={e => setForm(f => ({ ...f, stock: e.target.value }))} />
            </label>
            <div className="flex gap-2 mt-2">
              <ActionButton paddingX={12} paddingY={6} variant="primary" text="Guardar" />
              <ActionButton paddingX={12} paddingY={6} variant="secundary" text="Cancelar" onClick={() => setIsEditModalOpen(false)} />
            </div>
          </form>
        </div>
      )}
      {/* Modal Eliminar */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded flex flex-col gap-4 min-w-[350px] shadow-lg">
            <h2 className="font-bold text-xl mb-2">¿Eliminar producto?</h2>
            <p>Esta acción no se puede deshacer.</p>
            <div className="flex gap-2 mt-2">
              <ActionButton paddingX={12} paddingY={6} variant="primary" text="Eliminar" onClick={handleDeleteProduct} />
              <ActionButton paddingX={12} paddingY={6} variant="secundary" text="Cancelar" onClick={() => setIsDeleteModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
