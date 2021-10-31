import { createReducer } from '@reduxjs/toolkit'
import { get } from 'lodash'
import { actionSaveAllSection, actionSaveAuthors } from '@/store/addBooks/actions'

const initialState = {
  allSection: {},
  allAuthors: [],
}

export const addBooks = createReducer(initialState, {
  [actionSaveAllSection]: (state, payload) => {
    return {
      ...state,
      allSection: get(payload, ['payload', 'allSection'], {}),
    }
  },
  [actionSaveAuthors]: (state, payload) => {
    return {
      ...state,
    }
  },
})
