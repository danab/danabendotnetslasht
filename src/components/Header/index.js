import React, { Fragment } from 'react'
import Link from 'gatsby-link'

const Header = ({ pathName, ...rest }) => {
  // This works because routing is super simple, but could be flimsy in the future...
  const page =
    pathName === '/'
      ? 'about'
      : pathName === '/contact' ? 'contact' : 'projects'
  return (
    <Fragment>
      <h1 className={`logo ${page}`}>DB</h1>
      <nav>
        <ul>
          <li className="menu-item">
            <Link exact activeClassName="active" to="/">
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link activeClassName="active" to="/projects">
              Projects
            </Link>
          </li>
          <li className="menu-item">
            <Link activeClassName="active" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Header
