import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'
import { BookInfo } from '@/components/BookInfo/book-info'

const BookInfoList = ({
  areaDoc = '',
  author = '',
  publishing = '',
  comment = '',
  date = '',
  docType = '',
  DOI = '',
  ISBN = '',
}) => {
  const datePublication = date.slice(0, 10)
  return (
    <div className="book-information">
      <BookInfo description={author}>Автор</BookInfo>
      <BookInfo description={docType}>Вид документа</BookInfo>
      <BookInfo description={publishing}>Издательство</BookInfo>
      <BookInfo description={datePublication}>Дата публикации</BookInfo>
      <BookInfo description={ISBN}>ISBN</BookInfo>
      <BookInfo description={DOI}>DOI</BookInfo>
      <BookInfo description={areaDoc}>Облать документа</BookInfo>
      <BookInfo description={comment}>Коментарий</BookInfo>
    </div>
  )
}

BookInfoList.propTypes = {
  author: PropTypes.string,
  docType: PropTypes.string,
  publishing: PropTypes.string,
  date: PropTypes.string,
  ISBN: PropTypes.number,
  DOI: PropTypes.number,
  areaDoc: PropTypes.string,
  comment: PropTypes.string,
}

export default BookInfoList
