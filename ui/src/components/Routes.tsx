import { Routes, Route } from 'react-router-dom';
import { Counts } from '../containers/Counts';
// import Login from '../containers/Login';

export function Router() {
  return (
    <Routes>
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='*' element={<Counts />} />
    </Routes>
  )
}