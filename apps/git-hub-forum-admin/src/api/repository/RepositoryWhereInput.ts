import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IssueListRelationFilter } from "../issue/IssueListRelationFilter";

export type RepositoryWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  owner?: StringNullableFilter;
  issues?: IssueListRelationFilter;
};
