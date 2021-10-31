import { useLayoutEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export const useRedirectToDefaultPage = () => {
  const location = useLocation()
  const history = useHistory()

  useLayoutEffect(() => {
    if (location.pathname === '/') {
      window.location.pathname = '/login'
    }
  }, [])
}
