import { Pet } from "./Pet";

export interface User {
  id?: number;

  name: string;

  email: string;

  password?: string

  pets?: Pet[];
}