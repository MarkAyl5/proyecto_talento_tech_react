
import ProductCard from "./ProductCard";
import { useProductsContext } from "../../contexts/ProductsContext";
import type { Dispatch, SetStateAction } from "react";
import { useMemo } from "react";

function filterUniqueById<T extends { id: string }>(arr: T[]): T[] {
  const seen = new Set<string>();
  return arr.filter(item => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function findDuplicateIds<T extends { id: string }>(arr: T[]): string[] {
  const seen = new Set<string>();
  const duplicates = new Set<string>();
  for (const item of arr) {
    if (seen.has(item.id)) duplicates.add(item.id);
    else seen.add(item.id);
  }
  return Array.from(duplicates);
}

type ProductsListProps = {
  addToCart: (product: any) => void;
  selectedCategory: string | null;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
  categoryLabels: Record<string, string>;
};

export default function ProductsList({ addToCart, selectedCategory, setSelectedCategory, categoryLabels }: ProductsListProps) {
  const { products } = useProductsContext();
  const categories = Object.keys(categoryLabels);
  const filteredProducts = useMemo(() => (
    selectedCategory
      ? products.filter((p) => p.category === selectedCategory)
      : products
  ), [products, selectedCategory]);
  const uniqueProducts = useMemo(() => filterUniqueById(filteredProducts), [filteredProducts]);
  const duplicateIds = useMemo(() => findDuplicateIds(filteredProducts), [filteredProducts]);
  return (
    <div className="py-8 w-full flex gap-4">
      <div className="w-1/5">
        <p className="text-xl font-poppins font-medium border-b mb-4">Filtrar por categoría</p>
        <ul className="flex flex-col gap-2">
          <li>
            <button
              className={`font-poppins px-2 py-1 rounded text-left w-full ${!selectedCategory ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
              onClick={() => setSelectedCategory(null)}
            >
              Todas
            </button>
          </li>
          {categories.map((cat) => (
            <li key={cat}>
              <button
                className={`font-poppins px-2 py-1 rounded text-left w-full ${selectedCategory === cat ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {categoryLabels[cat]}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-6 gap-5 w-4/5 ">
        {uniqueProducts.map((item) => (
          <ProductCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
