import Hero from "./Components/Home/Hero";
import WelcomeSection from "./Components/Home/WelcomeSection";
import StatsSection from "./Components/Home/StatsSection";
import SpecialtiesSection from "./Components/Home/SpecialtiesSection";
import Showcasing from "./Components/Home/Showcasing";
import OurEcoSystem from "./Components/Home/OurEcoSystem";
import ImageGallery from "./Components/Home/ImageGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeSection />
      <StatsSection />
      <Showcasing />
      <SpecialtiesSection />
      {/* <OurEcoSystem /> */}
      <ImageGallery />
    </>
  );
}
