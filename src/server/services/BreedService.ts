import { Breed } from 'interfaces/Breed'
import { urlBase } from 'server/config'
import FetchWrapper from 'server/FetchWrapper'

class BreedService {
  private url = `${urlBase}/breeds`
  constructor() {}

  getAll(): Promise<Breed[]> {
    return FetchWrapper.get(this.url)
  }

  post(body: Breed): Promise<Breed> {
    return FetchWrapper.post(this.url, body)
  }

  put(body: Breed, id: number): Promise<Breed> {
    return FetchWrapper.put(`${this.url}/${id}`, body)
  }

  _delete(id: number) {
    return FetchWrapper.del(`${this.url}/${id}`)
  }
}

export default new BreedService()
