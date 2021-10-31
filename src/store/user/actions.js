import { createAction } from '@reduxjs/toolkit'

export const actionLoginUser = createAction('ACTION_SAVE_USER')
export const actionInvalidEmailOrPassword = createAction(
  'ACTION_INVALID_EMAIL_OR_PASSWORD',
)
export const actionSaveEmail = createAction('ACTION_SAVE_EMAIL')
export const actionLogoutUser = createAction('ACTION_LOGOUT_USER')
