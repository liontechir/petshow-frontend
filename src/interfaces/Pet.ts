import { Breed } from "./Breed";
import { User } from "./User";

export interface Pet {
  id?: number;

  name: string;

  genre: string;

  description: string;

  user_id?: number;

  user?: User;

  breed_id?: number;

  breed?: Breed;
}
