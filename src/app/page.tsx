import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import KeyHighlights from '@/components/KeyHighlights';
import AboutSection from '@/components/AboutSection';
import ProductRangeSection from '@/components/ProductRangeSection';
import BrandPortfolioSection from '@/components/BrandPortfolioSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProcessSection from '@/components/ProcessSection';
import SupplyNetworkSection from '@/components/SupplyNetworkSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <KeyHighlights />
        <AboutSection />
        <ProductRangeSection />
        <BrandPortfolioSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <SupplyNetworkSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
