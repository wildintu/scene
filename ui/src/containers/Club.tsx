import AuthContext from '../context/auth'
import { useContext } from 'react';

export function Club() {
  const { club, logout } = useContext(AuthContext)
  console.log(club)

  logout()
  console.log('You are logged out')

  return (
    <>
    club page
    </>
  )
}
