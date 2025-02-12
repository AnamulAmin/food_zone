import { Routes, Route } from "react-router-dom";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";
import Menu from "../pages/Menu";
import Blog from "../pages/Blog";
import FAQ from "../pages/FAQ";
import ContactUs from "../pages/ContactUs";
import Reservation from "../pages/Reservation";

const HomePage = () => (
  <>
    <Hero />
    <MenuSection />
    <ServiceSection />
    <AboutSection />
    <GallerySection />
    <TestimonialsSection />
    <NewsletterSection />
    <Footer />
  </>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/menu"
        element={
          <>
            <Menu />
            <Footer />
          </>
        }
      />
      <Route path="/service" element={<ServiceSection />} />
      <Route
        path="/about-us"
        element={
          <>
            <AboutUs />
            <Footer />
          </>
        }
      />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
      <Route
        path="/blog"
        element={
          <>
            <Blog />
            <Footer />
          </>
        }
      />
      <Route
        path="/faq"
        element={
          <>
            <FAQ />
            <Footer />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <ContactUs />
            <Footer />
          </>
        }
      />
      <Route
        path="/reservation"
        element={
          <>
            <Reservation />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}
