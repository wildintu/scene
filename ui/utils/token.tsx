import { jwtDecode } from "jwt-decode"


export const getClub = () => {
  return localStorage.getItem('club')
}

export const setClub = (jwt: any) => {
  return localStorage.setItem('club', jwt)
}

export const logout = () => {
  localStorage.removeItem('club')
}

export const decodeJWT = (jwt: any) => {
  return jwtDecode(jwt)
}
export const isTokenExpired = (token: any) => {
  const jwt = jwtDecode(token) as any
  const currentTime = new Date().getTime() / 1000
  return currentTime > jwt.exp
}

export const isTokenValid = () => {
  const jwt = getClub()
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
export const TokenUtils = () => {

}