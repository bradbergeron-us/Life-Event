export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'Life-Event-studio',
                  apiId: '9af3f153-2931-4067-adfe-c6d8fbbe5338'
                },
                {
                  buildHookId: '5d929d95c3e0e4d3c9a8fc02',
                  title: 'Events Website',
                  name: 'Life-Event',
                  apiId: '1a891840-d7c3-4771-97dd-85c59b712527'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bradbergeron-us/Life-Event',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://Life-Event.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
