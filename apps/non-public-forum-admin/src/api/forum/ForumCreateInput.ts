import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { MessageCreateNestedManyWithoutForumsInput } from "./MessageCreateNestedManyWithoutForumsInput";

export type ForumCreateInput = {
  description?: string | null;
  title?: string | null;
  project?: ProjectWhereUniqueInput | null;
  messages?: MessageCreateNestedManyWithoutForumsInput;
};
