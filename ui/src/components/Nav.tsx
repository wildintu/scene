import { Link } from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/auth'

export function Nav() {
  const { club, logout } = useContext(AuthContext)

  const authenticatedNav = () => {
    return (
      <>
    <div className="nav">
      <img className='logo' src='/vite.svg' />
      <div className='links'>
        <Link to={'/counts'} className='nav-link'>Counts</Link>
        <Link to={'/clubs'} className='nav-link'>Clubs</Link>
        <Link to={'/dashboard'} className='nav-link'>Dashboard</Link>
        <Link to={'/logout'} className='nav-link' onClick={logout}>Logout</Link>
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
            <Link to={'/scene'} className='nav-link'>Scene</Link>
            <Link to={'/venue'} className='nav-link'>Venue</Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {club ? authenticatedNav() : unauthenticatedNav()}
    </>
  )
}
