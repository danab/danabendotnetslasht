import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import PageWithCards from '../../../components/PageWithCards'

const projectInfo = [
  {
    path: '/t/projects/chaos-game',
    blurb:
      'From a Numberphile video. A simple algorithm provides surprising fractal results.',
    title: 'Chaos Game',
    img: '/screenshots/chaos-game-screen-1.png',
  },
  {
    path: 'https://codepen.io/danab/full/vdjrBM/',
    blurb:
      'Just a bunch of balls bouncing around, with trails, and sketchy homemade physics.',
    title: 'Bouncing Balls',
    img: '/screenshots/bouncing-balls-screen.png',
  },
  {
    path: '/t/projects/mandelbrot',
    blurb:
      'Somehow I made it through my Math degree without understanding the Mandelbrot Set. I decided to change that.',
    title: 'Mandelbrot Set',
    img: '/screenshots/mandelbrot-screen.png',
  },
]

const blurb =
  "Code is a way of expressing myself. Some of my favorite coding projects involve making small games, creative coding using math or simple physics, and data visualization with D3. Please have a look at some of the things I've been working on."

const CreativeCoding = () => (
  <PageWithCards title="Creative Coding" blurb={blurb} info={projectInfo} />
)

export default CreativeCoding
