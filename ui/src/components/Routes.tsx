import { Routes, Route, BrowserRouter, createBrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
import { Counts } from '../containers/Counts'
import { Login } from '../containers/Login'
import { Dashboard } from '../containers/Dashboard'
// import { Club } from '../containers/Club'
import AuthContext from '../context/auth'

export function Router() {
  const { club } = useContext(AuthContext)
  
  const authenticatedRoutes = () => {
    return (
      <Routes>
        <Route path='/counts' element={<Counts />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='*' element={<Dashboard />} />
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
