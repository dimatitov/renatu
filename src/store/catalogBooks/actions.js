import { createAction } from '@reduxjs/toolkit'

export const actionSaveBooks = createAction('ACTION_SAVE_BOOKS')
export const actionSaveBook = createAction('ACTION_SAVE_BOOK')
export const actionSaveTags = createAction('ACTION_SAVE_TAGS')
export const actionSaveNumPage = createAction('ACTION_SAVE_NUM_PAGE')
export const actionEditBookById = createAction('ACTION_SAVE_ID_BOOK')
export const actionOpenReport = createAction('ACTION_OPEN_REPORT')
export const actionSaveAdvancedSearch = createAction('ACTION_SAVE_ADVANCED_SEARCH')
export const actionSaveFilenameReport = createAction('ACTION_SAVE_FILENAME_REPORT')
