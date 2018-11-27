import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/layout'

const Contact = ({ location }) => (
  <Layout location={location}>
    <Helmet title="Dana Bennett - Contact" />
    <div>
      <h2> Contact </h2>
      <div>
        <p>
          The best way to contact me is via email. Send all correspondence to
          danabennett10@gmail.com.
        </p>
      </div>
    </div>
  </Layout>
)

export default Contact
