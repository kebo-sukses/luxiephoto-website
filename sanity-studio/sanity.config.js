import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'luxiephoto-studio',
  title: 'Luxie Photography CMS',

  projectId: 'ejbq5x0u',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            // Site Settings
            S.listItem()
              .title('⚙️ Site Settings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            
            S.divider(),
            
            // Homepage Sections
            S.listItem()
              .title('🏠 Homepage Sections')
              .child(
                S.list()
                  .title('Homepage Sections')
                  .items([
                    S.listItem()
                      .title('🎬 Hero Section')
                      .child(
                        S.document()
                          .schemaType('heroSection')
                          .documentId('heroSection')
                      ),
                    S.listItem()
                      .title('👤 About Section')
                      .child(
                        S.document()
                          .schemaType('aboutSection')
                          .documentId('aboutSection')
                      ),
                    S.listItem()
                      .title('📞 Contact Info')
                      .child(
                        S.document()
                          .schemaType('contactInfo')
                          .documentId('contactInfo')
                      ),
                    S.listItem()
                      .title('📝 Footer Settings')
                      .child(
                        S.document()
                          .schemaType('footerSettings')
                          .documentId('footerSettings')
                      ),
                  ])
              ),
            
            S.divider(),
            
            // Content Types
            S.listItem()
              .title('🛠️ Services')
              .schemaType('service')
              .child(S.documentTypeList('service').title('Services')),
            
            S.listItem()
              .title('📸 Portfolio')
              .schemaType('portfolioItem')
              .child(S.documentTypeList('portfolioItem').title('Portfolio Items')),
            
            S.listItem()
              .title('⭐ Testimonials')
              .schemaType('testimonial')
              .child(S.documentTypeList('testimonial').title('Testimonials')),
            
            S.listItem()
              .title('🤝 Partners')
              .schemaType('partner')
              .child(S.documentTypeList('partner').title('Partners')),
            
            S.listItem()
              .title('💰 Pricing Plans')
              .schemaType('pricingPlan')
              .child(S.documentTypeList('pricingPlan').title('Pricing Plans')),
            
            S.listItem()
              .title('📰 Blog Posts')
              .schemaType('blogPost')
              .child(S.documentTypeList('blogPost').title('Blog Posts')),
            
            S.listItem()
              .title('✍️ Authors')
              .schemaType('author')
              .child(S.documentTypeList('author').title('Authors')),
          ])
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
