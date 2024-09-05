import AuthContext from '../context/auth'
import { useContext } from 'react';

export function Club() {
  const { club, logout } = useContext(AuthContext)

  return (
    <>
    club page
    </>
  )
}
