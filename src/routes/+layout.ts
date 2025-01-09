export const load = ({ params}) => {
  console.log(params)
  return {
    sections: [
      {
        slug: 'section-1',
        title: 'Section 1',
        content: 'Content 1'
      },
      {
        slug: 'section-2',
        title: 'Section 2',
        content: 'Content 2'
      }
    ]
  }
}