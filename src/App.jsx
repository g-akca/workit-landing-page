import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/HeroSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base leading-base text-purple-900">
      <Header />
      <HeroSection />

      <main>
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
