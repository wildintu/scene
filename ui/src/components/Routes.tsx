import { Routes, Route } from 'react-router-dom'
import { Counts } from '../containers/Counts'
import { Login } from '../containers/Login'
import { Dashboard } from '../containers/Dashboard'

export function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Counts />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}