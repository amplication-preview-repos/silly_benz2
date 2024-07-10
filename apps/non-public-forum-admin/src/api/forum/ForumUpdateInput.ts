import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { MessageUpdateManyWithoutForumsInput } from "./MessageUpdateManyWithoutForumsInput";

export type ForumUpdateInput = {
  description?: string | null;
  title?: string | null;
  project?: ProjectWhereUniqueInput | null;
  messages?: MessageUpdateManyWithoutForumsInput;
};
