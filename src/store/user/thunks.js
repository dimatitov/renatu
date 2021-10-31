import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@/api/axios'
import { get } from 'lodash'
import {
  actionInvalidEmailOrPassword,
  actionLoginUser,
  actionLogoutUser,
} from '@/store/user/actions'

export const thunkLogin = createAsyncThunk('THUNK_LOGIN', async (payload, thunkAPI) => {
  try {
    const data = {
      email: payload.validEmail,
      password: payload.validPassword,
    }
    const loginResponse = await axios({
      method: 'POST',
      url: 'authenticate/login',
      data: data,
    })
    const role = get(loginResponse, ['data', 'user', 'role'], '')
    localStorage.setItem('token', get(loginResponse, ['data', 'token'], ''))
    thunkAPI.dispatch(
      actionLoginUser({
        user: get(loginResponse, ['data', 'user'], {}),
        role,
      }),
    )
  } catch (err) {
    console.warn(err)
    thunkAPI.dispatch(actionInvalidEmailOrPassword())
  }
})

export const thunkLogout = createAsyncThunk('THUNK_LOGOUT', async (payload, thunkAPI) => {
  try {
    const logoutResponse = await axios({
      method: 'POST',
      url: '/authenticate/logout',
    })
    thunkAPI.dispatch(
      actionLogoutUser({
        role: '',
      }),
    )
    localStorage.removeItem('token')
  } catch (err) {
    console.warn(err)
  }
})

export const thunkForgotPasswordResponse = createAsyncThunk(
  'THUNK_FORGOT_PASSWORD',
  async (payload, thunkAPI) => {
    try {
      const data = {
        email: payload,
      }
      const resetResponse = await axios({
        method: 'POST',
        url: '/reset-password/forgot-password-response',
        data: data,
      })
    } catch (err) {
      console.warn(err)
    }
  },
)
