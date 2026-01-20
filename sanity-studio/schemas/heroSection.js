// Hero Section Schema
export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  icon: () => '🎬',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Teks kecil di atas judul',
      initialValue: 'Luxury Wedding Photography'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Judul utama baris pertama',
      initialValue: 'Capturing Your'
    },
    {
      name: 'titleHighlight',
      title: 'Title Highlight',
      type: 'string',
      description: 'Bagian judul yang di-highlight (baris kedua)',
      initialValue: 'Timeless Moments'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Deskripsi singkat',
      rows: 3
    },
    {
      name: 'ctaPrimary',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'View Our Work'
    },
    {
      name: 'ctaPrimaryLink',
      title: 'Primary Button Link',
      type: 'string',
      initialValue: '#portfolio'
    },
    {
      name: 'ctaSecondary',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Get in Touch'
    },
    {
      name: 'ctaSecondaryLink',
      title: 'Secondary Button Link',
      type: 'string',
      initialValue: '#contact'
    },
    {
      name: 'backgroundImages',
      title: 'Background Images',
      type: 'array',
      description: 'Gambar slideshow background (minimal 3)',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ]
        }
      ],
      validation: Rule => Rule.min(1)
    },
    {
      name: 'showVideo',
      title: 'Show Video Button',
      type: 'boolean',
      initialValue: true
    },
    {
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'URL video YouTube/Vimeo'
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      description: 'Statistik yang ditampilkan',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'string',
              description: 'Contoh: 500+, 15+, 50+'
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'Contoh: Weddings Captured'
            }
          ],
          preview: {
            select: {
              title: 'number',
              subtitle: 'label'
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'titleHighlight',
      media: 'backgroundImages.0'
    }
  }
}
