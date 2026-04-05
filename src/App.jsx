import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-base desktop:text-[18px] leading-base text-purple-900 min-h-screen flex flex-col overflow-hidden">
      <Header />

      <main className="grow">
        <div className="bg-purple-100 rounded-b-[100%_50px] tablet:rounded-b-[100%_85px]">
          <HeroSection />
          <FeaturesSection />
        </div>

        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default App
