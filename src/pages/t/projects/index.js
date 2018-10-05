import React from 'react'

import Layout from '../../../components/layout'
import PageWithCards from '../../../components/PageWithCards'

const projectInfo = [
  {
    path: '/t/projects/call2test',
    blurb: 'Randomization Software for Drug Courts',
    title: 'Call2Test',
    img: '/screenshots/call2test-screen.png',
  },
  {
    path: '/t/projects/connectcomply',
    blurb:
      'Android and iOS app for clients checking in to their drug courts Call2test systems.',
    title: 'ConnectComply',
    img: '/screenshots/connectcomply-screen-1.png',
  },
  {
    path: '/t/projects/dropclicks',
    blurb: "A game made with React. It's fun and mobile friendly.",
    title: 'DropClicks',
    img: '/screenshots/dropclicks-screen.png',
  },
  {
    path: '/t/projects/creative-coding',
    blurb: "Stuff that's fun",
    title: 'Creative Coding',
    img: '/screenshots/bouncing-balls-screen.png',
  },
  {
    path: '/t/projects/aces-up',
    blurb:
      'A game made with React. Grandmother approved! Simple yet lots of replay value.',
    title: 'Aces Up',
    img: '/screenshots/acesup-screen.png',
  },
]

const blurb = ''
const Projects = ({ location }) => (
  <Layout location={location}>
    <PageWithCards title="Projects" blurb={blurb} info={projectInfo} />
  </Layout>
)

export default Projects
