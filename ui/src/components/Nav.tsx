import { Link } from 'react-router-dom';

export function Nav() {

  return (
    <>
    <div className="nav">
      <img className='logo' src='/vite.svg' />
      <div className='links'>
        <Link to={'/login'} className='nav-link'>Login</Link>
        <Link to={'/'} className='nav-link'>Home</Link>
        <Link to={'/docs'} className='nav-link'>Docs</Link>
      </div>
    </div>
    </>
  )
}