import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { RepositoryWhereUniqueInput } from "../repository/RepositoryWhereUniqueInput";

export type IssueWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  comments?: CommentListRelationFilter;
  repository?: RepositoryWhereUniqueInput;
  assignee?: StringNullableFilter;
};
