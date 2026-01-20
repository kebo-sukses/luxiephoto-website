// About Section Schema
export default {
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  icon: () => '👤',
  fields: [
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      initialValue: 'About Us'
    },
    {
      name: 'decorativeText',
      title: 'Decorative Text',
      type: 'string',
      description: 'Teks italic dekoratif',
      initialValue: 'Our Story'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: "We're Luxie, Passionate Wedding Storytellers"
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'text',
              rows: 2
            }
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description'
            }
          }
        }
      ]
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      description: 'Gambar-gambar untuk section about (4 gambar ideal)',
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
      ]
    },
    {
      name: 'signature',
      title: 'Signature Text',
      type: 'string',
      initialValue: 'Luxie Photo'
    },
    {
      name: 'experience',
      title: 'Experience Badge',
      type: 'string',
      initialValue: '15+ Years of Excellence'
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0'
    }
  }
}
