import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { get } from 'lodash'
import qs from 'qs'
import './styles.scss'
import { uniqBy } from 'lodash'
import TextArea from '@/components/TextArea/text-area'
import { GreenBtn } from '@/components/GreenBtn/green-btn'
import AddPicture from '@/components/AddPicture/add-picture'
import BookRankRadioInput from '@/pages/BookManagement/components/BookRankRadioInput/book-rank-radio-input'
import InputForm from '@/components/InputForm/input-form'
import OptionSelect from '@/components/OtionSelect/option-select'
import { typeDoc } from '@/mocks/option-mocks'
import DateInputEnd from '@/components/DateInputAddBook/date-input-add-book'
import TagsInput from '@/components/TagsInput/tags-input'
import AddBookFile from '@/pages/BookManagement/components/AddBookFile/add-book-file'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  thunkAddBooks,
  thunkGetAllSection,
  thunkUpdateBook,
  thunkUpdateCoverBook,
} from '@/store/addBooks/thunks'
import InputFormAuthors from '@/pages/BookManagement/components/InputFormAuthors/input-form-authors'
import { thunkGetBook } from '@/store/catalogBooks/thunks'

const BookManagement = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  // params of location pathname/?.....
  const parametersForEditing = qs.parse(location.search, { ignoreQueryPrefix: true })
  const bookId = parametersForEditing.bookId
  const isEdit = parametersForEditing.isEdit
  // Of redux Store
  const book = useSelector((store) => get(store, ['catalogBooks', 'book'], []))
  const coverBook = useSelector((store) => get(store, ['catalogBooks', 'coverBook'], ''))
  const section = useSelector((store) => get(store, ['addBooks', 'allSection'], {}))
  // default Params Book for Edit
  const authors = get(book, ['authors'], [])
  const nameDoc = get(book, ['nameDoc'], '')
  const rating = get(book, ['rank'], 0)
  const placeOfPublish = get(book, ['placeOfPublish'], '')
  const dateOfPublish = get(book, ['dateOfPublish'], new Date())
  const description = get(book, ['description'], '')
  const ISBN = get(book, ['ISBN'], '')
  const DOI = get(book, ['DOI'], '')
  const areaOfTheDoc = get(book, ['areaOfTheDoc'], '')
  const annotation = get(book, ['annotation'], '')
  const comment = get(book, ['comment'], '')
  const content = get(book, ['content'], '')
  const tags = get(book, ['tags'], [])
  const docType = get(book, ['typeDoc'], [])

  // count for add authors input
  const [count, setState] = useState(0)

  useEffect(() => {
    dispatch(
      thunkGetBook({
        bookId,
      }),
    )
  }, [isEdit])

  useEffect(() => {
    dispatch(thunkGetAllSection())
  }, [])

  const handleClickToAddInput = (e) => {
    e.persist()
    setState((count) => count + 1)
  }
  return (
    <section className="add-book-container">
      <h2 className="add-book-title">{isEdit ? `Редактировать книгу` : `Добавить`}</h2>
      <Formik
        initialValues={{
          author: authors[0] || '',
          // authors: {},
          rating: 0 || rating,
          docName: nameDoc,
          typeDoc: docType,
          section: '',
          positionPublication: placeOfPublish,
          date: new Date() || dateOfPublish,
          description: description,
          isbn: ISBN,
          doi: DOI,
          docSection: areaOfTheDoc,
          annotation: annotation,
          content: content,
          comment: comment,
          tags: tags,
          bookCover: coverBook,
          bookReviewCover: coverBook,
          bookPdf: '',
          bookDoc: '',
          bookFb2: '',
          bookEpub: '',
          bookFiles: [],
        }}
        // for editing
        enableReinitialize={true}
        validationSchema={Yup.object({
          author: Yup.string().required(),
          rating: Yup.string().required(),
          docName: Yup.string().required(),
          content: Yup.string().required(),
          bookCover: Yup.string().required(),
          tags: Yup.array().required(),
          positionPublication: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          const tags = values.tags.map((tag) => tag.id)
          const filterBookFiles = uniqBy(values.bookFiles, 'name')

          isEdit
            ? dispatch(
                thunkUpdateBook({
                  author: values.author,
                  authors: values.authors,
                  rating: values.rating,
                  docName: values.docName,
                  typeDoc: values.typeDoc,
                  section: values.section,
                  positionPublication: values.positionPublication,
                  date: values.date,
                  description: values.description,
                  isbn: values.isbn,
                  doi: values.doi,
                  docSection: values.docSection,
                  annotation: values.annotation,
                  content: values.content,
                  comment: values.comment,
                  tags: tags,
                  bookCover: values.bookCover,
                  bookReviewCover: values.bookReviewCover,
                  bookFiles: filterBookFiles,
                  bookPdf: values.bookPdf,
                  bookDoc: values.bookDoc,
                  bookEpub: values.bookEpub,
                  bookFb2: values.bookFb2,
                  bookId,
                }),
              )(
                dispatch(
                  thunkUpdateCoverBook({
                    bookCover: values.bookCover,
                    bookId,
                  }),
                ),
              )
            : dispatch(
                thunkAddBooks({
                  author: values.author,
                  // authors: values.authors,
                  rating: values.rating,
                  docName: values.docName,
                  typeDoc: values.typeDoc,
                  section: values.section,
                  positionPublication: values.positionPublication,
                  date: values.date,
                  description: values.description,
                  isbn: values.isbn,
                  doi: values.doi,
                  docSection: values.docSection,
                  annotation: values.annotation,
                  content: values.content,
                  comment: values.comment,
                  tags: tags,
                  bookCover: values.bookCover,
                  bookReviewCover: values.bookReviewCover,
                  bookFiles: filterBookFiles,
                  bookPdf: values.bookPdf,
                  bookDoc: values.bookDoc,
                  bookEpub: values.bookEpub,
                  bookFb2: values.bookFb2,
                }),
              )
          setSubmitting(false)
        }}
      >
        {({ values, setFieldValue }) => (
          <Form className="form-grid-add-book">
            <div className="add-author">
              <InputForm
                label="Ф.И.О автора*"
                className="input-add-author"
                type="text"
                name="author"
              />
              <button
                className="add-author-btn"
                type={'button'}
                onClick={handleClickToAddInput}
              >
                Добавить еще автора
              </button>
              {[...Array(count)].map((elem, index) => (
                <InputFormAuthors
                  label="Ф.И.О автора*"
                  type="text"
                  name="authors"
                  setField={setFieldValue}
                  values={values.authors}
                  className="input-add-author input-add-author--full-width"
                  key={Date.now() + index}
                  index={index}
                />
              ))}
            </div>
            <div className="add-book-grid">
              <InputForm
                label="Название документа*"
                className="add-name"
                type="text"
                name="docName"
              />
              <OptionSelect
                label="Вид документа"
                className="add-type"
                typeArray={typeDoc}
                name="typeDoc"
              />
              <OptionSelect
                label="Раздел"
                className="add-section"
                typeArray={section}
                name="section"
              />
              <InputForm
                label="Место публикации*"
                className="add-publication"
                name="positionPublication"
                type="text"
              />
              <DateInputEnd
                className="add-date"
                name="date"
                setState={setFieldValue}
                date={values.date}
                title="Дата публикации"
              />
              <InputForm
                label="Описание и содержание"
                className="add-description"
                name="description"
                type="text"
              />
              <InputForm label="ISBN" className="add-isbn" name="isbn" type="text" />
              <InputForm label="DOI" className="add-doi" name="doi" type="text" />
              <TextArea
                className="add-document-area"
                name="docSection"
                label="Область документа"
              />
              <TextArea className="add-annotation" name="annotation" label="Аннотация" />
              <TextArea className="add-content" name="content" label="Содержание*" />
              <TextArea className="add-comments" name="comment" label="Комментарий" />
              <TagsInput
                className="add-tags"
                name="tags"
                setField={setFieldValue}
                valuesTags={tags}
              />
              <AddPicture
                title={'Обложка книги'}
                className={'add-cover-book'}
                bookCover={values.bookCover}
                setState={setFieldValue}
                nameBookCover="bookCover"
                nameBookReviewCover="bookReviewCover"
                bookReviewCover={values.bookReviewCover}
                dispatch={dispatch}
                bookId={bookId}
                isEdit={isEdit}
              />
              <div className="add-rank-and-files">
                <BookRankRadioInput
                  name="rating"
                  values={values.rating}
                  setState={setFieldValue}
                />
                <AddBookFile
                  setField={setFieldValue}
                  name="bookFiles"
                  valuesField={values.bookFiles}
                />
              </div>
              <GreenBtn
                title={isEdit ? 'редактировать книгу' : 'добавить книгу'}
                type={'submit'}
                className="add-book-btn"
              />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default BookManagement
