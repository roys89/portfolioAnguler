import { Tag } from "./tag";

export interface Project {
  id: number;
  projectTitle: string;
  summary: string;
  description: string;
  projectLink: string;
  picture: string[];
  tags: Tag[];
}
