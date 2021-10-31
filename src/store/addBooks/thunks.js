import { createAsyncThunk } from '@reduxjs/toolkit'
import { get, includes } from 'lodash'
import qs from 'qs'
import axios from '@/api/axios'
import { actionSaveAllSection } from '@/store/addBooks/actions'

export const thunkAddBooks = createAsyncThunk(
  'THUNK_ADD_BOOKS',
  async (payload, thunkAPI) => {
    try {
      const actDate = Date.now()
      const {
        bookCover,
        date,
        docName,
        content,
        tags,
        comment,
        typeDoc,
        section,
        positionPublication,
        description,
        isbn,
        doi,
        docSection,
        annotation,
        bookFiles,
        rating,
        authors,
        author,
      } = payload
      const bookDate = Date.parse(date)
      let filePdf = ''
      let fileDoc = ''
      let fileEpub = ''
      let fileFb2 = ''
      // const bookAuthors = authors.concat(author)
      bookFiles.filter((file) => {
        if (includes(file.name, '.pdf')) {
          filePdf = file
        }
        if (includes(file.name, '.epub')) {
          fileEpub = file
        }
        if (includes(file.name, '.doc')) {
          fileDoc = file
        }
        if (includes(file.name, '.fb2')) {
          fileFb2 = file
        }
      })
      const formData = new FormData()
      // for (let i = 0; i < bookAuthors.length; i++) {
      //   formData.append(`authors[${i}]`, bookAuthors[i])
      // }
      formData.append('authors[0]', authors)
      formData.append('DocPDF', filePdf)
      formData.append('DocDOC', fileDoc)
      formData.append('DocEPUB', fileEpub)
      formData.append('DocFB2', fileFb2)
      formData.append('Avatar', bookCover)
      formData.append('dateOfPublish', bookDate)
      formData.append('date', actDate)
      formData.append('nameDoc', docName)
      formData.append('content', content)
      for (let i = 0; i < tags.length; i++) {
        formData.append(`tags[${i}]`, tags[i])
      }
      formData.append('comment', comment)
      formData.append('typeDoc', typeDoc)
      formData.append('placeOfPublish', positionPublication)
      formData.append('description', description)
      formData.append('ISBN', isbn)
      formData.append('DOI', doi)
      formData.append('areaOfTheDoc', docSection)
      formData.append('annotation', annotation)
      formData.append('rank', rating)
      const addBooksResponse = await axios({
        method: 'POST',
        url: '/user-panel/book/add',
        data: formData,
      })
      console.log('addBooksResponse', addBooksResponse)
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkGetAllSection = createAsyncThunk(
  'THUNK_GET_ALL_SECTION',
  async (payload, thunkAPI) => {
    try {
      const getAllSectionResponse = await axios({
        method: 'GET',
        url: '/user-panel/section/get-all',
      })
      thunkAPI.dispatch(
        actionSaveAllSection({
          allSection: { ...get(getAllSectionResponse, ['data'], []) },
        }),
      )
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkUpdateBook = createAsyncThunk(
  'THUNK_UPDATE_BOOK',
  async (payload, thunkAPI) => {
    try {
      const data = {
        bookId: payload.bookId,
        date: Date.now(),
        nameDoc: payload.docName,
        content: payload.content,
        comment: payload.comment,
        typeDoc: payload.typeDoc,
        placeOfPublish: payload.positionPublication,
        description: payload.description,
        ISBN: payload.isbn,
        DOI: payload.doi,
        areaOfTheDoc: payload.docSection,
        annotation: payload.annotation,
        rank: payload.rating,
      }
      const updateBookResponse = await axios({
        method: 'POST',
        url: '/user-panel/book/update',
        data: data,
      })
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkUpdateCoverBook = createAsyncThunk(
  'THUNK_UPDATE_COVER_BOOK',
  async (payload, thunkAPI) => {
    try {
      const date = Date.now()
      const formData = new FormData()
      formData.append('bookId', payload.bookId)
      formData.append('Avatar', payload.bookCover)
      formData.append('date', date)
      const updateCoverBookResponse = await axios({
        method: 'POST',
        url: '/user-panel/book/update-avatar',
        data: formData,
      })
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkDeleteCoverBook = createAsyncThunk(
  'THUNK_DELETE_COVER_BOOK',
  async (payload, thunkAPI) => {
    try {
      const data = {
        bookId: payload.bookId,
      }
      const deleteCoverBookResponse = await axios({
        method: 'POST',
        url: '/user-panel/book/delete-avatar',
        data: data,
      })
    } catch (err) {
      console.warn(err)
    }
  },
)
