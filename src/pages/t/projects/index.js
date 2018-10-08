import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../../components/layout'
import PageWithCards from '../../../components/PageWithCards'

import formatQueryData from '../../../utils/formatQueryData'

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { ne: "creative" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            img
            blurb
          }
        }
      }
    }
  }
`

const blurb = ''
const Projects = ({ location, data }) => {
  const projectInfo = formatQueryData(data)
  return (
    <Layout location={location}>
      <PageWithCards title="Projects" blurb={blurb} info={projectInfo} />
    </Layout>
  )
}

export default Projects
