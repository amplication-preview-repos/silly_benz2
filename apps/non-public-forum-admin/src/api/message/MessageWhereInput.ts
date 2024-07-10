import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  author?: StringNullableFilter;
  forum?: ForumWhereUniqueInput;
};
