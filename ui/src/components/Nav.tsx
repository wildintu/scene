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
        <Link to={'/scenes'} className='nav-link'>Scenes</Link>
        <Link to={'/venues'} className='nav-link'>Venues</Link>
        <Link to={'/clubs'} className='nav-link'>Clubs</Link>
        <Link to={'/dashboard'} className='nav-link'>Dashboard</Link>
        <Link to={'/'} className='nav-link' onClick={logout}>Logout</Link>
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
            <Link to={'/scenes'} className='nav-link'>Scenes</Link>
            <Link to={'/venues'} className='nav-link'>Venues</Link>
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
