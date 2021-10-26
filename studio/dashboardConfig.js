export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61786cf2174df31ede7e75ab',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ct8s4c52',
                  apiId: '07536df3-98bf-43d4-bc41-cb7f61df615a'
                },
                {
                  buildHookId: '61786cf37edc3d1d8d908e74',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sfho5fdb',
                  apiId: 'ff324b1c-679b-475c-95e1-9a9506ce181c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Marks-1/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sfho5fdb.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
