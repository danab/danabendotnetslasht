import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
export default function Template({ data, location }) {
  const { markdownRemark: post } = data
  return (
    <Layout location={location}>
      <Helmet title={`Dana Bennett - ${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Layout>
  )
}
