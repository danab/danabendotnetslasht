import React, { Fragment } from 'react'
import Link from 'gatsby-link'

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent && { className: 'active' }

const Header = ({ pathName }) => {
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
            <Link to="/t/" activeClassName="active">
              About
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/t/projects/" getProps={isPartiallyActive}>
              Projects
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/t/contact/" activeClassName="active">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
}

export default Header
