import React from 'react'
import Layout from '../../components/layout'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <h2> Hi! I'm Dana! </h2>
      <div>
        <p>
          I am a full stack web developer creating quality web and mobile
          applications. I create dynamic experiences while focusing on user
          experience, performance, and reliability.
        </p>
        <p>
          I was previously the lead developer at{' '}
          <a href="https://call2test.com">Call2test</a>, a provider of web and
          mobile applications for drug courts. Working as the sole developer I
          managed the front-end, back-end, deployment, and hosting. I learned to
          work with our clients and sales team to determine how to add the right
          features to our software and to give reasonable estimates of the time
          necessary to create such features.
        </p>
        <p>
          I was born and have lived most of my life in Maine, but currently
          reside in Brookline, Massachusetts with my lovely girlfriend. We both
          like to spend time outdoors, which often includes hiking, mountain
          biking, snowboarding, and ultimate frisbee.
        </p>
      </div>
      <h3>Code</h3>
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
      <h3>Skills</h3>
      <div>
        <ul>
          <li>
            Javascript
            <ul>
              <li>React/Redux</li>
              <li>React Native</li>
              <li>Node/Express</li>
              <li>D3</li>
              <li>ES6/ES2017/ES2018</li>
            </ul>
          </li>
          <li>
            PHP
            <ul>
              <li>CodeIgniter</li>
            </ul>
          </li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>AWS</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
