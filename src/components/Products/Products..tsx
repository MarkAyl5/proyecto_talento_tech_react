import Navbar from "../Navbar"
import Footer from "../Footer/Footer"
import ProductsList from "./ProductsList"
import { useCart } from "../../hooks/useCart"
import SectionTitle from "./SectionTitle"
export default function Products() {

  const {cart, addToCart, removeFromCart, isEmpty, cartTotal} = useCart()

  return (
    <>
        <Navbar
        cart={cart}
        removeFromCart={removeFromCart}
        isEmpty={isEmpty}
        cartTotal={cartTotal}
        />
        <div className="px-10">


          <SectionTitle/>
          <ProductsList
          addToCart={addToCart}
          />

        </div>


        <Footer/>
    </>
  )
}
