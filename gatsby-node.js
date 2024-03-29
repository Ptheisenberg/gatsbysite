const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const { data } = await graphql(`query{
        posts:allContentfulPost {
          edges {
            node {
              slug
            }
          }
        }
      }`);
      data.posts.edges.forEach(({ node }) => {
        createPage({
            path:`blog/${node.slug}`,
            component:path.resolve('./src/templates/PostTemplate.js'),
            context:{
                slug:node.slug
            }
        })
      })
}