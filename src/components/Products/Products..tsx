import ProductsList from "./ProductsList";
import SectionTitle from "./SectionTitle";
import { useCartContext } from "../../contexts/CartContext";
import { useState } from "react";

const CATEGORY_LABELS: Record<string, string> = {
  processor: "Procesadores",
  graphics_card: "Tarjetas gráficas",
  motherboard: "Motherboards",
  "ram memory": "Memoria RAM",
  "hdd memory": "Disco HDD",
  "ssd memory": "Disco SSD",
  "power supply": "Fuente de poder"
};

export default function Products() {
  const { addToCart } = useCartContext();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);
  const handleAddToCart = (product: any) => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1800);
  };
  return (
    <div className="px-10">
      <SectionTitle/>
      {showAlert && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded shadow-lg font-poppins z-50 transition-all">¡Producto agregado al carrito!</div>
      )}
      <ProductsList
        addToCart={handleAddToCart}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categoryLabels={CATEGORY_LABELS}
      />
    </div>
  );
}
