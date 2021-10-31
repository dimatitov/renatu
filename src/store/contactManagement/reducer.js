import { createReducer } from '@reduxjs/toolkit'
import { get } from 'lodash'
import { actionSaveFriends } from '@/store/contactManagement/actions'

const initialState = {
  friends: [],
}

export const contactManagement = createReducer(initialState, {
  [actionSaveFriends]: (state, payload) => {
    return {
      ...state,
      friends: get(payload, ['payload', 'friends'], []),
    }
  },
})
