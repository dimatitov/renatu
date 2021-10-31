import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const BookSearchAuthorName = ({ authorsBook }) => {
  return (
    <div className="authors-name-container">
      <h4 className="authors-name-container__title">Автор:</h4>
      <div className="authors-name-container__names">
        {authorsBook.map((author, i) => (
          <p key={Date.now() + i}>{`${author}, `}</p>
        ))}
      </div>
    </div>
  )
}

BookSearchAuthorName.propTypes = {
  authorsBook: PropTypes.array.isRequired,
}

export default BookSearchAuthorName
