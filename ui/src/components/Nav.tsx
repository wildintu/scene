import { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/auth'

export function Nav() {
  const { club, logout } = useContext(AuthContext)

  const unauthenticatedNav = () => {
    return (
      <>
    <div className="nav">
      <img className='logo' src='/vite.svg' />
      <div className='links'>
        <Link to={'/login'} className='nav-link'>Login</Link>
        <Link to={'/'} className='nav-link'>Home</Link>
      </div>
    </div>
    </>
    )
  }
  
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

  return (
    <>
      {club ? unauthenticatedNav() : authenticatedNav()}
    </>
  )
}
