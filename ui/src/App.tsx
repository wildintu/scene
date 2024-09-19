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
    const jwt: any = TokenUtils.getToken()

    useEffect(() => {
      if (jwt) {
        setClub(jwt)
        console.log(club)
      } else {
        console.log('nope')
      }
    }, [])

    const login = async (jwt: any) => {
      setClub(jwt)
      await TokenUtils.setToken(jwt)
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
