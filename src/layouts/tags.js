import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'

import formatQueryData from '../utils/formatQueryData'
import PageWithCards from '../components/PageWithCards'

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const projectInfo = formatQueryData(data)
  return (
    <Layout location={location}>
      <Helmet title={`Dana Bennett - Tag: #${tag}`} />
      <PageWithCards
        title={`Tag: #${tag} (${totalCount})`}
        info={projectInfo}
      />
    </Layout>
  )
}

Tags.propTypes = {
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { stub: { ne: true }, tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            img
            blurb
            tags
          }
        }
      }
    }
  }
`
