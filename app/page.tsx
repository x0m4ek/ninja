import Navbar from "./components/navbar/Navbar";
import LandingBlock from "./components/landing/LandingBlock";
import ExperienceBlock from "./components/experienceBlock/ExperienceBlock";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import CreationBlock from "./components/CreationBlock/CreationBlock";
import CooperationBlock from "./components/CooperationBlock/CooperationBlock";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
   <>
   <Navbar />
   <LandingBlock />
   <ExperienceBlock />
   <ProductsSection />
   <CreationBlock />
   <CooperationBlock />
   <Footer />
   </>
  );
}
