import React, { createContext, useContext, useState, useEffect } from 'react';

// Default data (fallback - always use mock data for now)
import * as mockData from '@/data/mock';

const CMSContext = createContext(null);

export function CMSProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [useCMS, setUseCMS] = useState(false);

  useEffect(() => {
    // Always use mock data - CMS integration disabled for production stability
    setLoading(false);
  }, []);

  // Provide mock data as fallback
  const value = {
    loading,
    useCMS,
    content: useCMS ? content : null,
    
    // Helper getters that return CMS data or mock data
    getSiteSettings: () => content?.siteSettings || {
      siteName: 'LuxiePhoto',
      primaryColor: '#ec4899',
      fontHeading: 'Playfair Display',
      fontBody: 'Poppins'
    },
    
    getHero: () => content?.hero || mockData.heroContent,
    
    getAbout: () => content?.about || mockData.aboutContent,
    
    getServices: () => content?.services || mockData.services,
    
    getPortfolio: () => content?.portfolio || mockData.portfolioItems,
    
    getTestimonials: () => content?.testimonials || mockData.testimonials,
    
    getPartners: () => content?.partners || mockData.partners,
    
    getPricing: () => content?.pricing || mockData.pricingPlans,
    
    getBlog: () => content?.blog || mockData.blogPosts,
    
    getContact: () => content?.contact || mockData.contactInfo,
    
    getFooter: () => content?.footer || {
      description: mockData.contactInfo?.description,
      copyright: '© 2026 Luxie Photography. All rights reserved.'
    },
    
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
