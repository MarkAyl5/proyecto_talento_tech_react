import HeroSection from "./HeroSection";
import HomePageProducts from "./HomePageProducts";
import HomeBanner from "./HomeBanner";
import BenefitsSection from "./BenefitsSection/BenefitsSection";

export default function HomePage() {
  return (
    <div>
      <HeroSection/>
      <HomePageProducts/>
      <HomeBanner image={"/MSI banner.png"}/>
      <BenefitsSection/>
    </div>
  );
}
