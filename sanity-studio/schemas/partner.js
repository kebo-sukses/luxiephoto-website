// Partner Schema
export default {
  name: 'partner',
  title: 'Partners',
  type: 'document',
  icon: () => '🤝',
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'website',
      title: 'Website URL',
      type: 'url'
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number'
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo'
    }
  }
}
