// Service Schema
export default {
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: () => '🛠️',
  fields: [
    {
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Nama icon dari Lucide (Camera, Video, Brush, Heart, etc)',
      options: {
        list: [
          { title: '📷 Camera', value: 'Camera' },
          { title: '🎬 Video', value: 'Video' },
          { title: '🖌️ Brush', value: 'Brush' },
          { title: '❤️ Heart', value: 'Heart' },
          { title: '⭐ Star', value: 'Star' },
          { title: '🎯 Target', value: 'Target' },
          { title: '💎 Gem', value: 'Gem' },
          { title: '🎨 Palette', value: 'Palette' },
          { title: '📍 MapPin', value: 'MapPin' },
          { title: '🎁 Gift', value: 'Gift' }
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List fitur layanan'
    },
    {
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Urutan tampilan (1, 2, 3, dst)'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image'
    }
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}
