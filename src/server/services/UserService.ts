import { User } from 'interfaces/User'
import { urlBase } from 'server/config'
import FetchWrapper from 'server/FetchWrapper'

class UserService {
  constructor() {}

  async getAll() {
    return await FetchWrapper.get<User>(`${urlBase}/users`)
  }

}


export default new UserService()
