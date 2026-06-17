import { Footer } from "@/features/home/components/Footer";
import { Hero } from "@/features/home/components/Hero";
import Navbar from "@/features/home/components/Navbar";
import { ServicesSection } from "@/features/home/components/ServiceSection";
import { StatsSection } from "@/features/home/components/StatsSection";
import { TestimonialSection } from "@/features/home/components/TestimonialsSection";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};
