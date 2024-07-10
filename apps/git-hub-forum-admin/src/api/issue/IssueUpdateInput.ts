import { CommentUpdateManyWithoutIssuesInput } from "./CommentUpdateManyWithoutIssuesInput";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type IssueUpdateInput = {
  title?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  comments?: CommentUpdateManyWithoutIssuesInput;
  repository?: RepositoryWhereUniqueInput | null;
  assignee?: string | null;
};
