export const load = ({ params}) => {
  console.log(params)
  return {
    sections: [
      {
        slug: 'menu-1',
        title: 'Menu 1',
        links: [
          {
            slug: 'hello-world',
            title: 'Hello world'
          },
          {
            slug: 'hello-world-2',
            title: 'Hello world 2'
          }
        ]
      },
      {
        slug: 'menu-2',
        title: 'Menu 2',
        links: [
          {
            slug: 'hello-world-3',
            title: 'Hello world 3'
          },
          {
            slug: 'hello-world-4',
            title: 'Hello world 4'
          }
        ]
      }
    ]
  }
}