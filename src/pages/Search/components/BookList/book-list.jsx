import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

import BookItem from '@/pages/Search/components/BookItem/book-item'

const BookList = ({ bookList, deleteBook, edit, handleDeleteBook, dispatch }) => {
  return (
    <>
      {bookList.map((book, index) => {
        return (
          <BookItem
            key={book._id}
            bookDescription={book.description}
            bookName={book.nameDoc}
            bookPublishing={book.placeOfPublish}
            bookRank={book.rank}
            authorsBook={book.authors}
            tags={book.tags}
            bookCover={book.avatar}
            id={book._id}
            count={index + 1}
            status={book.status}
            deleteBook={deleteBook}
            edit={edit}
            bookDeleteClick={handleDeleteBook}
            dispatch={dispatch}
          />
        )
      })}
    </>
  )
}

BookList.propTypes = {
  bookList: PropTypes.array.isRequired,
  handleDeleteBook: PropTypes.func.isRequired,
  dispatch: PropTypes.func,
}

export default BookList
