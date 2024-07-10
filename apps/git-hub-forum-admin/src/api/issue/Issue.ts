import { Comment } from "../comment/Comment";
import { Repository } from "../repository/Repository";

export type Issue = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  status?: "Option1" | null;
  comments?: Array<Comment>;
  repository?: Repository | null;
  assignee: string | null;
};
