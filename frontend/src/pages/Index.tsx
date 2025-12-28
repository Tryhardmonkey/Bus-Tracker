import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveTrackingPreview from "@/components/LiveTrackingPreview";
import PopularRoutes from "@/components/PopularRoutes";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LiveTrackingPreview />
        <PopularRoutes />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
