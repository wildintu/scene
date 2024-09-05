import { createContext } from "react"
import TokenUtils from "../../utils/token"
import axiosUtil from '../utils/axios'
import club from "../containers/Club"

const AuthContext  = createContext(club)


const authenticate = async (email: string, password: string) => {
  return await axiosUtil
    .post('/auth/login', { email, password })
    .then((response: any) => {
      if (response.status == 200) {
        TokenUtils.setClub(response.data.token)
      }
      return response
    })
}

const logout = async () => {
  return await TokenUtils.logout()
}

const AuthService = {
  authenticate: AuthenticatorResponse,
  logout: logout
}

const auth = {
  AuthContext,
  authenticate,
  AuthService
}

export default auth