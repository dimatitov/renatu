import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const success = (data = '') =>
  toast.success(data, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  })

export const error = (data = '') =>
  toast.error(data, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  })

export const responseChangePassword = (data = '') => {
  switch (data) {
    case 'Пароль изменен':
      location.pathname = '/profile-recovery-password-changed'
      break
    case 'Старый пароль введен неверно':
      error(data)
      break
    default:
      break
  }
  q
}
