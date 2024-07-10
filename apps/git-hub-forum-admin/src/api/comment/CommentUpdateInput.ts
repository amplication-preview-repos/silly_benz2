import { IssueWhereUniqueInput } from "../issue/IssueWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  author?: string | null;
  issue?: IssueWhereUniqueInput | null;
};
