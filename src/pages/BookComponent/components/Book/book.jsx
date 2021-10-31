import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { StatusBtn } from '@/components/StatusBtn/status-btn'
import { BookDescription } from '@/components/BookDescription/book-description'
import { NightBlueBtn } from '@/components/NightBlueBtn/night-blue-btn'
import { DeleteBtn } from '@/components/DeleteBtn/delete-btn'
import TagsList from '@/components/TagsList/tags-list'
import BookRankDisplay from '@/components/BookRankDisplay/book-rank-display'
import NoBook from '@/assets/img/book/no-book.png'
import SaveBookList from '@/pages/BookComponent/components/SaveBookList/save-book-list'
import BookInfoList from '@/pages/BookComponent/components/BookInfo/book-info-list'

const Book = ({
  bookAuthors,
  bookInfo = {},
  cover,
  editBook,
  deleteBook,
  editBookChange,
  isDeployAnnotation,
  isDeployContent,
  setIsDeployAnnotation,
  setIsDeployContent,
}) => {
  return (
    <section className="book-container">
      <div className="book-top">
        <div className="book-top__description">
          <h2 className="book-top__title">{bookInfo.nameDoc}</h2>
          <TagsList tags={bookInfo.tags} className={'book-top__tags'} />
        </div>
        <div className="book-top__status">
          <BookRankDisplay bookRank={bookInfo.rank} />
          <StatusBtn status={bookInfo.status} />
        </div>
      </div>
      <div className="book-content">
        <div className="book-saved">
          <img
            src={
              cover
                ? `http://188.68.219.162/user-panel/book/get-avatar?avatar=${cover}`
                : NoBook
            }
            alt="Cover"
            className="book-saved__cover"
          />
          <SaveBookList
            docPdf={bookInfo.docPDF}
            docDOC={bookInfo.docDOC}
            docEpub={bookInfo.docEPUB}
            docFb2={bookInfo.FB2}
          />
        </div>
        <div className="book-info-body">
          <BookInfoList
            areaDoc={bookInfo.areaOfTheDoc}
            author={bookAuthors}
            comment={bookInfo.comment}
            date={bookInfo.dateOfPublish}
            docType={bookInfo.typeDoc}
            DOI={bookInfo.DOI}
            ISBN={bookInfo.ISBN}
            publishing={bookInfo.placeOfPublish}
          />
          <div className="book-description">
            <BookDescription
              description={bookInfo.annotation}
              isDeploy={isDeployAnnotation}
              setState={setIsDeployAnnotation}
            >
              Аннотация
            </BookDescription>
            <BookDescription
              description={bookInfo.content}
              isDeploy={isDeployContent}
              setState={setIsDeployContent}
            >
              Содержание
            </BookDescription>
          </div>
          <NightBlueBtn
            title={'Редактировать'}
            className={'edit'}
            availability={!editBook}
            editBook={editBookChange}
          />
          <DeleteBtn availability={!deleteBook} />
        </div>
      </div>
    </section>
  )
}

Book.propTypes = {
  bookInfo: PropTypes.object.isRequired,
  bookAuthors: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  userProfile: PropTypes.object.isRequired,
  isDeployContent: PropTypes.bool.isRequired,
  isDeployAnnotation: PropTypes.bool.isRequired,
  setIsDeployAnnotation: PropTypes.func.isRequired,
  setIsDeployContent: PropTypes.func.isRequired,
}

export default Book
