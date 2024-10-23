'use client'
import LandingBlock from "./components/landing/LandingBlock";
import ExperienceBlock from "./components/experienceBlock/ExperienceBlock";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import CreationBlock from "./components/CreationBlock/CreationBlock";
import CooperationBlock from "./components/CooperationBlock/CooperationBlock";
import SmoothScroll from "./components/animatedComponents/SmoothScroll";


export default function Home() {

  return (
   <>

   <LandingBlock />
   <ExperienceBlock />
   <ProductsSection />
   <CreationBlock />
   <CooperationBlock />

   </>
  );
}
