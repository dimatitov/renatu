import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from 'lodash'
import axios from '@/api/axios'
import qs from 'qs'
import {
  actionSaveBook,
  actionSaveBooks,
  actionSaveFilenameReport,
  actionSaveTags,
} from '@/store/catalogBooks/actions'
import {
  definingBookFormat,
  definingReportFormat,
  downloadFiles,
} from '@/store/catalogBooks/utils'

export const thunkGetAllBooks = createAsyncThunk(
  'THUNK_GET_ALL_BOOKS',
  async (payload, thunkAPI) => {
    try {
      const queries = qs.stringify(
        {
          ...(payload.search && { [payload.select]: payload.search }),
          ...(payload.page && { page: payload.page }),
        },
        { encode: false, addQueryPrefix: true },
      )
      const getAllBooksResponse = await axios({
        method: 'GET',
        url: `/user-panel/book/get-all${queries}`,
      })
      thunkAPI.dispatch(
        actionSaveBooks({
          books: Object.values(get(getAllBooksResponse, ['data', 'bookMap'], [])),
          count: get(getAllBooksResponse, ['data', 'count'], ''),
        }),
      )
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkGetBook = createAsyncThunk(
  'THUNK_GET_BOOK',
  async (payload, thunkAPI) => {
    try {
      const idBook = payload.bookId
      const getBookResponse = await axios({
        method: 'GET',
        url: `/user-panel/book/get?id=${idBook}`,
      })
      thunkAPI.dispatch(
        actionSaveBook({
          book: get(getBookResponse, ['data', '0'], []),
          cover: get(getBookResponse, ['data', '0', 'avatar'], ''),
          authors: get(getBookResponse, ['data', '0', 'authors'], []),
          bookTags: get(getBookResponse, ['data', '0', 'tags'], []),
        }),
      )
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkGetAllTags = createAsyncThunk(
  'THUNK_GET_ALL_TAGS',
  async (payload, thunkAPI) => {
    try {
      const getAllTagsResponse = await axios({
        method: 'GET',
        url: '/user-panel/tag/get-all',
      })
      thunkAPI.dispatch(
        actionSaveTags({
          tags: get(getAllTagsResponse, ['data'], []),
        }),
      )
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkAdvancedSearch = createAsyncThunk(
  'THUNK_ADVANCED_SEARCH',
  async (payload, thunkAPI) => {
    try {
      const dateStart = Date.parse(payload.dateStart)
      const dateEnd = Date.parse(payload.dateEnd)
      const queries = qs.stringify(
        {
          ...(payload.authors && { authors: payload.authors }),
          ...(payload.nameDoc && { nameDoc: payload.nameDoc }),
          ...(payload.typeDoc && { typeDoc: payload.typeDoc }),
          ...(payload.tags && { tags: payload.tags }),
          ...(payload.section && { section: payload.section }),
          ...(payload.status && { status: payload.status }),
          ...(payload.description && { description: payload.description }),
          ...(payload.rank && { rank: payload.rank }),
          ...(payload.page && { page: payload.page }),
        },
        { encode: false, addQueryPrefix: true },
      )
      console.log('queries', queries)
      const advancedSearchResponse = await axios({
        method: 'GET',
        url: `/user-panel/book/advanced-search${queries}`,
      })
      thunkAPI.dispatch(
        actionSaveBooks({
          books: Object.values(get(advancedSearchResponse, ['data', 'bookMap'], [])),
          count: get(advancedSearchResponse, ['data', 'count'], ''),
        }),
      )
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkGenerateReport = createAsyncThunk(
  'THUNK_GENERATE_REPORT',
  async (payload, thunkAPI) => {
    try {
      const data = payload
      const format = payload.type_report
      const generateReportResponse = await axios({
        method: 'POST',
        url: '/user-panel/book/get-report',
        data: data,
      })
      const filename = get(generateReportResponse, ['data'], '')
      thunkAPI.dispatch(actionSaveFilenameReport(filename))
      if (filename) {
        downloadFiles(
          filename,
          'user-panel/book/download-report?filename',
          definingReportFormat,
          format,
        )
      }
    } catch (err) {
      console.warn(err)
    }
  },
)

// user-panel/book/get-doc?doc

export const thunkDownloadBook = createAsyncThunk(
  'THUNK_DOWNLOAD_BOOK',
  async (payload, thunkAPI) => {
    try {
      const doc = payload.book
      const format = payload.format
      downloadFiles(doc, 'user-panel/book/get-doc?doc', definingBookFormat, format)
    } catch (err) {
      console.warn(err)
    }
  },
)

// export const thunkDownloadReport = createAsyncThunk(
//   'THUNK_DOWNLOAD_REPORT',
//   async (payload, thunkAPI) => {
//     try {
//       console.log('payload', payload.filename);
//       const queries = qs.stringify(
//         { ...(payload.filename && { filename: payload.filename }) },
//         { encode: false, addQueryPrefix: true },
//       )
//       Axios.get(`http://188.68.219.162/user-panel/book/download-report${queries}`)
//         .then((response) => {
//           console.log('response', response.data);
//           // fileDownload(response.data, 'report.xlsx');
//         });
//
//       // const downloadReportResponse = await axios({
//       //   method: 'GET',
//       //   url: `/user-panel/book/download-report${queries}`,
//       // })
//       // const file = get(downloadReportResponse, 'data', '')
//       // const buf = Buffer.from(file, 'binary').toString('base64');
//       // console.log('buf', buf);
//     } catch (err) {
//       console.warn(err)
//     }
//   },
// )
