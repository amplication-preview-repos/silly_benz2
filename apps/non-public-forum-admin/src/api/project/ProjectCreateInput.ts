import { ForumCreateNestedManyWithoutProjectsInput } from "./ForumCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  forums?: ForumCreateNestedManyWithoutProjectsInput;
};
