// Schema index - Export all schemas
import siteSettings from './siteSettings'
import heroSection from './heroSection'
import aboutSection from './aboutSection'
import service from './service'
import portfolioItem from './portfolioItem'
import testimonial from './testimonial'
import partner from './partner'
import pricingPlan from './pricingPlan'
import blogPost from './blogPost'
import author from './author'
import contactInfo from './contactInfo'
import footerSettings from './footerSettings'

export const schemaTypes = [
  // Settings
  siteSettings,
  
  // Sections
  heroSection,
  aboutSection,
  contactInfo,
  footerSettings,
  
  // Content Types
  service,
  portfolioItem,
  testimonial,
  partner,
  pricingPlan,
  blogPost,
  author,
]
