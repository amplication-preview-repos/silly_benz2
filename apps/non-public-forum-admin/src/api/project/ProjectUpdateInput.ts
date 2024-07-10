import { ForumUpdateManyWithoutProjectsInput } from "./ForumUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  name?: string | null;
  description?: string | null;
  owner?: string | null;
  forums?: ForumUpdateManyWithoutProjectsInput;
};
