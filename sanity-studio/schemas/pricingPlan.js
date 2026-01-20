// Pricing Plan Schema
export default {
  name: 'pricingPlan',
  title: 'Pricing Plans',
  type: 'document',
  icon: () => '💰',
  fields: [
    {
      name: 'name',
      title: 'Plan Name',
      type: 'string',
      description: 'Contoh: Essential, Premium, Luxury',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Harga dalam angka (tanpa format)',
      validation: Rule => Rule.required()
    },
    {
      name: 'currency',
      title: 'Currency',
      type: 'string',
      options: {
        list: [
          { title: 'Rp (Indonesian Rupiah)', value: 'Rp' },
          { title: '$ (US Dollar)', value: '$' },
          { title: '€ (Euro)', value: '€' },
          { title: 'S$ (Singapore Dollar)', value: 'S$' }
        ]
      },
      initialValue: 'Rp'
    },
    {
      name: 'period',
      title: 'Price Period',
      type: 'string',
      description: 'Contoh: /event, /paket, /hari',
      initialValue: '/event'
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 2
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Fitur-fitur yang termasuk'
    },
    {
      name: 'isPopular',
      title: 'Popular Badge',
      type: 'boolean',
      description: 'Tampilkan badge "Most Popular"',
      initialValue: false
    },
    {
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Choose Plan'
    },
    {
      name: 'ctaLink',
      title: 'Button Link',
      type: 'string',
      description: 'Link ke WhatsApp atau form booking',
      initialValue: '#contact'
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
      price: 'price',
      currency: 'currency'
    },
    prepare({ title, price, currency }) {
      return {
        title,
        subtitle: `${currency} ${price?.toLocaleString()}`
      }
    }
  }
}
