import { Forum } from "../forum/Forum";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  owner: string | null;
  forums?: Array<Forum>;
};
