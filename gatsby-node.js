const path = require('path')
const { kebabCase } = require('lodash')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/layouts/project-post.js`)
  const tagTemplate = path.resolve(`src/layouts/tags.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { stub: { ne: true } } }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    let tags = []

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })

      tags = tags.concat(node.frontmatter.tags)
    })

    tags = [...new Set(tags)]

    // Make tag pages
    tags.forEach(tag => {
      createPage({
        path: `/t/projects/tags/${kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      })
    })
  })
}
