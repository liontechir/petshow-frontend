import { AuthResponse } from 'interfaces/responses/AuthResponse'
import Router from 'next/router'
import FetchWrapper from 'server/FetchWrapper'
import { urlBase } from '../config'

class AuthService {
  constructor() {}

  getUserSession(): AuthResponse | undefined {
    const userStr = sessionStorage.getItem('user')
    if(userStr) {
      return JSON.parse(userStr)
    } else return undefined
  }

  setUserSession(user: AuthResponse) {
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  login(email: string, password: string): Promise<AuthResponse> {
    return FetchWrapper.signin(`${urlBase}/auth`, {
      email,
      password,
    })
  }

  logout() {
    sessionStorage.removeItem('user')
    // Router.push('/')
  }
}

export default new AuthService()
