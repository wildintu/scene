import '@radix-ui/themes/styles.css'
import './App.css'
import { useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { Theme } from '@radix-ui/themes'
import { Nav } from './components/Nav'
import { Router } from './components/Routes'
import { AuthContext } from './context/AuthContext'
import { Club } from './containers/Club'

export function App() {
  const [club, setClub] = useState<typeof Club | null>(null)

  useEffect(() => {
    const clubData = localStorage.getItem('jwt')
    if (clubData) {
      login(clubData)
      console.log('LOGIN SUCCESSFUL')
    } else {
      logout()
      console.log('You have successfully logged out')
    }
  }, [])

  const login = (clubData: any) => {
    localStorage.setItem('jwt', clubData)
    const decodedClub: any = jwtDecode(clubData)
    if (decodedClub) {
      localStorage.setItem('club', JSON.stringify(decodedClub))
      setClub(decodedClub)
    }
  }

  const logout = () => {
    setClub(null)
    localStorage.removeItem('jwt')
    localStorage.removeItem('club')
  }

  return (
    <>
    <AuthContext.Provider value={{ club, setClub, login, logout }}>
      <Theme>
        <Nav />
        <Router />
      </Theme>
    </AuthContext.Provider>
    </>
  )
}
