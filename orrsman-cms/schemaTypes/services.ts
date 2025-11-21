import {defineField, defineType} from 'sanity'

export const serviceType = defineType({
  name: 'service',
  type: 'document',
  title: 'Service',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      title: 'Service Image',
      name: 'serviceImage',
      type: 'image',
    }),
    defineField({
      title: 'Features',
      name: 'features',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Benefit Title'},
            {name: 'description', type: 'text', title: 'Description'},
          ],
        },
      ],
    }),
  ],
})
