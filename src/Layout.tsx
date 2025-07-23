import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer/Footer";
import { useCartContext } from "./contexts/CartContext";

export default function Layout() {
  const { cart, removeFromCart, isEmpty, cartTotal } = useCartContext();
  return (
    <>
      <Navbar cart={cart} removeFromCart={removeFromCart} isEmpty={isEmpty} cartTotal={cartTotal} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
} 