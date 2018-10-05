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
      <h2>Code</h2>
      <div>
        <ul>
          <li style={{ marginLeft: '1em' }}>
            <a href="https://github.com/danab">GitHub</a> - My day to day work
            is in private repositories, but there are a few interesting public
            things to see here.
          </li>

          <li style={{ marginLeft: '1em' }}>
            <a href="https://codepen.io/danab">CodePen</a> - Occasionally quick
            projects wind up here.
          </li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default Contact
