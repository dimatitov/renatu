import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BookSearchName = ({ bookName, bookId }) => {
  const location = {
    pathname: `/book/${bookId}`,
    bookId: bookId,
  }
  return (
    <Link to={location} className="link-to-book">
      <h4 className="link-to-book__title">{bookName}</h4>
    </Link>
  )
}

BookSearchName.propTypes = {
  bookName: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
}

export default BookSearchName
