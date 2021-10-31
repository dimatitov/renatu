import { createReducer } from '@reduxjs/toolkit'
import { get } from 'lodash'
import {
  actionSaveBook,
  actionSaveBooks,
  actionEditBookById,
  actionSaveNumPage,
  actionSaveTags,
  actionOpenReport,
  actionSaveAdvancedSearch,
  actionSaveFilenameReport,
} from '@/store/catalogBooks/actions'

const initialState = {
  books: [],
  countPage: '',
  book: {},
  coverBook: '',
  authors: '',
  tags: [],
  page: 1,
  bookId: '',
  switchEditBook: false,
  bookTags: [],
  isReport: false,
  query: {
    source: '',
    nameDoc: '',
    dateStart: '',
    dateEnd: '',
    authors: '',
    typeDoc: '',
    tags: '',
    section: '',
    status: '',
    description: '',
    rank: '',
  },
  filename: '',
}

export const catalogBooks = createReducer(initialState, {
  [actionSaveBooks]: (state, payload) => {
    return {
      ...state,
      books: get(payload, ['payload', 'books'], []),
      countPage: get(payload, ['payload', 'count'], ''),
    }
  },
  [actionSaveBook]: (state, payload) => {
    return {
      ...state,
      book: get(payload, ['payload', 'book'], {}),
      coverBook: get(payload, ['payload', 'cover'], '').trim(),
      authors: get(payload, ['payload', 'authors'], '').join(', '),
      bookTags: get(payload, ['payload', 'bookTags'], []),
    }
  },
  [actionSaveTags]: (state, payload) => {
    return {
      ...state,
      tags: get(payload, ['payload', 'tags'], []),
    }
  },
  [actionSaveNumPage]: (state, payload) => {
    return {
      ...state,
      page: get(payload, ['payload', 'page'], 0),
    }
  },
  [actionEditBookById]: (state, payload) => {
    return {
      ...state,
      bookId: get(payload, ['payload', 'id'], ''),
      switchEditBook: get(payload, ['payload', 'switchedOn'], ''),
    }
  },
  [actionOpenReport]: (state, payload) => {
    console.log('payload', payload)
    return {
      ...state,
      isReport: get(payload, ['payload', 'isReport'], false),
    }
  },
  [actionSaveAdvancedSearch]: (state, payload) => {
    return {
      ...state,
      query: get(payload, ['payload'], {}),
    }
  },
  [actionSaveFilenameReport]: (state, payload) => {
    console.log('payload', payload.payload)
    return {
      ...state,
      filename: get(payload, 'payload', ''),
    }
  },
})
