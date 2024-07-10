import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ForumWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  title?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  messages?: MessageListRelationFilter;
};
