import { ForumWhereUniqueInput } from "../forum/ForumWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  author?: string | null;
  forum?: ForumWhereUniqueInput | null;
};
