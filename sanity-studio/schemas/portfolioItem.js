// Portfolio Item Schema
export default {
  name: 'portfolioItem',
  title: 'Portfolio',
  type: 'document',
  icon: () => '📸',
  fields: [
    {
      name: 'names',
      title: 'Client Names',
      type: 'string',
      description: 'Nama pasangan (contoh: Arthur & Linda)',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Main Image',
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
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      description: 'Tambahkan gambar-gambar untuk gallery',
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
            },
            {
              name: 'caption',
              title: 'Caption',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Classic Wedding', value: 'Classic Wedding' },
          { title: 'Beach Wedding', value: 'Beach Wedding' },
          { title: 'Garden Wedding', value: 'Garden Wedding' },
          { title: 'Rustic Wedding', value: 'Rustic Wedding' },
          { title: 'Luxury Wedding', value: 'Luxury Wedding' },
          { title: 'Traditional Wedding', value: 'Traditional Wedding' },
          { title: 'Mountain Wedding', value: 'Mountain Wedding' },
          { title: 'Castle Wedding', value: 'Castle Wedding' },
          { title: 'Pre-Wedding', value: 'Pre-Wedding' },
          { title: 'Engagement', value: 'Engagement' }
        ]
      }
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Lokasi wedding (contoh: Bali, Indonesia)'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'date',
      title: 'Wedding Date',
      type: 'date'
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Tampilkan di halaman utama',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'names',
      subtitle: 'location',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    },
    {
      title: 'Date, Newest',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }]
    }
  ]
}
