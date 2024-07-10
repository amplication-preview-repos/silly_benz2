import { CommentCreateNestedManyWithoutIssuesInput } from "./CommentCreateNestedManyWithoutIssuesInput";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type IssueCreateInput = {
  title?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  comments?: CommentCreateNestedManyWithoutIssuesInput;
  repository?: RepositoryWhereUniqueInput | null;
  assignee?: string | null;
};
