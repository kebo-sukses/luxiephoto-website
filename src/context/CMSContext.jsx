import React, { createContext, useContext, useState, useEffect } from 'react';

// Default data (fallback)
import * as mockData from '@/data/mock';

// Import content from JSON files
import heroContent from '../../content/hero/hero.json';
import aboutContent from '../../content/about/about.json';
import contactContent from '../../content/contact/contact.json';
import settingsContent from '../../content/settings/general.json';
import socialContent from '../../content/settings/social.json';

// Import Services
import serviceWeddingPhoto from '../../content/services/wedding-photography.json';
import serviceWeddingVideo from '../../content/services/wedding-videography.json';
import servicePhotoRetouch from '../../content/services/photo-retouching.json';
import servicePreWedding from '../../content/services/pre-wedding-shoot.json';

// Import Portfolio
import portfolioArthurLinda from '../../content/portfolio/arthur-linda.json';
import portfolioThomasGrace from '../../content/portfolio/thomas-grace.json';
import portfolioMichaelGina from '../../content/portfolio/michael-gina.json';
import portfolioFreddieAida from '../../content/portfolio/freddie-aida.json';

// Import Testimonials
import testimonialArthurLinda from '../../content/testimonials/arthur-linda.json';
import testimonialFreddieAida from '../../content/testimonials/freddie-aida.json';
import testimonialRobbieMaggie from '../../content/testimonials/robbie-maggie.json';

// Import Pricing
import pricingEssential from '../../content/pricing/essential.json';
import pricingPremium from '../../content/pricing/premium.json';
import pricingLuxury from '../../content/pricing/luxury.json';

// Import Partners
import partnerRoxana from '../../content/partners/roxana.json';
import partnerFelton from '../../content/partners/felton.json';
import partnerPennelope from '../../content/partners/pennelope.json';

// Compile data arrays
const servicesData = [serviceWeddingPhoto, serviceWeddingVideo, servicePhotoRetouch, servicePreWedding];
const portfolioData = [portfolioArthurLinda, portfolioThomasGrace, portfolioMichaelGina, portfolioFreddieAida];
const testimonialsData = [testimonialArthurLinda, testimonialFreddieAida, testimonialRobbieMaggie];
const pricingData = [pricingEssential, pricingPremium, pricingLuxury];
const partnersData = [partnerRoxana, partnerFelton, partnerPennelope];

const CMSContext = createContext(null);

// Initialize content immediately to avoid null issues on first render
const initialContent = {
  hero: heroContent,
  about: aboutContent,
  contact: contactContent,
  settings: settingsContent,
  social: socialContent,
  services: servicesData || [],
  portfolio: portfolioData || [],
  testimonials: testimonialsData || [],
  pricing: pricingData || [],
  partners: partnersData || []
};

export function CMSProvider({ children }) {
  const [content, setContent] = useState(initialContent);
  const [loading, setLoading] = useState(false);

  // Provide CMS data with mock data as fallback
  const value = {
    loading,
    content,
    
    // Helper getters that return CMS data or mock data
    getSiteSettings: () => content?.settings || {
      siteName: 'LuxiePhoto',
      primaryColor: '#ec4899',
      fontHeading: 'Playfair Display',
      fontBody: 'Poppins'
    },
    
    // Social Media - centralized for all components
    getSocialMedia: () => content?.social || {
      instagram: '',
      facebook: '',
      youtube: '',
      tiktok: '',
      twitter: '',
      pinterest: '',
      whatsapp: '',
      telegram: '',
      linkedin: ''
    },
    
    getHero: () => content?.hero || mockData.heroContent,
    
    getAbout: () => content?.about || mockData.aboutContent,
    
    // Services - sorted by order, always returns array
    getServices: () => {
      const services = content?.services || mockData.services || [];
      return [...services].sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    
    // Portfolio - with optional filter for featured, always returns array
    getPortfolio: (featuredOnly = false) => {
      const portfolio = content?.portfolio || mockData.portfolioItems || [];
      if (featuredOnly) {
        return portfolio.filter(item => item.featured);
      }
      return portfolio;
    },
    
    // Testimonials - always returns array
    getTestimonials: () => content?.testimonials || mockData.testimonials || [],
    
    // Partners - sorted by order, always returns array
    getPartners: () => {
      const partners = content?.partners || mockData.partners || [];
      return [...partners].sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    
    // Pricing - sorted by order, always returns array
    getPricing: () => {
      const pricing = content?.pricing || mockData.pricingPlans || [];
      return [...pricing].sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    
    getContact: () => content?.contact || mockData.contactInfo,
    
    getFooter: () => ({
      description: content?.contact?.description || mockData.contactInfo?.description,
      copyright: '© 2026 Luxie Photography. All rights reserved.'
    }),
    
    getNavigation: () => mockData.navigationLinks
  };

  return (
    <CMSContext.Provider value={value}>
      {children}
    </CMSContext.Provider>
  );
}

export function useCMS() {
  const context = useContext(CMSContext);
  if (!context) {
    throw new Error('useCMS must be used within a CMSProvider');
  }
  return context;
}

export default CMSContext;
