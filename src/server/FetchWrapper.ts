import { AuthRequest } from 'interfaces/requests/AuthRequest'
import { AuthResponse } from 'interfaces/responses/AuthResponse'
import { ErrorResponse } from 'interfaces/responses/ErrorResponse'
import AuthService from './services/AuthService'

class FetchWrapper {
  constructor() {}

  private authHeader(url: string): HeadersInit {
    const user = AuthService.getUserSession()
    const isLoggedIn = !!user

    if (isLoggedIn) {
      return { Authorization: `Bearer ${user.token}` }
    } else return {}
  }

  private handleResponse(response: Response) {
    if (!response.ok) {
      if ([401].includes(response.status) && localStorage.getItem('user')) {
        AuthService.logout()
      }
      const error: Promise<ErrorResponse> = response.json()
      return Promise.reject(error)
    } else {
      return response.json()
    }
  }

  async get<T>(url: string): Promise<T | T[]> {
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: this.authHeader(url),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  }

  async post<T>(url: string, body: T): Promise<T> {
    const requestOptions: RequestInit = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...this.authHeader(url),
      },
      credentials: 'include',
      body: JSON.stringify(body),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  }

  async put<T>(url: string, body: T): Promise<T> {
    const requestOptions: RequestInit = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...this.authHeader(url),
      },
      body: JSON.stringify(body),
    }
    return fetch(url, requestOptions).then(this.handleResponse)
  }

  async del(url: string): Promise<any> {
    const requestOptions: RequestInit = {
      method: 'DELETE',
      headers: this.authHeader(url),
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
