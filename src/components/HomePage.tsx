import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import HomePageProducts from "../components/HomePageProducts"
import HomeBanner from "../components/HomeBanner"
import MSIBanner from "../public/MSI banner.png"
import Footer from "../components/Footer/Footer"
import BenefitsSection from "../components/BenefitsSection/BenefitsSection"
import { useCart } from "../hooks/useCart"

export default function HomePage() {
    const {cart, removeFromCart, isEmpty, cartTotal} = useCart()
  return (
    <div>
      
        
 
    
      <Navbar
      cart={cart}
      removeFromCart={removeFromCart}
      isEmpty={isEmpty}
      cartTotal={cartTotal}
      />
      <HeroSection/>
      <HomePageProducts/>
      <HomeBanner
      image={MSIBanner}
      />
      <BenefitsSection/>
      <Footer/>



    </div>
  )
}
