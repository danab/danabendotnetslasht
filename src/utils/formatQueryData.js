const formatQueryData = ({ allMarkdownRemark: { edges } }) => {
  return edges.map(edge => {
    return edge.node.frontmatter
  })
}

export default formatQueryData
