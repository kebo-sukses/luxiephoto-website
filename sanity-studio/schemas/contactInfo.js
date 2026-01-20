// Contact Info Schema
export default {
  name: 'contactInfo',
  title: 'Contact Info',
  type: 'document',
  icon: () => '📞',
  fields: [
    {
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
      initialValue: 'Get in Touch'
    },
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: "Let's Create Something Beautiful"
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 2
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'whatsapp',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'Format: 6281234567890 (tanpa +)'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'email'
    },
    {
      name: 'mapEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'URL embed dari Google Maps'
    },
    {
      name: 'workingHours',
      title: 'Working Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'days',
              title: 'Days',
              type: 'string'
            },
            {
              name: 'hours',
              title: 'Hours',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'days',
              subtitle: 'hours'
            }
          }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
