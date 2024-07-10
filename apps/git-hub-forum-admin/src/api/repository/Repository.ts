import { Issue } from "../issue/Issue";

export type Repository = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  owner: string | null;
  issues?: Array<Issue>;
};
