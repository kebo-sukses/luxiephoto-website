// Footer Settings Schema
export default {
  name: 'footerSettings',
  title: 'Footer Settings',
  type: 'document',
  icon: () => '📝',
  fields: [
    {
      name: 'description',
      title: 'Footer Description',
      type: 'text',
      rows: 3,
      description: 'Deskripsi singkat di footer'
    },
    {
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'url',
              title: 'URL',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url'
            }
          }
        }
      ]
    },
    {
      name: 'galleryImages',
      title: 'Instagram Gallery',
      type: 'array',
      description: 'Gambar-gambar untuk grid Instagram di footer',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'newsletterTitle',
      title: 'Newsletter Title',
      type: 'string',
      initialValue: 'Subscribe to Our Newsletter'
    },
    {
      name: 'newsletterDescription',
      title: 'Newsletter Description',
      type: 'text',
      rows: 2
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2026 Luxie Photography. All rights reserved.'
    }
  ],
  preview: {
    select: {
      title: 'copyright'
    }
  }
}
