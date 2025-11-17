import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'About',
  type: 'document',
  title: 'About Us information',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'image1',
      type: 'image',
      title: 'Image 1',
    }),
    defineField({
      name: 'image2',
      type: 'image',
      title: 'Image 2',
    }),
    defineField({
      name: 'image3',
      type: 'image',
      title: 'Image 3',
    }),
    defineField({
      name: 'mission',
      type: 'text',
      title: 'Mission',
    }),
    defineField({
      name: 'vision',
      type: 'text',
      title: 'Vision',
    }),
    defineField({
      name: 'image4',
      type: 'image',
      title: 'Image 4',
    }),
  ],
})
