import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { Login } from '../containers/Login'
import { Dashboard } from '../containers/Dashboard'
import { Home } from '../containers/Home'
import { Clubs } from '../containers/Clubs'
import { Venues } from '../containers/Venues'
import { Scenes } from '../containers/Scenes'
import AuthContext from '../context/auth'
import { Club } from '../containers/Club'
import { ClubForm } from '../containers/ClubForm'

export function Router() {
  const { club } = useContext(AuthContext)
  
  const authenticatedRoutes = () => {
    return (
      <Routes>
        <Route path='/scenes' element={<Scenes />} />
        <Route path='/venues' element={<Venues />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/clubs'>
          <Route index element={<Clubs />} />
          <Route path={'/clubs/:id'} element={<Club />} />
          <Route path={'/clubs/:id/edit'} element={<ClubForm />} />
        </Route>
        <Route path='*' element={<Dashboard />} />
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
