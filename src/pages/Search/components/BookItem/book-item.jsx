import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import './styles.scss'
import NotCoverBook from '@/assets/img/search/not-book.png'
import TagsList from '@/components/TagsList/tags-list'
import BookMenu from '@/pages/Search/components/BookMenu/book-menu'
import BookRankDisplay from '@/components/BookRankDisplay/book-rank-display'
import BookSearchAuthorName from '@/pages/Search/components/BookSearchAuthorName/book-search-author-name'
import BookSearchName from '@/pages/Search/components/BookSearchName/book-search-name'
import BookSearchPublishing from '@/pages/Search/components/BookSearchPublishing/book-search-publishing'
import { useSelector } from 'react-redux'
import { get } from 'lodash'

const BookItem = ({
  bookCover,
  bookDescription,
  authorsBook,
  bookName,
  bookPublishing,
  bookRank,
  tags,
  id,
  status,
  edit,
  deleteBook,
  bookDeleteClick,
  count,
}) => {
  const page = useSelector((store) => get(store, ['catalogBooks', 'page'], 1))
  const itemNumber = (page - 1) * 3 + count

  const coverBook = bookCover.trim()
  const history = useHistory()
  const changeBook = () => {
    history.push(`/book-management?isEdit=true&bookId=${id}`)
  }
  return (
    <div className="book">
      <div className="book-cover-container">
        <img
          src={
            coverBook
              ? `http://188.68.219.162/user-panel/book/get-avatar?avatar=${coverBook}`
              : NotCoverBook
          }
          alt="Обложка книги"
          className="book-cover-container__cover"
        />
        <span className="book-cover-container__count-book">
          {page === 1 ? count : itemNumber}
        </span>
      </div>
      <div className="book-info">
        <div className="info-top">
          <div className="info-name">
            <BookSearchName bookName={bookName} bookId={id} />
            <BookSearchAuthorName authorsBook={authorsBook} />
            <BookSearchPublishing bookPublishing={bookPublishing} />
          </div>
          <BookRankDisplay bookRank={bookRank} />
        </div>
        <div className="info-description">{bookDescription}</div>
        <div className="info-bottom">
          <TagsList tags={tags} className={'tags'} />
          <BookMenu
            availabilityDelete={!deleteBook}
            availabilityEdit={!edit}
            status={status}
            handleClickDeletingBook={bookDeleteClick}
            editBookChange={changeBook}
          />
        </div>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  bookCover: PropTypes.string,
  bookName: PropTypes.string.isRequired,
  bookPublishing: PropTypes.string.isRequired,
  authorsBook: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  bookRank: PropTypes.number.isRequired,
  bookDescription: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  bookDeleteClick: PropTypes.func.isRequired,
}

export default BookItem
