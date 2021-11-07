export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61877eabef9427abe2fa471a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kf85sznc',
                  apiId: '723f5f6a-46ab-4e23-962e-1fb9ec532d27'
                },
                {
                  buildHookId: '61877eac311dd39a5e3ae022',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-o45aogcd',
                  apiId: '4309bb42-afe5-4a86-a8f5-fc614ef91e35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bjerkehub/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-o45aogcd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
