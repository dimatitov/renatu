import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss'

const NotFound = () => {
  return (
    <section className="found-page">
      <div className="found-page__not-found">404 Not Found</div>
      <Link to={'/login'} className="found-page__to-back">
        Go to the login page
      </Link>
    </section>
  )
}

export default NotFound
