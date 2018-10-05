import React, { Fragment } from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

const pageQuery = graphql`
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

export default () => (
  <StaticQuery
    query={pageQuery}
    render={data => {
      const { markdownRemark: post } = data // data.markdownRemark holds our post data
      return (
        <Fragment>
          <Helmet title={`Dana Bennett - ${post.frontmatter.title}`} />
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </Fragment>
      )
    }}
  />
)
