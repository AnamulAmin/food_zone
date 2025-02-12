import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import StatsSection from "../components/StatsSection";
import NewsletterSection from "../components/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MenuSection />
      <ServiceSection />
      <StatsSection />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
