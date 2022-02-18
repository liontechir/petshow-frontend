import { Pet } from "interfaces/Pet";
import { urlBase } from "server/config";
import FetchWrapper from "server/FetchWrapper";

class PetService {
  private url = `${urlBase}/pets`
  constructor() {}

  getAll(): Promise<Pet[]> {
    return FetchWrapper.get(this.url)
  }

  post(body: Pet): Promise<Pet> {
    return FetchWrapper.post(this.url, body)
  }

  put(body: Pet, id: number): Promise<Pet> {
    return FetchWrapper.put(`${this.url}/${id}`, body)
  }

  _delete(id: number) {
    return FetchWrapper.del(`${this.url}/${id}`)
  }
}


export default new PetService()
