import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { Link } from 'react-router-dom'

const NavBetweenPages = ({ navTitle, linkAddress, linkTitle, title }) => {
  return (
    <Fragment>
      {navTitle ? (
        <div className="first-nav-top-container">
          <Link to={linkAddress} className="first-nav-top__title">
            {linkTitle}
          </Link>
          <h2 className="first-nav-top__link">{title}</h2>
        </div>
      ) : (
        <div className="profile-top-container">
          <h2 className="profile-top__title">{linkTitle}</h2>
          <Link to={linkAddress} className="profile-top__contact">
            {title}
          </Link>
        </div>
      )}
    </Fragment>
  )
}

NavBetweenPages.propTypes = {
  navTitle: PropTypes.bool.isRequired,
  linkAddress: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default NavBetweenPages
