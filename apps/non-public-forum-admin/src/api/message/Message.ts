import { Forum } from "../forum/Forum";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  forum?: Forum | null;
};
