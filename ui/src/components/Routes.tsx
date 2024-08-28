import { Routes, Route } from 'react-router-dom';
import { Counts } from '../containers/Counts';
import { Login } from '../containers/Login';
import { Docs } from '../containers/Docs';

export function Router() {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<Counts />} />
      <Route path='/docs' element={<Docs />} />
    </Routes>
  )
}