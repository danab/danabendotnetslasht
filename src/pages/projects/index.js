import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import PageWithCards from '../../components/PageWithCards'

const projectInfo = [
  {
    path: '/projects/call2test',
    blurb: 'Randomization Software for Drug Courts',
    title: 'Call2Test',
    img: '/static/screenshots/call2test-screen.png',
  },
  {
    path: '/projects/connectcomply',
    blurb:
      'Android and iOS app for clients checking in to their drug courts Call2test systems.',
    title: 'ConnectComply',
    img: '/static/screenshots/connectcomply-screen-1.png',
  },
  {
    path: '/projects/dropclicks',
    blurb: "A game made with React. It's fun and mobile friendly.",
    title: 'DropClicks',
    img: '/static/screenshots/dropclicks-screen.png',
  },
  {
    path: '/projects/creative-coding',
    blurb: "Stuff that's fun",
    title: 'Creative Coding',
    img: '/static/screenshots/bouncing-balls-screen.png',
  },
  {
    path: '/projects/aces-up',
    blurb:
      'A game made with React. Grandmother approved! Simple yet lots of replay value.',
    title: 'Aces Up',
    img: '/static/screenshots/acesup-screen.png',
  },
]

const blurb = ''
const Projects = () => (
  <PageWithCards title="Projects" blurb={blurb} info={projectInfo} />
)

export default Projects
