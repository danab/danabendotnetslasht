import React from 'react'

import Layout from '../components/layout'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <div>
      <h2> Hi! I'm Dana! </h2>
      <div>
        <p>
          I'm the lead and sole developer at Call2Test, a provider of web and
          mobile applications for drug courts. As the only developer, I must be
          comfortable with the entire web development stack. I have learned to
          work with our clients to determine how to add the right features to
          our software and to give reasonable estimates of the time necessary to
          create such features.
        </p>
        <p>
          I was born and have lived most of my life in Maine, but currently
          reside in Brookline, Massachusetts with my lovely girlfriend. We both
          like to spend time outdoors, which often includes hiking, mountain
          biking, snowboarding, and ultimate frisbee.
        </p>
        <p>
          I'm a full stack web developer creating quality web and mobile
          applications. I create dynamic experiences while focusing on user
          experience, performance, and reliability.
        </p>
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
              <li>ES6</li>
            </ul>
          </li>
          <li>
            PHP
            <ul>
              <li>CodeIgniter</li>
            </ul>
          </li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
