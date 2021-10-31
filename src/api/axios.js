import { default as axiosLib } from 'axios'

const axios = axiosLib.create({
  baseURL: 'http://188.68.219.162',
})

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    config.headers['Authorization'] = `Bearer ${token}`
    return config
  },
  (error) => {
    Promise.reject(error)
  },
)

export default axios
