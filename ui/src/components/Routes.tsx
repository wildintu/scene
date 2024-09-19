import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { Counts } from '../containers/Counts'
import { Login } from '../containers/Login'
import { Dashboard } from '../containers/Dashboard'
import { Home } from '../containers/Home'
import { Clubs } from '../containers/Clubs'
import { Venues } from '../containers/Venues'
import { Scenes } from '../containers/Scenes'
import AuthContext from '../context/auth'
// import { Club } from '../containers/Club'

export function Router() {
  const { club, logout } = useContext(AuthContext)
  
  const authenticatedRoutes = () => {
    return (
      <Routes>
        <Route path='/scenes' element={<Scenes />} />
        <Route path='/venues' element={<Venues />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/clubs'>
          <Route index element={<Clubs />} />
          {/* <Route path={':id'} element={<Club />} /> */}
          {/* <Route path={'new'} element={<CreateClub />} /> */}
        </Route>
        <Route path='/logout' element={<Home />} />
      </Routes>
    )
  }

  const unauthenticatedRoutes = () => {
    return (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/scenes' element={<Scenes />} />
          <Route path='/venues' element={<Venues />} />
          <Route path='*' element={<Home />} />
        </Routes>
    )
  }

  return (
    <>
      {club ? authenticatedRoutes() : unauthenticatedRoutes()}
    </>
  )
}
