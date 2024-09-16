import { jwtDecode } from "jwt-decode"

const getToken = () => {
  return localStorage.getItem('jwt')
}

const setToken = (jwt: any) => {
  return localStorage.setItem('jwt', jwt)
}

const logout = () => {
  localStorage.removeItem('jwt')
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
  const jwt: any = getToken()
  if (jwt) {
    const data = jwtDecode(jwt)
    console.log('data is token valid', data)
    if (data) {
      console.log('Token is Valid')
      return isTokenExpired(jwt)
    } else {
      console.log('Token is NOT Valid')
      return false
    }
  }
}

const TokenUtils = {
  getToken: getToken,
  setToken: setToken,
  logout: logout,
  decodeJWT: decodeJWT,
  isTokenExpired: isTokenExpired,
  isTokenValid: isTokenValid
}

export default TokenUtils
