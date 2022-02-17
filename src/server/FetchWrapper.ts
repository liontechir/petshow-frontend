import { useGlobalState } from 'context'
import { AuthRequest } from 'interfaces/requests/AuthRequest'
import { AuthResponse } from 'interfaces/responses/AuthResponse'
import AuthService from './services/AuthService'

class FetchWrapper {
  constructor() {}

  private authHeader(): HeadersInit {
    const user = AuthService.getUserSession()
    const isLoggedIn = !!user

    if (isLoggedIn) {
      return { Authorization: `Bearer ${user.token}` }
    } else return {}
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      if ([401].includes(response.status) && sessionStorage.getItem('user')) {
        AuthService.logout()
      }
      throw await response.json()
    } else {
      return response.json()
    }
  }

  async get(url: string) {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: this.authHeader(),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  }

  async post(url: string, body: {}) {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.authHeader(),
      },
      body: JSON.stringify(body),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  }

  async put(url: string, body: {}) {
    const requestOptions: RequestInit = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.authHeader(),
      },
      body: JSON.stringify(body),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  }

  async del(url: string): Promise<any> {
    const requestOptions: RequestInit = {
      method: 'DELETE',
      headers: this.authHeader(),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  }

  async signin(url: string, body: AuthRequest): Promise<AuthResponse> {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  }
}

export default new FetchWrapper()
