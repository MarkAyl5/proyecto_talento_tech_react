import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import HomePageProducts from "./components/HomePageProducts"
import HomeBanner from "./components/HomeBanner"
import MSIBanner from "../public/MSI banner.png"
import Footer from "./components/Footer/Footer"
import BenefitsSection from "./components/BenefitsSection/BenefitsSection"

function App() {
  

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <HomePageProducts/>
      <HomeBanner
      image={MSIBanner}
      />
      <BenefitsSection/>
      <Footer/>
    </>
  )
}

export default App
