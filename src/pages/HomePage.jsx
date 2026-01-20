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
  BlogSection,
} from '@/components/sections';

const HomePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <HeroSection />
        
        {/* About - Who we are & services */}
        <AboutSection />
        
        {/* Portfolio - Gallery showcase */}
        <PortfolioSection />
        
        {/* Testimonials - Social proof */}
        <TestimonialsSection />
        
        {/* Partners - Trusted collaborations */}
        <PartnersSection />
        
        {/* Pricing - Packages */}
        <PricingSection />
        
        {/* Blog - Latest articles */}
        <BlogSection />
        
        {/* Contact - Get in touch */}
        <ContactSection />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default HomePage;
