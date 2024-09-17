import TokenUtils from "../utils/token"
import axiosUtil from '../utils/axios'

const authenticate = async (email: string, password: string) => {
  return await axiosUtil
    .post('/auth/login', { email, password })
    .then((response: any) => {
      if (response.status == 200) {
        TokenUtils.setToken(response.data.token)
        console.log(response.data.token)
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
  authenticate,
  AuthService
}

export default auth
