import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header, Footer } from '@/components/layout';
import {
  HeroSection,
  AboutSection,
  PortfolioSection,
  TestimonialsSection,
  PartnersSection,
  PricingSection,
  ContactSection,
} from '@/components/sections';

const HomePage = () => {
  // Handle scroll to section on page load if hash exists
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      
      <main>
        {/* Hero - Full viewport intro with video */}
        <section id="hero">
          <HeroSection />
        </section>
        
        {/* About - Who we are & services */}
        <section id="about">
          <AboutSection />
        </section>
        
        {/* Portfolio - Gallery showcase */}
        <section id="portfolio">
          <PortfolioSection />
        </section>
        
        {/* Testimonials - Social proof */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        {/* Partners - Trusted collaborations */}
        <section id="partners">
          <PartnersSection />
        </section>
        
        {/* Pricing - Packages */}
        <section id="pricing">
          <PricingSection />
        </section>
        
        {/* Contact - Get in touch */}
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default HomePage;
