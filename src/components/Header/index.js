import React, { Fragment } from 'react'
import Link from 'gatsby-link'

const Header = ({ pathName, ...rest }) => {
  // This works because routing is super simple, but could be flimsy in the future...
  const page =
    pathName === '/t' || pathName === '/t/'
      ? 'about'
      : pathName === '/t/contact' || pathName === '/t/contact/'
        ? 'contact'
        : 'projects'
  return (
    <Fragment>
      <h1 className={`logo ${page}`}>DB</h1>
      <nav>
        <ul>
          <li className="menu-item">
            <Link exact activeClassName="active" to="/t">
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link activeClassName="active" to="/t/projects">
              Projects
            </Link>
          </li>
          <li className="menu-item">
            <Link activeClassName="active" to="/t/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Header
