import { createAsyncThunk } from '@reduxjs/toolkit'
import { get } from 'lodash'
import axios from '@/api/axios'
import {
  actionSaveCompany,
  actionSaveUserProfile,
} from '@/store/profileManagement/actions'
import { responseChangePassword } from '@/utils/respons-change-password'

export const thunkGetProfile = createAsyncThunk(
  'THUNK_GET_PROFILE',
  async (payload, thunkAPI) => {
    try {
      const getProfileResponse = await axios({
        method: 'GET',
        url: 'user-panel/profile/get',
      })
      thunkAPI.dispatch(
        actionSaveUserProfile({
          profile: get(getProfileResponse, ['data', '0'], {}),
          logo: get(getProfileResponse, ['data', '0', 'logo'], ''),
        }),
      )
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkGetCompany = createAsyncThunk(
  'THUNK_GET_COMPANY',
  async (payload, thunkAPI) => {
    try {
      const getCompanyResponse = await axios({
        method: 'GET',
        url: '/user-panel/company/get',
      })
      thunkAPI.dispatch(
        actionSaveCompany({
          company: get(getCompanyResponse, ['data', '0'], {}),
        }),
      )
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkUpdateUserProfile = createAsyncThunk(
  'THUNK_UPDATE_USER_PROFILE',
  async (payload, thunkAPI) => {
    try {
      const date = Date.now()
      const data = {
        name: payload.firstName,
        lastname: payload.lastName,
        middlename: payload.middleName,
        phone: payload.phone,
        date,
      }
      const updateUserProfileResponse = await axios({
        method: 'POST',
        url: '/user-panel/profile/update',
        data,
      })
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkUpdatePhotoProfile = createAsyncThunk(
  'THUNK_UPDATE_PHOTO_PROFILE',
  async (payload, thunkAPI) => {
    try {
      const date = Date.now()
      const formData = new FormData()
      formData.append('Logo', payload.file)
      formData.append('date', date)
      const updatePhotoProfileResponse = await axios({
        method: 'POST',
        url: '/user-panel/profile/update-logo',
        data: formData,
      })
    } catch (err) {
      console.warn(err)
    }
  },
)

export const thunkChangePassword = createAsyncThunk(
  'THUNK_CHANGE_PASSWORD',
  async (payload, thunkAPI) => {
    try {
      const data = {
        password: payload.password,
        oldPwd: payload.oldPwd,
      }
      const changePasswordResponse = await axios({
        method: 'POST',
        url: '/user-panel/profile/change-password',
        data: data,
      })
      const dataResponse = get(changePasswordResponse, ['data'], '')
      responseChangePassword(dataResponse)
    } catch (err) {
      console.warn(err)
    }
  },
)
