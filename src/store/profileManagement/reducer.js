import { createReducer } from '@reduxjs/toolkit'
import { get } from 'lodash'
import {
  actionSaveCompany,
  actionSaveUserProfile,
} from '@/store/profileManagement/actions'

const initialState = {
  profile: {},
  company: {},
  logo: '',
}

export const profileManagement = createReducer(initialState, {
  [actionSaveUserProfile]: (state, payload) => {
    return {
      ...state,
      profile: get(payload, ['payload', 'profile'], {}),
      logo: get(payload, ['payload', 'logo'], ''),
    }
  },
  [actionSaveCompany]: (state, payload) => {
    return {
      ...state,
      company: get(payload, ['payload', 'company'], {}),
    }
  },
})
