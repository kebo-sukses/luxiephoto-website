import React, { createContext, useContext, useState, useEffect } from 'react';

// Default data (fallback)
import * as mockData from '@/data/mock';

// Import content from JSON files
import heroContent from '../../content/hero/hero.json';
import aboutContent from '../../content/about/about.json';
import contactContent from '../../content/contact/contact.json';
import settingsContent from '../../content/settings/general.json';
import socialContent from '../../content/settings/social.json';

// Import collection data
import servicesData from '../../content/services/_data.json';
import portfolioData from '../../content/portfolio/_data.json';
import testimonialsData from '../../content/testimonials/_data.json';
import pricingData from '../../content/pricing/_data.json';
import partnersData from '../../content/partners/_data.json';
import blogData from '../../content/blog/_data.json';

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
      social: socialContent,
      services: servicesData,
      portfolio: portfolioData,
      testimonials: testimonialsData,
      pricing: pricingData,
      partners: partnersData,
      blog: blogData
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
    
    // Services - sorted by order
    getServices: () => {
      const services = content?.services || mockData.services;
      return [...services].sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    
    // Portfolio - with optional filter for featured
    getPortfolio: (featuredOnly = false) => {
      const portfolio = content?.portfolio || mockData.portfolioItems;
      if (featuredOnly) {
        return portfolio.filter(item => item.featured);
      }
      return portfolio;
    },
    
    // Testimonials
    getTestimonials: () => content?.testimonials || mockData.testimonials,
    
    // Partners - sorted by order
    getPartners: () => {
      const partners = content?.partners || mockData.partners;
      return [...partners].sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    
    // Pricing - sorted by order
    getPricing: () => {
      const pricing = content?.pricing || mockData.pricingPlans;
      return [...pricing].sort((a, b) => (a.order || 0) - (b.order || 0));
    },
    
    // Blog - sorted by date (newest first), with optional filter for featured
    getBlog: (featuredOnly = false) => {
      const blog = content?.blog || mockData.blogPosts;
      let posts = [...blog].sort((a, b) => new Date(b.date) - new Date(a.date));
      if (featuredOnly) {
        posts = posts.filter(post => post.featured);
      }
      return posts;
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
