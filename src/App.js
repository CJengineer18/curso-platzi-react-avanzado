import React, { useContext, Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
// import { Detail } from './pages/Detail'
// import { Home } from './pages/Home'
// import { Favs } from './pages/Favs'
// import { User } from './pages/User'
// import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Router, Redirect } from '@reach/router'
import { NavBar } from './components/NavBar'
import { Context } from './Context'
// import { NotFound } from './pages/NotFound'

const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Home = React.lazy(() => import('./pages/Home'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<div />}>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect noThrow from='/favs' to='/login' />}
        {!isAuth && <Redirect noThrow from='/user' to='/login' />}
        {isAuth && <Redirect noThrow from='/login' to='/' />}
        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </Suspense>
  )
}
