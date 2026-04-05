import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base leading-base text-purple-900 min-h-screen flex flex-col">
      <Header />
      <HeroSection />

      <main className="grow flex flex-col gap-6">
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
