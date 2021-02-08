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
                  buildHookId: '602182e851def80099d26f54',
                  title: 'Sanity Studio',
                  name: 'landingpagegenerator-studio',
                  apiId: 'a209b062-ce86-4e5f-a8c2-8f39e90dc1cc'
                },
                {
                  buildHookId: '602182e993fe6901154805df',
                  title: 'Blog Website',
                  name: 'landingpagegenerator-web',
                  apiId: '10b6e333-bb0f-4089-9828-4edb45a1db98'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/priscillapi/LandingPageGenerator',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landingpagegenerator-web.netlify.app', category: 'apps'}
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
