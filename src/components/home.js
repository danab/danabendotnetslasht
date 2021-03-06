import React from 'react'

const Home = () => (
  <div>
    <h2> Hello! I'm Dana! </h2>
    <div>
      <p>
        I am a full stack web developer creating quality web and mobile
        applications. I create dynamic experiences while focusing on user
        experience, performance, and reliability.
      </p>
      <p>
        I currently work as a front end web developer at{' '}
        <a href="https://chess.com">Chess.com</a>. I build new features, fix
        bugs, and work as part of the front end tooling team.
      </p>
      <p>
        I was born and have lived most of my life in Maine, but currently reside
        in Brookline, Massachusetts with my lovely girlfriend. We both like to
        spend time outdoors, which often includes hiking, mountain biking,
        snowboarding, and ultimate frisbee.
      </p>
    </div>
    <h3>Code</h3>
    <div>
      <ul>
        <li style={{ marginLeft: '1em' }}>
          <a href="https://github.com/danab">GitHub</a> - My day to day work is
          in private repositories, but there are a few interesting public things
          to see here.
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
            <li>React/Redux, Vue/Vuex</li>
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
            <li>Symfony</li>
          </ul>
        </li>
        <li>MySQL</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>AWS</li>
      </ul>
    </div>
  </div>
)

export default Home
