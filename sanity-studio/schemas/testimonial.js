// Testimonial Schema
export default {
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: () => '⭐',
  fields: [
    {
      name: 'names',
      title: 'Client Names',
      type: 'string',
      description: 'Nama pasangan',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      initialValue: 'Bride & Groom'
    },
    {
      name: 'avatar',
      title: 'Avatar Image',
      type: 'image',
      description: 'Foto profile kecil',
      options: {
        hotspot: true
      }
    },
    {
      name: 'image',
      title: 'Background Image',
      type: 'image',
      description: 'Gambar background testimonial',
      options: {
        hotspot: true
      }
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'Rating 1-5',
      options: {
        list: [1, 2, 3, 4, 5]
      },
      initialValue: 5
    },
    {
      name: 'text',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Wedding Location/Type',
      type: 'string',
      description: 'Contoh: Paris Wedding, Bali Beach Wedding'
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
      media: 'avatar'
    }
  }
}
