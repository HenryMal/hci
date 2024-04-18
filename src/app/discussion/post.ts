import { Category } from "./category";

export interface Post {
  id: number;
  title: string;
  author: string;
  categoryID: number;
  age: string;
}