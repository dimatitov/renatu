import { createReducer } from '@reduxjs/toolkit'
import { get } from 'lodash'
import {
  actionInvalidEmailOrPassword,
  actionLoginUser,
  actionLogoutUser,
  actionSaveEmail,
} from '@/store/user/actions'

const initialState = {
  emailRecovery: '',
  invalidLogin: false,
  role: '',
  user: {},
  email: '',
  emailForRecovery: '',
}

export const userReducer = createReducer(initialState, {
  [actionInvalidEmailOrPassword]: (state, payload) => {
    return {
      ...state,
      invalidLogin: true,
    }
  },
  [actionLoginUser]: (state, payload) => {
    return {
      ...state,
      user: get(payload, ['payload', 'user'], {}),
      role: get(payload, ['payload', 'role'], ''),
    }
  },
  [actionLogoutUser]: (state, payload) => {
    return {
      ...state,
      role: get(payload, ['payload', 'role'], ''),
    }
  },
  [actionSaveEmail]: (state, payload) => {
    return {
      ...state,
      emailForRecovery: get(payload, ['payload'], ''),
    }
  },
})
