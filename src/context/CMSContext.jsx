import React, { createContext, useContext, useState, useEffect } from 'react';

// Default data (fallback)
import * as mockData from '@/data/mock';

// Import content from JSON files
import heroContent from '../../content/hero/hero.json';
import aboutContent from '../../content/about/about.json';
import contactContent from '../../content/contact/contact.json';
import settingsContent from '../../content/settings/general.json';
import socialContent from '../../content/settings/social.json';

const CMSContext = createContext(null);

export function CMSProvider({ children }) {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load content from JSON files
    setContent({
      hero: heroContent,
      about: aboutContent,
      contact: contactContent,
      settings: settingsContent,
      social: socialContent
    });
    setLoading(false);
  }, []);

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
    
    getServices: () => mockData.services,
    
    getPortfolio: () => mockData.portfolioItems,
    
    getTestimonials: () => mockData.testimonials,
    
    getPartners: () => mockData.partners,
    
    getPricing: () => mockData.pricingPlans,
    
    getBlog: () => mockData.blogPosts,
    
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
