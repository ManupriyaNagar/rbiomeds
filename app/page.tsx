import Hero from "./Components/Home/Hero";
import WelcomeSection from "./Components/Home/WelcomeSection";
import StatsSection from "./Components/Home/StatsSection";
import SpecialtiesSection from "./Components/Home/SpecialtiesSection";
import Showcasing from "./Components/Home/Showcasing";
import ImageGallery from "./Components/Home/ImageGallery";
import ProductSection from "./Components/Home/ProductSection";
import HealthCalculators from "./Components/Home/HealthCalculators";
import ArticlesSection from "./Components/Home/ArticlesSection";
import OurBusinesses from "./Components/Home/OurBusinesses";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      {/* <StatsSection /> */}
      <Showcasing />
      <OurBusinesses />
      <SpecialtiesSection />
      <ProductSection />
      <HealthCalculators />
      <ArticlesSection />
      <ImageGallery />
    </>
  );
}
