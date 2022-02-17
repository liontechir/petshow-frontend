import { User } from 'interfaces/User'
import { urlBase } from 'server/config'
import FetchWrapper from 'server/FetchWrapper'

class UserService {
  private url = `${urlBase}/users`
  constructor() {}

  getAll(): Promise<User[]> {
    return FetchWrapper.get(this.url)
  }

  post(body: User): Promise<User> {
    return FetchWrapper.post(this.url, body)
  }
  
  put(body: User, id: number): Promise<User> {
    return FetchWrapper.put(`${this.url}/${id}`, body)
  }
  
  _delete(id: number) {
    return FetchWrapper.del(`${this.url}/${id}`)
  }
}


export default new UserService()
