import * as TokenUtils from '../utils/token'
import * as aInstance from '../utils/axios'

export const authenticate = async (email: string, password: string) => {
  return await aInstance
    .post('/auth/login', { email, password })
    .then((response: any) => {
      if (response.status == 200) {
        TokenUtils.setUser(response.data.token)
      }
      return response
    })
}

export const logout = async () => {
  return await TokenUtils.logout()
}

export const AuthService = {
  authenticate: AuthenticatorResponse,
  logout: logout
}