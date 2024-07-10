import { Issue } from "../issue/Issue";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  issue?: Issue | null;
};
