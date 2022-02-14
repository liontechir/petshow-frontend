import { AuthResponse } from 'interfaces/responses/AuthResponse'
import Router from 'next/router'
import FetchWrapper from 'server/FetchWrapper'
import { urlBase } from '../config'

class AuthService {
  constructor() {}

  getUserSession(): AuthResponse | null {
    const userStr = sessionStorage.getItem('user')
    if(userStr) {
      return JSON.parse(userStr)
    } else return null
  }

  setUserSession(user: AuthResponse) {
    sessionStorage.setItem('user', JSON.stringify(user))
  }

  async login(email: string, password: string) {
    return await FetchWrapper.signin(`${urlBase}/auth`, {
      email,
      password,
    })
      .then((user) => {
        this.setUserSession(user)
        return user
      })
      .catch((error) => error)
  }

  logout() {
    sessionStorage.removeItem('user')
    Router.push('/')
  }
}

export default new AuthService()
