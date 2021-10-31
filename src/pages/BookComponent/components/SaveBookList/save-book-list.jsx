import React from 'react'
import './styles.scss'
import MyButtonSaveBook from '@/pages/BookComponent/components/MyButtonSaveBook/my-button-save-book'
import PdfBtn from '@/assets/img/book/file-pdf.png'
import EpubBtn from '@/assets/img/book/file-epub.png'
import DocBtn from '@/assets/img/book/file-doc.png'
import Fd2Btn from '@/assets/img/book/file-fb2.png'

const SaveBookList = ({ docPdf, docDOC, docEpub, docFb2 }) => {
  return (
    <div className="book-saved">
      <div className="book-saved__title">Скачать книгу:</div>
      <div className="book-saved__btn">
        <MyButtonSaveBook
          iconButton={PdfBtn}
          classFormatButton={`save-btn__pdf`}
          docFile={docPdf}
          formatFile={'pdf'}
        >
          pdf
        </MyButtonSaveBook>
        <MyButtonSaveBook
          iconButton={EpubBtn}
          classFormatButton={`save-btn__epub`}
          formatFile={'epub'}
          docFile={docEpub}
        >
          epub
        </MyButtonSaveBook>
        <MyButtonSaveBook
          iconButton={DocBtn}
          classFormatButton={`save-btn__doc`}
          formatFile={'doc'}
          docFile={docDOC}
        >
          doc
        </MyButtonSaveBook>
        <MyButtonSaveBook
          iconButton={Fd2Btn}
          classFormatButton={`save-btn__fb2`}
          formatFile={'fb2'}
          docFile={docFb2}
        >
          fb2
        </MyButtonSaveBook>
      </div>
    </div>
  )
}

export default SaveBookList
