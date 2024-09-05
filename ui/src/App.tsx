import '@radix-ui/themes/styles.css'
import './App.css'
import { Theme } from '@radix-ui/themes'
import { Nav } from './components/Nav'
import { Router } from './components/Routes'
import AuthContext from './context/auth'
import { useEffect, useState } from 'react'
import TokenUtils from './utils/token'

export function App() {
    const [club, setClub] = useState()
    const jwt = TokenUtils.getClub()

    useEffect(() => {
      if (jwt) {
        setClub(jwt)
        console.log(jwt)
      }
      else {
          console.log('nope')
      }
    }, [])

    const login = async (clubData: any) => {
      setClub(clubData)
      await TokenUtils.setClub(clubData)
    }

    const logout = async () => {
      setClub(null)
      await TokenUtils.logout()
    }

  return (
    <>
      <AuthContext.Provider value={{ club, login, logout }}>
        <Theme>
          <Nav />
          <Router />
        </Theme>
      </AuthContext.Provider>
    </>
  )
}
