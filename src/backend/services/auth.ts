import { config } from '../config'

class AuthService {
  constructor(private url: string = config.urlBase) {}

  async execute(email: string, password: string) {
    try {
      const response = await fetch(`${this.url}/auth`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }).then((res) => res.json())

      return response
    } catch (error) {
      console.log(error);
    } 
  }
}

export default new AuthService()
