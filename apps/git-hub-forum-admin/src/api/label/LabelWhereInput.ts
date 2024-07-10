import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LabelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  color?: StringNullableFilter;
};
