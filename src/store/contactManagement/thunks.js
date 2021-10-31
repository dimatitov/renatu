import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '@/api/axios'
import { get } from 'lodash'
import { actionSaveFriends } from '@/store/contactManagement/actions'

export const thunkGetFriendsUser = createAsyncThunk(
  'THUNK_GET_FRIENDS_USER',
  async (payload, thunkAPI) => {
    try {
      const getFriendsUser = await axios({
        method: 'GET',
        url: '/user-panel/profile/get-all',
      })
      thunkAPI.dispatch(
        actionSaveFriends({
          friends: Object.values(get(getFriendsUser, ['data'], [])),
        }),
      )
    } catch (err) {
      console.warn(err)
    }
  },
)
