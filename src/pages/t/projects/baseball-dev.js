import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../../components/layout'
import PageWithCards from '../../../components/PageWithCards'

import formatQueryData from '../../../utils/formatQueryData'

const blurb = `Baseball has always been my favorite sport. Although I would still love baseball without the data and analytics, it's undeniable that analytics provides a new way for people like me to think about the game. Baseball has a treasure trove of readily available data, which is great fun to play with. Most of my projects are whimsical rather than analytical, and very few make it off my own computer (they are for my own benefit only). Here are a few projects that made it to the outside world.`

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "baseball" } } }
      sort: { order: ASC, fields: [frontmatter___date] }
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

const CreativeCoding = ({ location, data }) => {
  const projectInfo = formatQueryData(data)
  return (
    <Layout location={location}>
      <PageWithCards title="Baseball Dev" blurb={blurb} info={projectInfo} />
    </Layout>
  )
}

export default CreativeCoding
