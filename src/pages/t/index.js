import React from 'react'

import Home from '../../components/home'
import Layout from '../../components/layout'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Home />
  </Layout>
)

export default IndexPage
