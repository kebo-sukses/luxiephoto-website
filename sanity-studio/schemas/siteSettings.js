// Site Settings Schema
export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: () => '⚙️',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Nama website Anda',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Logo utama website',
      options: {
        hotspot: true
      }
    },
    {
      name: 'logoDark',
      title: 'Logo (Dark Version)',
      type: 'image',
      description: 'Logo versi gelap untuk background terang',
      options: {
        hotspot: true
      }
    },
    {
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
      description: 'Icon yang muncul di tab browser'
    },
    {
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      description: 'Warna utama (hex code, contoh: #ec4899)',
      initialValue: '#ec4899'
    },
    {
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
      description: 'Warna sekunder (hex code)',
      initialValue: '#d4af37'
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Warna background utama',
      initialValue: '#0a0a0a'
    },
    {
      name: 'fontHeading',
      title: 'Font Heading',
      type: 'string',
      description: 'Font untuk judul',
      options: {
        list: [
          { title: 'Playfair Display', value: 'Playfair Display' },
          { title: 'Cormorant Garamond', value: 'Cormorant Garamond' },
          { title: 'Libre Baskerville', value: 'Libre Baskerville' },
          { title: 'Lora', value: 'Lora' },
          { title: 'Merriweather', value: 'Merriweather' },
          { title: 'Crimson Text', value: 'Crimson Text' }
        ]
      },
      initialValue: 'Playfair Display'
    },
    {
      name: 'fontBody',
      title: 'Font Body',
      type: 'string',
      description: 'Font untuk text body',
      options: {
        list: [
          { title: 'Poppins', value: 'Poppins' },
          { title: 'Inter', value: 'Inter' },
          { title: 'Roboto', value: 'Roboto' },
          { title: 'Open Sans', value: 'Open Sans' },
          { title: 'Lato', value: 'Lato' },
          { title: 'Montserrat', value: 'Montserrat' }
        ]
      },
      initialValue: 'Poppins'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter/X', value: 'twitter' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'WhatsApp', value: 'whatsapp' },
                  { title: 'LinkedIn', value: 'linkedin' }
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url'
            }
          }
        }
      ]
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Title untuk SEO (muncul di Google)'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      description: 'Deskripsi untuk SEO',
      rows: 3
    },
    {
      name: 'seoKeywords',
      title: 'SEO Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'siteName',
      media: 'logo'
    }
  }
}
