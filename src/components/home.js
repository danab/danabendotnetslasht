import React from 'react'

const Home = () => (
  <div>
    <h2> Hello! I'm Dana! </h2>
    <div>
      <p>
        I am a full stack web developer creating high quality web and mobile
        applications. I build dynamic experiences while focusing on user
        experience, performance, and reliability. I love to use programming to
        explore data and answer interesting questions.
      </p>
      <p>
        I currently work as a full stack developer for the Atlanta Braves
        Research and Development Department. I work with a small team creating
        and maintaining web apps used by the front office and field staff.
      </p>
      <p>
        I was born and have lived most of my life in Maine. I currently live in
        Portland with my lovely girlfriend. We both like to spend time outdoors,
        which often includes hiking, mountain biking, snowboarding, and ultimate
        frisbee.
      </p>
      <p>
        Previously I've worked at <a href="https://chess.com">Chess.com</a> and{' '}
        <a href="https://reconnect.io">Reconnect.io</a>
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
            <li>D3</li>
            <li>React Native</li>
            <li>Node/Express</li>
            <li>ES6/ES2017/ES2018</li>
          </ul>
        </li>
        <li>
          Python
          <ul>
            <li>FastAPI</li>
            <li>Flask</li>
            <li>SQLAlchemy</li>
          </ul>
        </li>
        <li>
          PHP
          <ul>
            <li>CodeIgniter</li>
            <li>Symfony</li>
          </ul>
        </li>
        <li>MySQL/SQLServer</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>AWS: Lambda, S3, Cloudformation, ECS, ECR</li>
      </ul>
    </div>
  </div>
)

export default Home
