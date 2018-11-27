import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../../components/layout'
import PageWithCards from '../../../components/PageWithCards'

import formatQueryData from '../../../utils/formatQueryData'

const blurb =
  "Code is a way of expressing myself. Some of my favorite coding projects involve making small games, creative coding using math or simple physics, and data visualization with D3. Please have a look at some of the things I've been working on."

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "creative" } } }
      sort: { order: ASC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            img
            blurb
            tags
          }
        }
      }
    }
  }
`

const CreativeCoding = ({ location, data }) => {
  const projectInfo = formatQueryData(data)
  return (
    <Layout location={location}>
      <PageWithCards title="Creative Coding" blurb={blurb} info={projectInfo} />
    </Layout>
  )
}

export default CreativeCoding
