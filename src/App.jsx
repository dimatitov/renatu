import React from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { ROUTES } from './routes'
import PrivateRoute from './components/PrivateRoute/private-route'
import DefaultLayout from './components/DefaultLayout/default-layout'
import { useRedirectToDefaultPage } from './hooks/useRedirectToDefaultPage'
import './styles/App.scss'

const App = () => {
  useRedirectToDefaultPage()

  const location = useLocation()
  const currentRoute = ROUTES.find((route) => route.path === location.pathname)
  const Layout = currentRoute ? currentRoute.layout : DefaultLayout

  return (
    <Layout>
      <Switch>
        {ROUTES.map((route) =>
          route.isPrivate ? (
            <PrivateRoute
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ),
        )}
      </Switch>
    </Layout>
  )
}

export default App
