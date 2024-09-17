import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import { Counts } from '../containers/Counts'
import { Login } from '../containers/Login'
import { Dashboard } from '../containers/Dashboard'
import { Home } from '../containers/Home'
import { Clubs } from '../containers/Clubs'
import { Club } from '../containers/Club'
import { Venue } from '../containers/Venue'
import { Scene } from '../containers/Scene'
import AuthContext from '../context/auth'

export function Router() {
  const { club } = useContext(AuthContext)
  
  const authenticatedRoutes = () => {
    return (
      <Routes>
        <Route path='/counts' element={<Counts />} />
        <Route path='/clubs'>
          <Route index element={<Clubs />} />
          <Route path={':id'} element={<Club />} />
          {/* <Route path={'new'} element={<CreateClub />} /> */}
        </Route>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Counts />} />
      </Routes>
    )
  }

  const unauthenticatedRoutes = () => {
    return (
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/scene' element={<Scene />} />
          <Route path='/venue' element={<Venue />} />
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
