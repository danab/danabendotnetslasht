import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

// HT: https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-link
const SmartLink = ({ children, to, ...rest }) => {
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  if (internal) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    )
  }
  return (
    <a href={to} {...rest}>
      {children}
    </a>
  )
}
const ProjectCard = ({ path, title, blurb, img, idx }) => (
  <div className={idx % 2 ? 'project-card odd' : 'project-card even'}>
    <div className="project-card-text">
      <h3>
        <SmartLink to={path}>{title}</SmartLink>
      </h3>
      <p>{blurb}</p>
    </div>
    <SmartLink className="project-card-image" to={path}>
      <img width="200" src={img} alt={`${title} logo`} />
    </SmartLink>
  </div>
)

const Projects = ({ title, blurb, info }) => (
  <Fragment>
    <Helmet title={`Dana Bennett - ${title}`} />
    <div>
      <h2> {title} </h2>
      <div>
        <p style={{ marginBottom: '40px' }}>{blurb}</p>

        {info.map((info, i) => (
          <ProjectCard key={i} {...info} idx={i} />
        ))}
      </div>
    </div>
  </Fragment>
)

export default Projects
