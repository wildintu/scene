import { Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/auth'
import { Counts } from '../containers/Counts'
import { Login } from '../containers/Login'
import { Dashboard } from '../containers/Dashboard'
import { Club } from '../containers/Club'

export function Router() {
  const { club } = useContext(AuthContext)
  const { email } = req.body

  const authenticatedRoutes = () => {
    return (
      <Routes>
        <Route path='/counts' element={<Counts />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/club'>
          <Route index element={<Club />} />
          <Route path={`:id`} element={<Club />} />
        </Route>
      </Routes>
    )
  }

  const unauthenticatedRoutes = () => {
    return (
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Login />} />
      </Routes>
    )
  }

  return (
    <>
    {club ? authenticatedRoutes() : unauthenticatedRoutes()}
    </>
  )
}