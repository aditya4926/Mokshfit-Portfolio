import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Challenge from "./components/Challenge";
import Philosophy from "./components/Philosophy";
import GrowthEcosystem from "./components/GrowthEcosystem";
import Differentiation from "./components/Differentiation";
import Services from "./components/Services";
import GrowthSystem from "./components/GrowthSystem";
import Approach from "./components/Approach";
import Industries from "./components/Industries";
import Edge from "./components/Edge";
import Diagnostics from "./components/Diagnostics";
import Onboarding from "./components/Onboarding";
import CaseStudies from "./components/CaseStudies";
import Proof from "./components/Proof";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-ink">
      <Navbar />
      <main>
        <Hero />
        <Challenge />
        <Philosophy />
        <GrowthEcosystem />
        <Differentiation />
        <Services />
        <GrowthSystem />
        <Approach />
        <Industries />
        <Edge />
        <Diagnostics />
        <Onboarding />
        <CaseStudies />
        <Proof />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
