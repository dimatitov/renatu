import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

const BookSearchPublishing = ({ bookPublishing }) => {
  return (
    <p className="book-publishing">
      Издательство: <span>{bookPublishing}</span>
    </p>
  )
}

BookSearchPublishing.propTypes = {
  bookPublishing: PropTypes.string.isRequired,
}

export default BookSearchPublishing
