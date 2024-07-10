import { IssueWhereUniqueInput } from "../issue/IssueWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  author?: string | null;
  issue?: IssueWhereUniqueInput | null;
};
