import { jwtDecode } from "jwt-decode"

const getClub = () => {
  return localStorage.getItem('club')
}

const setClub = (jwt: any) => {
  return localStorage.setItem('club', jwt)
}

const logout = () => {
  localStorage.removeItem('club')
}

const decodeJWT = (jwt: any) => {
  return jwtDecode(jwt)
}
const isTokenExpired = (token: any) => {
  const jwt = jwtDecode(token) as any
  const currentTime = new Date().getTime() / 1000
  return currentTime > jwt.exp
}

const isTokenValid = () => {
  const jwt: any = getClub()
  if (jwt) {
    const data = jwtDecode(jwt)
    if (data) {
      console.log('Token is Valid')
      return isTokenExpired(jwt)
    } else {
      console.log('Token is NOT Valid')
      return false
    }
    console.log(jwt)
  }
}

const TokenUtils = {
  getClub: getClub,
  setClub: setClub,
  logout: logout,
  decodeJWT: decodeJWT,
  isTokenExpired: isTokenExpired,
  isTokenValid: isTokenValid
}

export default TokenUtils