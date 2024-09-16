// import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import AuthContext from '../context/auth'
import TokenUtils from '../utils/token'

export function Nav() {
//   const { club, logout } = useContext(AuthContext)
const isLoggedIn = TokenUtils.isTokenValid()
console.log('Nav', isLoggedIn)

const authenticatedNav = () => {
  return (
    <>
  <div className="nav">
    <img className='logo' src='/vite.svg' />
    <div className='links'>
      <Link to={'/counts'} className='nav-link'>Counts</Link>
      <Link to={'/dashboard'} className='nav-link'>Dashboard</Link>
    </div>
  </div>
  </>
)
}

const unauthenticatedNav = () => {
  return (
    <>
  <div className="nav">
    <img className='logo' src='/vite.svg' />
    <div className='links'>
      <Link to={'/login'} className='nav-link'>Login</Link>
    </div>
  </div>
  </>
  )
}

return (
  <>
      {isLoggedIn ? authenticatedNav() : unauthenticatedNav()}
    </>
  )
}
